const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;

http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  let ext = path.extname(filePath);
  let contentType = 'text/html';

  if (ext === '.js') contentType = 'text/javascript';
  if (ext === '.css') contentType = 'text/css';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.jpg') contentType = 'image/jpg';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}).listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});