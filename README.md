# Сайт мебельной компании (Тирасполь)

Многостраничный сайт на чистом HTML + CSS + JavaScript. Готов к выкладке на GitHub Pages.

## Структура файлов

```
mebel-site/
├── index.html          — Главная
├── catalog.html        — Каталог (группы)
├── kuhni.html          — Кухни
├── shkafy.html         — Шкафы
├── prihozhie.html      — Прихожие
├── spalni.html         — Спальни
├── detskie.html        — Детские
├── stenki.html         — Стенки и гостиные
├── krovati.html        — Кровати
├── divany.html         — Диваны
├── kresla.html         — Кресла и пуфы
├── proizvodstvo.html   — Производство
├── contacts.html       — Контакты
├── style.css           — Общие стили
├── site.js             — Данные, шапка, подвал, логика
└── img/                — Папка для фото товаров
```

## Как заменить данные компании

Откройте `site.js` — в самом начале объект `COMPANY`:

```js
const COMPANY = {
  name: "Мебель ПМР",
  phone: "+373 XXX XX XXX",
  phoneLink: "tel:+373XXXXXXXXX",
  whatsapp: "https://wa.me/373XXXXXXXXX",
  telegram: "https://t.me/username",
  address: "г. Тирасполь, ул. Примерная, 1",
  hours: { ... }
};
```

## Как добавить товары

В `site.js` объект `PRODUCTS`. Для каждого раздела массив объектов:

```js
{ name: "Название", type: "own", img: "img/foto.jpg" }  // own = наше производство
{ name: "Название", type: "factory", img: "img/foto.jpg" }
```

Фото кладите в папку `img/`. Пока файлов нет — показывается серая заглушка «Фото».

## Запуск

Откройте `index.html` в браузере или выложите всю папку на GitHub Pages / любой хостинг.
