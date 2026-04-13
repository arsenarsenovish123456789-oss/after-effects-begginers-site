const USERS_KEY = "ae_tutorial_users";
const SESSION_KEY = "ae_tutorial_session";
const FAVORITES_KEY = "ae_tutorial_favorites";
const WATCHED_KEY = "ae_tutorial_watched";

const tutorialData = [
  { id: "velocity-edits", title: "Velocity edit basics", category: "edits", level: "Medium", duration: "12 min", description: "Разбор velocity, тайминга, sync-cut и резких переходов для edit-роликов.", link: "https://youtu.be/JyFNH_HUOTs?si=reuYboMqE0XWgNYe" },
  { id: "anime-scenepack", title: "Anime scenepack", category: "scenepacks", level: "Easy", duration: "9 min", description: "Как подготовить сценпак, почистить шум, расставить маркеры и собрать чистую нарезку.", link: "https://youtu.be/vpEbo9uBqkY?si=qFRdOJ-ldyY306Is" },
  { id: "glow-preset", title: "Glow presets", category: "presets", level: "Easy", duration: "7 min", description: "Сборка светящегося preset-стека для TikTok, reels и аниме-эдитов.", link: "https://t.me/EditsCommunityy/1085" },
  { id: "shake-impact", title: "Impact shake", category: "edits", level: "Advanced", duration: "11 min", description: "Контролируемый shake, motion blur и camera impact без грязной картинки.", link: "https://t.me/EditsCommunityy/1007" },
  { id: "fxconsole-speed", title: "FXConsole", category: "plugins", level: "Easy", duration: "6 min", description: "Ускорение монтажа в After Effects через FXConsole и горячие эффекты.", link: "https://t.me/EditsCommunityy/76" },
  { id: "optical-flares", title: "Optical Flares", category: "plugins", level: "Medium", duration: "13 min", description: "Красивые блики, цвет и композиция для синематик-роликов и интро.", link: "https://mega.nz/file/SlhnUaQA#i7P_jEM7J2ZHp9K2RE84ihpeSMbaqpJbpBsF4nLaUb4" },
  { id: "ae-beginner", title: "After Effects basics for editor", category: "basics", level: "Easy", duration: "14 min", description: "Интерфейс, композиции, keyframes, graph editor и старт без лишней воды.", link: "https://youtu.be/9EjN8c6u-xo?si=pvOdENadOZUEoruM" },
  { id: "preset-cleanup", title: "Preset cleanup and export", category: "presets", level: "Medium", duration: "10 min", description: "Как упаковать свой preset, не сломать анимации и подготовить его к раздаче.", link: "https://youtu.be/TKlLS2AO3-M?si=qVJRyDn-Hac443DD" },
  { id: "alight-basics", title: "Alight Motion basics", category: "alight", level: "Easy", duration: "8 min", description: "Базовые настройки Alight Motion, fps, проект, импорт, слои и старт для новичка.", link: "https://youtu.be/eZQyYNqJZ1Q?si=sVyXOXl69GiSWXJW" },
  { id: "alight-edits", title: "How to make edits in Alight Motion", category: "alight", level: "Medium", duration: "12 min", description: "Переходы, битмарки, шейки, velocity и общая схема сборки edit-ролика в Alight Motion.", link: "https://youtu.be/FDxTNYm1EkU?si=b2rQQ36k176L_cDc" },
  { id: "alight-cc", title: "Alight Motion CC basics", category: "cc", level: "Easy", duration: "6 min", description: "Простая база по цветокору и контрасту для edit-видео в Alight Motion.", link: "https://youtu.be/uqdjwVchx5I?si=eb6i0RHJM8yMYpj6" },
  { id: "davinci-basics", title: "DaVinci Resolve basics", category: "davinci", level: "Easy", duration: "13 min", description: "Интерфейс, таймлайн, media pool, cut page и первые шаги в DaVinci Resolve.", link: "https://youtu.be/IeySXac3vRo?si=vW0Kb4WG_QAzM-yG" },
  { id: "davinci-edit-workflow", title: "DaVinci Resolve edit workflow", category: "davinci", level: "Medium", duration: "15 min", description: "Базовая сборка эдита в Resolve: синхра, обрезка, speed ramps и экспорт.", link: "https://youtu.be/IeySXac3vRo?si=eM7VbEpj5wHUUFLY" },
  { id: "davinci-color-basics", title: "DaVinci color basics", category: "cc", level: "Medium", duration: "10 min", description: "Node-база, exposure, contrast, saturation и чистый старт в color page.", link: "https://youtu.be/IeySXac3vRo?si=eM7VbEpj5wHUUFLY" },
  { id: "deep-glow-2", title: "Deep Glow 2", category: "plugins", level: "Medium", duration: "7 min", description: "Мягкий glow для логотипов, текстов и эдитов с чистым контролем свечения.", link: "https://mega.nz/file/2xRUxT6D#HXK1gtreP2iT1pwCkhCffjvWI0g5qMvJZfcTCG2AlXo" },
  { id: "studio-shadow-3", title: "Studio Shadow 3", category: "plugins", level: "Medium", duration: "7 min", description: "Моделирование объёмной тени для текста, UI и clean motion scenes в AE.", link: "https://t.me/EditsCommunityy/333" },
  { id: "cc-basics-ae", title: "Color correction basics in After Effects", category: "cc", level: "Easy", duration: "9 min", description: "Базовый color correction для эдитов: curves, exposure, tint и контраст без грязи.", link: "https://t.me/EditsCommunityy" }
];

const resourceData = [
  { name: "Animated Composer", source: "Mister Horse / Product Manager", note: "Быстрый набор анимационных пресетов, motion-переходов и ready-to-use сцен для монтажа и motion design.", link: "https://misterhorse.com/downloads/product-manager/win" },
  { name: "Optical Flares", source: "Documents/VideoCopilot/Optical Flares", note: "Фирменные cinematic light effects для интро, logo reveal и glow-сцен.", link: "https://mega.nz/file/SlhnUaQA#i7P_jEM7J2ZHp9K2RE84ihpeSMbaqpJbpBsF4nLaUb4" },
  { name: "FXConsole", source: "Documents/VideoCopilot/FXConsole", note: "Ускоряет workflow внутри AE и подходит для отдельного раздела с хоткеями.", link: "https://t.me/EditsCommunityy/76" },
  { name: "Magic Bullet Looks", source: "Documents/Red Giant/Magic Bullet Looks", note: "Цветокор и стилизация для mood-видео, reels и dark edit-палитры.", link: "https://t.me/EditsCommunityy/400" },
  { name: "Element 3D", source: "VideoCopilot / Element 3D", note: "3D-объекты, сцены и motion-элементы для более крупных AE-композиций и интро.", link: "https://t.me/EditsCommunityy/103" },
  { name: "Deep Glow 2", source: "AE Plugin / manual link", note: "Плагин для мягкого контролируемого glow с более чистым свечением, чем стандартные эффекты.", link: "https://mega.nz/file/2xRUxT6D#HXK1gtreP2iT1pwCkhCffjvWI0g5qMvJZfcTCG2AlXo" },
  { name: "Studio Shadow 3", source: "AE Plugin / manual link", note: "Глубокие и более аккуратные тени для текста, карточек и motion UI.", link: "https://t.me/EditsCommunityy/333" },
  { name: "BCC", source: "AE Plugin / Boris FX", note: "Набор эффектов Boris FX для glow, blur, stylize и композитинга.", link: "https://t.me/EditsCommunityy/45" },
  { name: "Universe", source: "AE Plugin / Red Giant Universe", note: "Набор переходов, glow-эффектов и стилизации для монтажных и motion-дизайн сцен.", link: "https://t.me/EditsCommunityy/350" },
  { name: "CC Packs", source: "Color correction packs", note: "Готовые color correction наборы для аниме-эдитов, reels и dark mood edits.", link: "https://t.me/EditsCommunityy/964" }
];

const switcherButtons = document.querySelectorAll(".switcher-button");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const registerUsername = document.getElementById("register-username");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const passwordMeterBar = document.getElementById("password-meter-bar");
const formMessage = document.getElementById("form-message");
const logoutButton = document.getElementById("logout-button");
const profileCard = document.getElementById("profile-card");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileFavorites = document.getElementById("profile-favorites");
const profileWatched = document.getElementById("profile-watched");
const profileLastLogin = document.getElementById("profile-last-login");
const tutorialGrid = document.getElementById("tutorial-grid");
const resourceGrid = document.getElementById("resource-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const tutorialCount = document.getElementById("tutorial-count");
const resourceCount = document.getElementById("resource-count");
const favoriteCount = document.getElementById("favorite-count");

function getUsers() { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); }
function saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
function getSession() { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
function setSession(session) { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); }
function clearSession() { localStorage.removeItem(SESSION_KEY); }
function getFavorites() { return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"); }
function saveFavorites(favorites) { localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)); }
function getWatched() { return JSON.parse(localStorage.getItem(WATCHED_KEY) || "[]"); }
function saveWatched(watched) { localStorage.setItem(WATCHED_KEY, JSON.stringify(watched)); }

function setMessage(text, type = "") {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`.trim();
}

function updatePasswordStrength(value) {
  let score = 18;
  if (value.length >= 4) score += 22;
  if (value.length >= 8) score += 18;
  if (/[A-Z]/.test(value)) score += 18;
  if (/[0-9]/.test(value)) score += 14;
  if (/[^A-Za-z0-9]/.test(value)) score += 10;

  const width = Math.min(score, 100);
  let gradient = "linear-gradient(90deg, #ff8b9a, #ffd46d)";

  if (width >= 70) gradient = "linear-gradient(90deg, #4ce5b1, #86f3ff)";
  else if (width >= 45) gradient = "linear-gradient(90deg, #ffd46d, #86f3ff)";

  passwordMeterBar.style.width = `${width}%`;
  passwordMeterBar.style.background = gradient;
}

function switchMode(mode) {
  const isLogin = mode === "login";
  switcherButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  loginForm.classList.toggle("is-hidden", !isLogin);
  registerForm.classList.toggle("is-hidden", isLogin);
  setMessage("");
}

function updateCounters() {
  tutorialCount.textContent = String(tutorialData.length);
  resourceCount.textContent = String(resourceData.length);
  favoriteCount.textContent = String(getFavorites().length);
}

function renderProfile() {
  const session = getSession();
  const favorites = getFavorites();
  const watched = getWatched();

  if (!session) {
    profileCard.classList.add("is-hidden");
    return;
  }

  profileCard.classList.remove("is-hidden");
  profileName.textContent = session.username;
  profileEmail.textContent = session.email;
  profileFavorites.textContent = String(favorites.length);
  profileWatched.textContent = String(watched.length);
  profileLastLogin.textContent = session.lastLogin;
}

function createTutorialCard(item) {
  const favorites = getFavorites();
  const watched = getWatched();
  const isFavorite = favorites.includes(item.id);
  const isWatched = watched.includes(item.id);

  return `
    <article class="tutorial-card" data-link="${item.link}">
      <div class="tutorial-meta">
        <span>${item.category}</span>
        <span>${item.level}</span>
        <span>${item.duration}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tutorial-actions">
        <button class="tutorial-action ${isFavorite ? "is-active" : ""}" type="button" data-action="favorite" data-id="${item.id}">
          ${isFavorite ? "В избранном" : "В избранное"}
        </button>
        <button class="tutorial-action ${isWatched ? "is-active" : ""}" type="button" data-action="watched" data-id="${item.id}">
          ${isWatched ? "Просмотрено" : "Отметить просмотр"}
        </button>
        <a class="tutorial-action tutorial-link" href="${item.link}" target="_blank" rel="noreferrer" data-open-link="true">
          Открыть урок
        </a>
      </div>
    </article>
  `;
}

function renderTutorials() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = tutorialData.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const haystack = `${item.title} ${item.description} ${item.category}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    tutorialGrid.innerHTML = '<div class="empty-state">Ничего не найдено. Попробуй другой запрос или категорию.</div>';
    return;
  }

  tutorialGrid.innerHTML = filtered.map(createTutorialCard).join("");
}

function renderResources() {
  resourceGrid.innerHTML = resourceData.map((item) => `
    <article class="resource-card">
      <span>Local pack</span>
      <strong>${item.name}</strong>
      <p>${item.note}</p>
      <p><strong>${item.source}</strong></p>
      <p><a class="tutorial-action tutorial-link" href="${item.link}" target="_blank" rel="noreferrer">Открыть пак</a></p>
    </article>
  `).join("");
}

function handleRegister(event) {
  event.preventDefault();
  const username = registerUsername.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();

  if (!username || !email || !password) {
    setMessage("Заполни все поля для регистрации.", "error");
    return;
  }

  if (password.length < 4) {
    setMessage("Пароль должен быть минимум 4 символа.", "error");
    return;
  }

  const users = getUsers();
  const exists = users.some((user) => user.username.toLowerCase() === username.toLowerCase());

  if (exists) {
    setMessage("Такой пользователь уже существует.", "error");
    return;
  }

  users.push({ username, email, password });
  saveUsers(users);
  registerForm.reset();
  updatePasswordStrength("");
  switchMode("login");
  setMessage("Профиль создан. Теперь можно войти.", "success");
}

function handleLogin(event) {
  event.preventDefault();
  const username = loginUsername.value.trim();
  const password = loginPassword.value.trim();
  const user = getUsers().find((item) => item.username.toLowerCase() === username.toLowerCase() && item.password === password);

  if (!user) {
    setMessage("Неверный логин или пароль.", "error");
    return;
  }

  setSession({
    username: user.username,
    email: user.email,
    lastLogin: new Date().toLocaleString("ru-RU")
  });

  loginForm.reset();
  setMessage("Вход выполнен успешно.", "success");
  renderProfile();
  updateCounters();
}

function toggleCollection(getter, saver, id) {
  const collection = getter();
  const index = collection.indexOf(id);
  if (index >= 0) collection.splice(index, 1);
  else collection.push(id);
  saver(collection);
  renderTutorials();
  renderProfile();
  updateCounters();
}

tutorialGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".tutorial-action");
  if (button?.matches("[data-open-link='true']")) return;
  if (!button) {
    const card = event.target.closest(".tutorial-card");
    if (card?.dataset.link) {
      window.open(card.dataset.link, "_blank", "noopener,noreferrer");
    }
    return;
  }

  const { action, id } = button.dataset;
  if (action === "favorite") toggleCollection(getFavorites, saveFavorites, id);
  if (action === "watched") toggleCollection(getWatched, saveWatched, id);
});

switcherButtons.forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

registerPassword.addEventListener("input", (event) => {
  updatePasswordStrength(event.target.value.trim());
});

registerForm.addEventListener("submit", handleRegister);
loginForm.addEventListener("submit", handleLogin);

logoutButton.addEventListener("click", () => {
  clearSession();
  renderProfile();
  setMessage("Ты вышел из профиля.", "success");
});

searchInput.addEventListener("input", renderTutorials);
categoryFilter.addEventListener("change", renderTutorials);

updatePasswordStrength("");
renderTutorials();
renderResources();
renderProfile();
updateCounters();
