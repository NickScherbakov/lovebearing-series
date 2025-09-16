# LoveBearing Series Website

Это статический сайт для проекта LoveBearing Series, размещенный на GitHub Pages.

## Структура сайта

```
docs/
├── index.html          # Главная страница
├── stories.html        # Страница со всеми историями
├── css/
│   └── style.css       # Основные стили
├── js/
│   ├── main.js         # Основной JavaScript
│   └── stories.js      # JavaScript для страницы историй
├── favicon.svg         # Иконка сайта
└── .nojekyll          # Файл для отключения Jekyll
```

## Настройка GitHub Pages

1. Перейдите в настройки репозитория
2. В разделе "Pages" выберите:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/docs"
3. Сохраните настройки

## Разработка

### Локальный запуск
```bash
# Из корневой папки репозитория
cd docs
python -m http.server 8000
# Или используйте любой другой локальный сервер
```

### Добавление новых историй

Истории добавляются в файл `js/stories.js` в массив `sampleStories`. В будущем это можно заменить на API или автоматическую загрузку из папки stories репозитория.

### Структура истории

```javascript
{
    id: 1,
    title: "Название истории",
    author: "Автор",
    type: "student|teacher|parent|alumni",
    subject: "math|chinese|english|physics|chemistry|biology|history|geography|politics|general",
    date: "2025-09-XX",
    tags: ["тег1", "тег2"],
    excerpt: "Краткое описание...",
    content: "Полный текст в формате Markdown...",
    likes: 0,
    views: 0
}
```

## Функциональность

- ✅ Адаптивный дизайн для мобильных устройств
- ✅ Фильтрация и сортировка историй
- ✅ Модальное окно для чтения полных историй
- ✅ Плавная прокрутка и анимации
- ✅ Современный UI с градиентами и тенями

## Будущие улучшения

- [ ] Интеграция с GitHub API для автоматической загрузки историй
- [ ] Система комментариев
- [ ] Поиск по историям
- [ ] Темная тема
- [ ] PWA функциональность
- [ ] Многоязычная поддержка

## Технологии

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Marked.js для парсинга Markdown
- Google Fonts (Noto Sans SC)

## Лицензия

MIT License - см. LICENSE файл в корне репозитория.