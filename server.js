const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 1337;
const dbPath = path.join(__dirname, "db.json");

const mimeTypes = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function ensureDb() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [] }, null, 2), "utf8");
  }
}

function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function writeDb(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf8");
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=UTF-8" });
  res.end(JSON.stringify(payload));
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function normalizeUser(user) {
  return {
    username: user.username,
    email: user.email,
    favorites: user.favorites || [],
    watched: user.watched || [],
    lastLogin: user.lastLogin || "-"
  };
}

async function handleApi(req, res) {
  if (req.method === "POST" && req.url === "/api/register") {
    const body = await collectBody(req);
    const username = String(body.username || "").trim();
    const email = String(body.email || "").trim();
    const password = String(body.password || "").trim();

    if (!username || !email || !password) {
      sendJson(res, 400, { error: "Fill all fields." });
      return true;
    }

    const db = readDb();
    const exists = db.users.some((item) => item.username.toLowerCase() === username.toLowerCase());
    if (exists) {
      sendJson(res, 409, { error: "User already exists." });
      return true;
    }

    db.users.push({
      username,
      email,
      password,
      favorites: [],
      watched: [],
      lastLogin: new Date().toLocaleString("ru-RU")
    });
    writeDb(db);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (req.method === "POST" && req.url === "/api/login") {
    const body = await collectBody(req);
    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();
    const db = readDb();
    const user = db.users.find(
      (item) => item.username.toLowerCase() === username.toLowerCase() && item.password === password
    );

    if (!user) {
      sendJson(res, 401, { error: "Invalid login or password." });
      return true;
    }

    user.lastLogin = new Date().toLocaleString("ru-RU");
    writeDb(db);
    sendJson(res, 200, { user: normalizeUser(user) });
    return true;
  }

  if (req.method === "GET" && req.url.startsWith("/api/user")) {
    const requestUrl = new URL(req.url, `http://localhost:${port}`);
    const username = String(requestUrl.searchParams.get("username") || "").trim();
    const db = readDb();
    const user = db.users.find((item) => item.username.toLowerCase() === username.toLowerCase());

    if (!user) {
      sendJson(res, 404, { error: "User not found." });
      return true;
    }

    sendJson(res, 200, { user: normalizeUser(user) });
    return true;
  }

  if (req.method === "POST" && req.url === "/api/preferences") {
    const body = await collectBody(req);
    const username = String(body.username || "").trim();
    const favorites = Array.isArray(body.favorites) ? body.favorites : [];
    const watched = Array.isArray(body.watched) ? body.watched : [];
    const db = readDb();
    const user = db.users.find((item) => item.username.toLowerCase() === username.toLowerCase());

    if (!user) {
      sendJson(res, 404, { error: "User not found." });
      return true;
    }

    user.favorites = favorites;
    user.watched = watched;
    writeDb(db);
    sendJson(res, 200, { user: normalizeUser(user) });
    return true;
  }

  return false;
}

http.createServer(async (req, res) => {
  try {
    const handled = await handleApi(req, res);
    if (handled) {
      return;
    }
  } catch (error) {
    sendJson(res, 500, { error: "Server error." });
    return;
  }

  const requestPath = req.url === "/" ? "index.html" : req.url;
  const filePath = path.join(__dirname, requestPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end("404 Not Found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
}).listen(port, () => {
  ensureDb();
  console.log(`Server running: http://localhost:${port}`);
});
