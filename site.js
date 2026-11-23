/* ============================================
   НАСТРОЙКИ КОМПАНИИ — замените на свои данные
   ============================================ */
const COMPANY = {
  name: "Мебель ПМР",
  phone: "+373 XXX XX XXX",
  phoneLink: "tel:+373XXXXXXXXX",
  whatsapp: "https://wa.me/373XXXXXXXXX",
  telegram: "https://t.me/username",
  address: "г. Тирасполь, ул. Примерная, 1",
  hours: {
    mon: "09:00–18:00",
    tue: "09:00–18:00",
    wed: "09:00–18:00",
    thu: "09:00–18:00",
    fri: "09:00–18:00",
    sat: "09:00–15:00",
    sun: "Выходной"
  }
};

/* ============================================
   ДАННЫЕ РАЗДЕЛОВ И ТОВАРОВ
   Добавляйте свои товары в массив products
   ============================================ */
const SECTIONS = {
  korpus: {
    title: "Корпусная мебель",
    items: [
      { id: "kuhni", name: "Кухни", file: "kuhni.html", desc: "Кухонные гарнитуры на заказ и фабричные модели" },
      { id: "shkafy", name: "Шкафы", file: "shkafy.html", desc: "Шкафы-купе, распашные и встроенные" },
      { id: "prihozhie", name: "Прихожие", file: "prihozhie.html", desc: "Мебель для прихожей любой площади" },
      { id: "spalni", name: "Спальни", file: "spalni.html", desc: "Спальные гарнитуры и комплекты" },
      { id: "detskie", name: "Детские", file: "detskie.html", desc: "Мебель для детских комнат" },
      { id: "stenki", name: "Стенки и гостиные", file: "stenki.html", desc: "Гостиные стенки и мебель для зала" }
    ]
  },
  soft: {
    title: "Мягкая мебель",
    items: [
      { id: "krovati", name: "Кровати", file: "krovati.html", desc: "Кровати с мягким изголовьем и ортопедические" },
      { id: "divany", name: "Диваны", file: "divany.html", desc: "Диваны, угловые и прямые модели" },
      { id: "kresla", name: "Кресла и пуфы", file: "kresla.html", desc: "Кресла, пуфы и мягкие сиденья" }
    ]
  }
};

/* Товары по разделам. type: "own" | "factory" */
const PRODUCTS = {
  kuhni: [
    { name: "Кухня «Модерн»", type: "own", img: "img/kuhni-1.jpg" },
    { name: "Кухня «Классика»", type: "own", img: "img/kuhni-2.jpg" },
    { name: "Кухня «Лофт»", type: "factory", img: "img/kuhni-3.jpg" },
    { name: "Кухня «Сканди»", type: "factory", img: "img/kuhni-4.jpg" },
    { name: "Угловая кухня «Премиум»", type: "own", img: "img/kuhni-5.jpg" },
    { name: "Кухня «Минимализм»", type: "factory", img: "img/kuhni-6.jpg" }
  ],
  shkafy: [
    { name: "Шкаф-купе «Стандарт»", type: "own", img: "img/shkafy-1.jpg" },
    { name: "Шкаф-купе «Премиум»", type: "own", img: "img/shkafy-2.jpg" },
    { name: "Распашной шкаф «Классика»", type: "factory", img: "img/shkafy-3.jpg" },
    { name: "Встроенный шкаф", type: "own", img: "img/shkafy-4.jpg" },
    { name: "Шкаф с зеркалом", type: "factory", img: "img/shkafy-5.jpg" },
    { name: "Угловой шкаф-купе", type: "own", img: "img/shkafy-6.jpg" }
  ],
  prihozhie: [
    { name: "Прихожая «Комфорт»", type: "own", img: "img/prihozhie-1.jpg" },
    { name: "Прихожая «Мини»", type: "factory", img: "img/prihozhie-2.jpg" },
    { name: "Прихожая с зеркалом", type: "own", img: "img/prihozhie-3.jpg" },
    { name: "Открытая прихожая", type: "factory", img: "img/prihozhie-4.jpg" },
    { name: "Прихожая «Лофт»", type: "own", img: "img/prihozhie-5.jpg" },
    { name: "Угловая прихожая", type: "factory", img: "img/prihozhie-6.jpg" }
  ],
  spalni: [
    { name: "Спальня «Уют»", type: "own", img: "img/spalni-1.jpg" },
    { name: "Спальня «Премиум»", type: "own", img: "img/spalni-2.jpg" },
    { name: "Спальня «Сканди»", type: "factory", img: "img/spalni-3.jpg" },
    { name: "Комплект «Классика»", type: "factory", img: "img/spalni-4.jpg" },
    { name: "Спальня с гардеробом", type: "own", img: "img/spalni-5.jpg" },
    { name: "Молодёжная спальня", type: "factory", img: "img/spalni-6.jpg" }
  ],
  detskie: [
    { name: "Детская «Радуга»", type: "own", img: "img/detskie-1.jpg" },
    { name: "Детская «Космос»", type: "own", img: "img/detskie-2.jpg" },
    { name: "Кровать-чердак", type: "factory", img: "img/detskie-3.jpg" },
    { name: "Письменный стол", type: "factory", img: "img/detskie-4.jpg" },
    { name: "Шкаф для детской", type: "own", img: "img/detskie-5.jpg" },
    { name: "Комплект «Мечта»", type: "factory", img: "img/detskie-6.jpg" }
  ],
  stenki: [
    { name: "Стенка «Гостиная»", type: "own", img: "img/stenki-1.jpg" },
    { name: "Горка «Модерн»", type: "own", img: "img/stenki-2.jpg" },
    { name: "ТВ-зона", type: "factory", img: "img/stenki-3.jpg" },
    { name: "Стенка «Классика»", type: "factory", img: "img/stenki-4.jpg" },
    { name: "Модульная гостиная", type: "own", img: "img/stenki-5.jpg" },
    { name: "Стенка с витриной", type: "factory", img: "img/stenki-6.jpg" }
  ],
  krovati: [
    { name: "Кровать «Комфорт»", type: "own", img: "img/krovati-1.jpg" },
    { name: "Кровать с подъёмным механизмом", type: "own", img: "img/krovati-2.jpg" },
    { name: "Кровать «Премиум»", type: "factory", img: "img/krovati-3.jpg" },
    { name: "Двуспальная кровать", type: "factory", img: "img/krovati-4.jpg" },
    { name: "Кровать с мягким изголовьем", type: "own", img: "img/krovati-5.jpg" },
    { name: "Ортопедическая кровать", type: "factory", img: "img/krovati-6.jpg" }
  ],
  divany: [
    { name: "Диван «Уют»", type: "own", img: "img/divany-1.jpg" },
    { name: "Угловой диван", type: "own", img: "img/divany-2.jpg" },
    { name: "Диван-кровать", type: "factory", img: "img/divany-3.jpg" },
    { name: "Прямой диван", type: "factory", img: "img/divany-4.jpg" },
    { name: "Диван «Лофт»", type: "own", img: "img/divany-5.jpg" },
    { name: "Модульный диван", type: "factory", img: "img/divany-6.jpg" }
  ],
  kresla: [
    { name: "Кресло «Комфорт»", type: "own", img: "img/kresla-1.jpg" },
    { name: "Кресло-качалка", type: "own", img: "img/kresla-2.jpg" },
    { name: "Пуф «Мягкий»", type: "factory", img: "img/kresla-3.jpg" },
    { name: "Кресло с пуфом", type: "factory", img: "img/kresla-4.jpg" },
    { name: "Офисное кресло", type: "own", img: "img/kresla-5.jpg" },
    { name: "Бескаркасное кресло", type: "factory", img: "img/kresla-6.jpg" }
  ]
};

const SECTION_DESC = {
  kuhni: "Кухонные гарнитуры по индивидуальным размерам и готовые фабричные модели. Качественная фурнитура, надёжные материалы.",
  shkafy: "Шкафы-купе, распашные и встроенные шкафы. Изготовление по вашим размерам и проекту.",
  prihozhie: "Функциональные прихожие для квартир и домов. Компактные и вместительные решения.",
  spalni: "Спальные гарнитуры и комплекты мебели для спальни. Уют и комфорт в каждой детали.",
  detskie: "Безопасная и удобная мебель для детских комнат. Растущие вместе с ребёнком решения.",
  stenki: "Гостиные стенки, горки и мебель для зала. Современные и классические варианты.",
  krovati: "Кровати с мягким изголовьем, подъёмным механизмом и ортопедическими основаниями.",
  divany: "Диваны прямые, угловые и модульные. Для гостиной, кухни и офиса.",
  kresla: "Кресла, пуфы и мягкие сиденья. Дополнят любой интерьер."
};

/* ============================================
   ШАПКА И ПОДВАЛ
   ============================================ */
function getCurrentPage() {
  const path = window.location.pathname;
  let file = path.split("/").pop() || "index.html";
  if (!file || file === "") file = "index.html";
  return file.replace(".html", "") || "index";
}

function navLink(href, label, current) {
  const page = href.replace(".html", "").replace(/^\//, "") || "index";
  const active = (page === current || (current === "index" && page === "index")) ? " active" : "";
  // catalog button stays button
  if (href === "catalog.html" && label === "Весь каталог") {
    return `<a href="${href}" class="btn btn-header">Весь каталог</a>`;
  }
  return `<a href="${href}" class="${active.trim()}">${label}</a>`;
}

function renderHeader() {
  const current = getCurrentPage();
  // map section pages
  const isSection = ["kuhni","shkafy","prihozhie","spalni","detskie","stenki","krovati","divany","kresla"].includes(current);
  const catalogActive = (current === "catalog" || isSection) ? " active" : "";

  return `
  <header class="header">
    <div class="container header-top">
      <a href="index.html" class="logo">${COMPANY.name}<span>мебельная компания</span></a>
      <div class="header-contacts">
        <a href="${COMPANY.phoneLink}">${COMPANY.phone}</a>
        <span>${COMPANY.address}</span>
      </div>
      <button class="menu-toggle" id="menuToggle" aria-label="Меню">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="container header-inner">
      <nav class="nav" id="mainNav">
        ${navLink("index.html", "Главная", current)}
        ${navLink("kuhni.html", "Кухни", current)}
        ${navLink("shkafy.html", "Шкафы", current)}
        ${navLink("prihozhie.html", "Прихожие", current)}
        ${navLink("spalni.html", "Спальни", current)}
        ${navLink("divany.html", "Диваны", current)}
        ${navLink("krovati.html", "Кровати", current)}
        ${navLink("proizvodstvo.html", "Производство", current)}
        ${navLink("contacts.html", "Контакты", current)}
        <a href="catalog.html" class="btn btn-header${catalogActive && current === "catalog" ? " active" : ""}">Весь каталог</a>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-col">
        <div class="footer-logo">${COMPANY.name}</div>
        <p>Производство мягкой и корпусной мебели.<br>Продажа фабричной мебели.</p>
      </div>
      <div class="footer-col">
        <h4>Разделы</h4>
        <a href="catalog.html">Каталог</a>
        <a href="proizvodstvo.html">Производство</a>
        <a href="contacts.html">Контакты</a>
      </div>
      <div class="footer-col">
        <h4>Контакты</h4>
        <p>${COMPANY.address}</p>
        <a href="${COMPANY.phoneLink}">${COMPANY.phone}</a>
        <div class="footer-messengers">
          <a href="${COMPANY.whatsapp}" target="_blank" rel="noopener" class="msg-btn whatsapp">WhatsApp</a>
          <a href="${COMPANY.telegram}" target="_blank" rel="noopener" class="msg-btn telegram">Telegram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">© ${new Date().getFullYear()} ${COMPANY.name}. Тирасполь, Приднестровье</div>
    </div>
  </footer>`;
}

/* ============================================
   ОБЩИЕ ФУНКЦИИ
   ============================================ */
function initLayout() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("active");
    });
  }
}

function getAllSections() {
  return [...SECTIONS.korpus.items, ...SECTIONS.soft.items];
}

function renderProductCard(product) {
  const typeLabel = product.type === "own" ? "Наше производство" : "Фабричная";
  return `
  <div class="product-card" data-type="${product.type}">
    <div class="product-img">
      <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.classList.add('no-img');">
      <span class="img-placeholder">Фото</span>
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <span class="product-type">${typeLabel}</span>
      <span class="product-price">Цена по запросу</span>
    </div>
  </div>`;
}

function renderSectionTiles(excludeId) {
  const all = getAllSections().filter(s => s.id !== excludeId);
  return all.map(s => `
    <a href="${s.file}" class="section-tile">
      <span class="tile-title">${s.name}</span>
      <span class="tile-desc">${s.desc}</span>
    </a>
  `).join("");
}

function initCatalogPage(sectionId) {
  const products = PRODUCTS[sectionId] || [];
  const grid = document.getElementById("products-grid");
  const tabs = document.querySelectorAll(".tab-btn");
  const otherSections = document.getElementById("other-sections");

  function showProducts(filter) {
    let list = products;
    if (filter === "own") list = products.filter(p => p.type === "own");
    if (filter === "factory") list = products.filter(p => p.type === "factory");
    if (grid) {
      grid.innerHTML = list.length
        ? list.map(renderProductCard).join("")
        : '<p class="empty-msg">Товары не найдены</p>';
    }
  }

  showProducts("all");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      showProducts(btn.dataset.filter);
    });
  });

  if (otherSections) {
    otherSections.innerHTML = renderSectionTiles(sectionId);
  }
}

function renderCatCard(s) {
  return `
    <a href="${s.file}" class="cat-card">
      <div class="cat-card-img">Фото</div>
      <div class="cat-card-body">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <span class="more">Подробнее</span>
      </div>
    </a>`;
}

function initHomePage() {
  const korpusGrid = document.getElementById("korpus-tiles");
  const softGrid = document.getElementById("soft-tiles");
  if (korpusGrid) {
    korpusGrid.innerHTML = SECTIONS.korpus.items.map(renderCatCard).join("");
  }
  if (softGrid) {
    softGrid.innerHTML = SECTIONS.soft.items.map(renderCatCard).join("");
  }
}

function initCatalogIndex() {
  const korpusList = document.getElementById("korpus-list");
  const softList = document.getElementById("soft-list");
  if (korpusList) {
    korpusList.innerHTML = SECTIONS.korpus.items.map(s => `
      <a href="${s.file}" class="catalog-item">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </a>
    `).join("");
  }
  if (softList) {
    softList.innerHTML = SECTIONS.soft.items.map(s => `
      <a href="${s.file}" class="catalog-item">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </a>
    `).join("");
  }
}

function initContacts() {
  const hoursEl = document.getElementById("work-hours");
  if (!hoursEl) return;
  const days = [
    { key: "mon", label: "Пн" },
    { key: "tue", label: "Вт" },
    { key: "wed", label: "Ср" },
    { key: "thu", label: "Чт" },
    { key: "fri", label: "Пт" },
    { key: "sat", label: "Сб" },
    { key: "sun", label: "Вс" }
  ];
  hoursEl.innerHTML = days.map(d => {
    const time = COMPANY.hours[d.key];
    const isOff = time === "Выходной" || !time;
    return `<div class="hour-card ${isOff ? "off" : ""}">
      <span class="day">${d.label}</span>
      <span class="time">${time}</span>
    </div>`;
  }).join("");

  const phoneEl = document.getElementById("contact-phone");
  if (phoneEl) {
    phoneEl.href = COMPANY.phoneLink;
    phoneEl.textContent = COMPANY.phone;
  }
  const addressEl = document.getElementById("contact-address");
  if (addressEl) addressEl.textContent = COMPANY.address;

  const wa = document.getElementById("btn-whatsapp");
  const tg = document.getElementById("btn-telegram");
  if (wa) wa.href = COMPANY.whatsapp;
  if (tg) tg.href = COMPANY.telegram;
}

document.addEventListener("DOMContentLoaded", () => {
  initLayout();
  const page = document.body.dataset.page;
  if (page === "home") initHomePage();
  if (page === "catalog") initCatalogIndex();
  if (page === "contacts") initContacts();
  if (page && page.startsWith("section-")) {
    initCatalogPage(page.replace("section-", ""));
  }
});
