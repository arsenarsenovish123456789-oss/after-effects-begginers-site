const SESSION_KEY = "motion_tutorial_session";
const LANG_KEY = "motion_tutorial_lang";

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

const translations = {
  ru: {
    brand_title: "Motion Tutorials Hub",
    brand_subtitle: "after effects, alight motion, davinci resolve",
    nav_tutorials: "Туториалы",
    nav_resources: "Ресурсы",
    nav_contact: "Связь",
    open_account: "Аккаунт",
    owner_button: "Владелец",
    hero_eyebrow: "Based on Edits Community + your AE stack",
    hero_title: "Туториалы по After Effects, Alight Motion и DaVinci Resolve",
    hero_text: "Сайт собран под тематику канала <a class=\"inline-link\" href=\"https://t.me/EditsCommunityy\" target=\"_blank\" rel=\"noreferrer\">Edits Community</a>: туториалы по монтажу в After Effects, Alight Motion и DaVinci Resolve, подборки preset-паков, сценпаков, исходников, cc и плагинов. Это уже полноценный хаб с каталогом уроков, ресурсами, профилем и быстрыми переходами на материалы.",
    hero_browse: "Смотреть туториалы",
    hero_profile: "Открыть профиль",
    stat_lessons: "уроков в каталоге",
    stat_resources: "ресурсов и паков",
    stat_favorites: "избранных уроков",
    panel_label: "Personal access",
    panel_title: "Профиль редактора",
    panel_status: "profile saved",
    logged_in: "Logged in",
    logout: "Выйти",
    favorite_lessons: "Избранные уроки",
    watched_lessons: "Просмотренные уроки",
    last_login: "Последний вход",
    empty_profile: "Открой окно авторизации, чтобы войти или зарегистрироваться. Данные теперь сохраняются в базе на сервере.",
    open_auth_modal: "Открыть авторизацию",
    library_title: "Каталог уроков по монтажу и эффектам",
    resources_title: "Наборы и инструменты",
    resources_text: "Раздел с плагинами, паками и инструментами для монтажа, эффектов, color correction и motion design.",
    contact_title: "Открыть Telegram-канал с исходной тематикой",
    contact_text: "Каталог построен вокруг уроков, плагинов и паков. Для связи по сайту и обновлениям можно написать владельцу напрямую.",
    owner_link: "Связаться с владельцем: @nrxzwq",
    go_telegram: "Перейти в Telegram",
    auth_window: "Auth window",
    auth_title: "Авторизация",
    login: "Вход",
    register: "Регистрация",
    username: "Username",
    username_name: "Имя пользователя",
    password: "Пароль",
    login_submit: "Войти в профиль",
    register_submit: "Создать профиль",
    open_lesson: "Открыть урок",
    open_pack: "Открыть пак",
    favorite_add: "В избранное",
    favorite_on: "В избранном",
    watched_add: "Отметить просмотр",
    watched_on: "Просмотрено",
    nothing_found: "Ничего не найдено. Попробуй другой запрос или категорию.",
    profile_created: "Профиль создан. Теперь можно войти.",
    login_success: "Вход выполнен успешно.",
    logout_success: "Ты вышел из профиля.",
    bad_login: "Неверный логин или пароль.",
    fill_fields: "Заполни все поля для регистрации.",
    short_password: "Пароль должен быть минимум 4 символа.",
    user_exists: "Такой пользователь уже существует.",
    user_not_found: "Пользователь не найден."
  },
  en: {
    brand_title: "Motion Tutorials Hub",
    brand_subtitle: "after effects, alight motion, davinci resolve",
    nav_tutorials: "Tutorials",
    nav_resources: "Resources",
    nav_contact: "Contact",
    open_account: "Account",
    owner_button: "Owner",
    hero_eyebrow: "Based on Edits Community + your AE stack",
    hero_title: "Tutorials for After Effects, Alight Motion and DaVinci Resolve",
    hero_text: "This site is built around <a class=\"inline-link\" href=\"https://t.me/EditsCommunityy\" target=\"_blank\" rel=\"noreferrer\">Edits Community</a>: editing tutorials for After Effects, Alight Motion and DaVinci Resolve, plus preset packs, scenepacks, sources, CC and plugins. It now works as a full hub with lessons, resources, profile access and quick links.",
    hero_browse: "Browse tutorials",
    hero_profile: "Open profile",
    stat_lessons: "lessons in library",
    stat_resources: "resources and packs",
    stat_favorites: "favorite lessons",
    panel_label: "Personal access",
    panel_title: "Editor profile",
    panel_status: "profile saved",
    logged_in: "Logged in",
    logout: "Logout",
    favorite_lessons: "Favorite lessons",
    watched_lessons: "Watched lessons",
    last_login: "Last login",
    empty_profile: "Open the auth window to sign in or register. Data is now stored in the server database.",
    open_auth_modal: "Open auth window",
    library_title: "Editing and effects tutorial library",
    resources_title: "Tools and packs",
    resources_text: "A plugin and pack section for editing, effects, color correction and motion design.",
    contact_title: "Open the source Telegram channel",
    contact_text: "The catalog is built around lessons, plugins and packs. For site updates and questions, contact the owner directly.",
    owner_link: "Contact owner: @nrxzwq",
    go_telegram: "Open Telegram",
    auth_window: "Auth window",
    auth_title: "Authorization",
    login: "Login",
    register: "Register",
    username: "Username",
    username_name: "Username",
    password: "Password",
    login_submit: "Sign in",
    register_submit: "Create account",
    open_lesson: "Open lesson",
    open_pack: "Open pack",
    favorite_add: "Add favorite",
    favorite_on: "Favorited",
    watched_add: "Mark watched",
    watched_on: "Watched",
    nothing_found: "Nothing found. Try another query or category.",
    profile_created: "Profile created. You can sign in now.",
    login_success: "Login successful.",
    logout_success: "You signed out.",
    bad_login: "Invalid login or password.",
    fill_fields: "Fill in all registration fields.",
    short_password: "Password must be at least 4 characters.",
    user_exists: "This user already exists.",
    user_not_found: "User not found."
  }
};

const switcherButtons = document.querySelectorAll(".switcher-button");
const langButtons = document.querySelectorAll(".lang-button");
const tutorialGrid = document.getElementById("tutorial-grid");
const resourceGrid = document.getElementById("resource-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const tutorialCount = document.getElementById("tutorial-count");
const resourceCount = document.getElementById("resource-count");
const favoriteCount = document.getElementById("favorite-count");
const profileCard = document.getElementById("profile-card");
const emptyProfile = document.getElementById("empty-profile");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileFavorites = document.getElementById("profile-favorites");
const profileWatched = document.getElementById("profile-watched");
const profileLastLogin = document.getElementById("profile-last-login");
const logoutButton = document.getElementById("logout-button");
const authModal = document.getElementById("auth-modal");
const formMessage = document.getElementById("form-message");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const passwordMeterBar = document.getElementById("password-meter-bar");
const registerPassword = document.getElementById("register-password");

let currentLang = localStorage.getItem(LANG_KEY) || "ru";
let currentUser = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

function t(key) {
  return translations[currentLang][key] || key;
}

function setMessage(text, type = "") {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`.trim();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  langButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.lang === lang));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  searchInput.placeholder = currentLang === "ru" ? "Поиск: glow, velocity, shake, scenepack..." : "Search: glow, velocity, shake, scenepack...";
  renderTutorials();
  renderResources();
}

function updatePasswordStrength(value) {
  let score = 18;
  if (value.length >= 4) score += 22;
  if (value.length >= 8) score += 18;
  if (/[A-Z]/.test(value)) score += 18;
  if (/[0-9]/.test(value)) score += 14;
  if (/[^A-Za-z0-9]/.test(value)) score += 10;
  const width = Math.min(score, 100);
  passwordMeterBar.style.width = `${width}%`;
}

function openModal() {
  authModal.classList.remove("is-hidden");
  authModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  authModal.classList.add("is-hidden");
  authModal.setAttribute("aria-hidden", "true");
  setMessage("");
}

function switchMode(mode) {
  const isLogin = mode === "login";
  switcherButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
    button.textContent = t(button.dataset.i18n);
  });
  loginForm.classList.toggle("is-hidden", !isLogin);
  registerForm.classList.toggle("is-hidden", isLogin);
  setMessage("");
}

async function api(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Request error");
  }
  return data;
}

function updateCounters() {
  tutorialCount.textContent = String(tutorialData.length);
  resourceCount.textContent = String(resourceData.length);
  favoriteCount.textContent = String(currentUser?.favorites?.length || 0);
}

function renderProfile() {
  if (!currentUser) {
    profileCard.classList.add("is-hidden");
    emptyProfile.classList.remove("is-hidden");
    updateCounters();
    return;
  }

  profileCard.classList.remove("is-hidden");
  emptyProfile.classList.add("is-hidden");
  profileName.textContent = currentUser.username;
  profileEmail.textContent = currentUser.email;
  profileFavorites.textContent = String(currentUser.favorites.length);
  profileWatched.textContent = String(currentUser.watched.length);
  profileLastLogin.textContent = currentUser.lastLogin;
  updateCounters();
}

function createTutorialCard(item) {
  const isFavorite = currentUser?.favorites?.includes(item.id);
  const isWatched = currentUser?.watched?.includes(item.id);

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
          ${isFavorite ? t("favorite_on") : t("favorite_add")}
        </button>
        <button class="tutorial-action ${isWatched ? "is-active" : ""}" type="button" data-action="watched" data-id="${item.id}">
          ${isWatched ? t("watched_on") : t("watched_add")}
        </button>
        <a class="tutorial-action tutorial-link" href="${item.link}" target="_blank" rel="noreferrer" data-open-link="true">${t("open_lesson")}</a>
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
    return matchesCategory && (!query || haystack.includes(query));
  });

  if (!filtered.length) {
    tutorialGrid.innerHTML = `<div class="empty-state">${t("nothing_found")}</div>`;
    return;
  }

  tutorialGrid.innerHTML = filtered.map(createTutorialCard).join("");
}

function renderResources() {
  resourceGrid.innerHTML = resourceData.map((item) => `
    <article class="resource-card">
      <span>Resource</span>
      <strong>${item.name}</strong>
      <p>${item.note}</p>
      <p><strong>${item.source}</strong></p>
      <p><a class="tutorial-action tutorial-link" href="${item.link}" target="_blank" rel="noreferrer">${t("open_pack")}</a></p>
    </article>
  `).join("");
}

async function refreshCurrentUser() {
  if (!currentUser?.username) return;
  try {
    const data = await api(`/api/user?username=${encodeURIComponent(currentUser.username)}`);
    currentUser = data.user;
    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  } catch {
    currentUser = null;
    localStorage.removeItem(SESSION_KEY);
  }
  renderProfile();
  renderTutorials();
}

async function savePreferences() {
  if (!currentUser) {
    openModal();
    return false;
  }
  const data = await api("/api/preferences", {
    method: "POST",
    body: JSON.stringify({
      username: currentUser.username,
      favorites: currentUser.favorites,
      watched: currentUser.watched
    })
  });
  currentUser = data.user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  renderProfile();
  renderTutorials();
  return true;
}

document.getElementById("open-auth-modal").addEventListener("click", openModal);
document.getElementById("hero-open-auth").addEventListener("click", openModal);
document.getElementById("panel-open-auth").addEventListener("click", openModal);
document.getElementById("auth-modal-close").addEventListener("click", closeModal);
document.getElementById("auth-modal-close-button").addEventListener("click", closeModal);

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.lang));
});

switcherButtons.forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

registerPassword.addEventListener("input", (event) => {
  updatePasswordStrength(event.target.value.trim());
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (!username || !email || !password) {
    setMessage(t("fill_fields"), "error");
    return;
  }
  if (password.length < 4) {
    setMessage(t("short_password"), "error");
    return;
  }

  try {
    await api("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password })
    });
    registerForm.reset();
    updatePasswordStrength("");
    switchMode("login");
    setMessage(t("profile_created"), "success");
  } catch (error) {
    setMessage(error.message.includes("exists") ? t("user_exists") : error.message, "error");
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  try {
    const data = await api("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
    currentUser = data.user;
    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
    loginForm.reset();
    renderProfile();
    renderTutorials();
    setMessage(t("login_success"), "success");
    setTimeout(closeModal, 500);
  } catch {
    setMessage(t("bad_login"), "error");
  }
});

logoutButton.addEventListener("click", () => {
  currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  renderProfile();
  renderTutorials();
});

tutorialGrid.addEventListener("click", async (event) => {
  const button = event.target.closest(".tutorial-action");
  if (button?.matches("[data-open-link='true']")) return;

  if (!button) {
    const card = event.target.closest(".tutorial-card");
    if (card?.dataset.link) {
      window.open(card.dataset.link, "_blank", "noopener,noreferrer");
    }
    return;
  }

  if (!currentUser) {
    openModal();
    return;
  }

  const { action, id } = button.dataset;
  if (action === "favorite") {
    currentUser.favorites = currentUser.favorites.includes(id)
      ? currentUser.favorites.filter((item) => item !== id)
      : [...currentUser.favorites, id];
  }

  if (action === "watched") {
    currentUser.watched = currentUser.watched.includes(id)
      ? currentUser.watched.filter((item) => item !== id)
      : [...currentUser.watched, id];
  }

  try {
    await savePreferences();
  } catch {
    setMessage("Save error", "error");
  }
});

searchInput.addEventListener("input", renderTutorials);
categoryFilter.addEventListener("change", renderTutorials);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

setLang(currentLang);
switchMode("login");
renderResources();
renderProfile();
renderTutorials();
refreshCurrentUser();
