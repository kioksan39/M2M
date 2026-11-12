# 🎨 Полное руководство по кастомизации

Здесь вы найдёте примеры изменения стиля и структуры справочника протоколов.

## 📋 Оглавление

1. [Основные цвета](#основные-цвета)
2. [Шрифты и текст](#шрифты-и-текст)
3. [Структура карточек](#структура-карточек)
4. [Добавление новых компонентов](#добавление-новых-компонентов)
5. [Примеры стилей](#примеры-стилей)

---

## Основные цвета

### Где найти переменные цветов

В файле `osi-guide.html` найдите блок:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --bg-light: #f8fafc;
    --bg-dark: #0f172a;
    --text-light: #1e293b;
    --text-dark: #e2e8f0;
    --card-light: #ffffff;
    --card-dark: #1e293b;
    --border-light: #e2e8f0;
    --border-dark: #334155;
}
```

### Примеры изменения цветов

#### Пример 1: Красная схема
```css
:root {
    --primary: #ef4444;
    --primary-dark: #dc2626;
    --bg-light: #fef2f2;
    --bg-dark: #1f0f0f;
    --text-light: #7c2d12;
    --text-dark: #fecaca;
}
```

#### Пример 2: Зелёная схема (природная)
```css
:root {
    --primary: #10b981;
    --primary-dark: #059669;
    --bg-light: #f0fdf4;
    --bg-dark: #051f0a;
    --text-light: #15803d;
    --text-dark: #86efac;
}
```

#### Пример 3: Оранжевая схема (тёплая)
```css
:root {
    --primary: #f97316;
    --primary-dark: #ea580c;
    --bg-light: #fef3c7;
    --bg-dark: #1f1309;
    --text-light: #b45309;
    --text-dark: #fed7aa;
}
```

#### Пример 4: Фиолетовая схема (ночь)
```css
:root {
    --primary: #a855f7;
    --primary-dark: #9333ea;
    --bg-light: #f5f3ff;
    --bg-dark: #1a0b2e;
    --text-light: #6b21a8;
    --text-dark: #e9d5ff;
}
```

---

## Шрифты и текст

### Изменить основной шрифт

Найдите:
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

И замените на:

#### Серифный шрифт (классический)
```css
font-family: Georgia, 'Times New Roman', 'Courier New', serif;
```

#### Монопространственный (техничный)
```css
font-family: 'Courier New', Courier, 'Courier Prime', monospace;
```

#### Геометрический (современный)
```css
font-family: 'Trebuchet MS', 'Lucida Grande', sans-serif;
```

#### Загрузить из Google Fonts

В `<head>` добавьте:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

И в CSS:
```css
font-family: 'Poppins', sans-serif;
```

### Изменить размер текста

```css
h1 {
    font-size: 3em;  /* Было 2em */
}

.protocol-name {
    font-size: 1.5em;  /* Было 1.3em */
}

.protocol-description {
    font-size: 1.1em;  /* Было 0.95em */
}
```

---

## Структура карточек

### Округлость углов

```css
.protocol-card {
    border-radius: 20px;  /* Было 12px - более скруглённые */
}

.modal-content {
    border-radius: 24px;  /* Было 16px */
}
```

### Тень карточек

```css
.protocol-card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);  /* Была 0 2px 8px */
}

.protocol-card:hover {
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);  /* Усиленная тень */
}
```

### Эффект при наведении

Вместо смещения вверх:
```css
.protocol-card:hover {
    transform: scale(1.05);  /* Масштабирование вместо translateY */
    border-color: var(--primary);
}
```

Или с поворотом:
```css
.protocol-card:hover {
    transform: translateY(-8px) rotate(2deg);  /* С лёгким поворотом */
}
```

### Граница карточки

```css
.protocol-card {
    border: 3px solid var(--border-light);  /* Была 2px */
}
```

---

## Добавление новых компонентов

### Добавить иконку для каждого уровня

Найдите в HTML раздел слоёв:

```html
<div class="layer" data-layer="7">
    <div class="layer-number">7</div>
    <div class="layer-name">Приложение<br>(Application)</div>
    <!-- Добавьте иконку: -->
    <div style="font-size: 2em; margin-bottom: 0.5rem;">💻</div>
</div>
```

Иконки для каждого слоя:
- 7: 💻 (компьютер)
- 6: 🔐 (замок)
- 5: 📞 (сеанс)
- 4: 🚚 (транспорт)
- 3: 🗺️ (маршрутизация)
- 2: 📡 (данные)
- 1: ⚡ (физический)

### Добавить список популярных протоколов в описание слоя

В JavaScript найдите массив `protocols` и добавьте:

```javascript
// После массива protocols добавьте:
const layerInfo = {
    7: {
        name: "Приложение",
        icon: "💻",
        protocols: ["HTTP", "SMTP", "DNS", "FTP", "SSH"]
    },
    // ... и т.д. для других слоёв
};
```

### Добавить карточку информации о слое

В HTML после диаграммы слоёв добавьте:

```html
<div class="layer-info" id="layerInfo" style="display: none; 
    background: var(--card-light); padding: 2rem; border-radius: 12px;
    margin-bottom: 2rem; border-left: 4px solid var(--primary);">
    <h3 id="layerInfoTitle"></h3>
    <p id="layerInfoDesc"></p>
    <p><strong id="layerInfoProtocols"></strong></p>
</div>
```

И в JavaScript добавьте обработчик клика на слой:

```javascript
layers.forEach(layer => {
    layer.addEventListener('click', () => {
        const layerNum = layer.dataset.layer;
        const info = layerInfo[layerNum];
        document.getElementById('layerInfoTitle').textContent = 
            `Уровень ${layerNum}: ${info.name}`;
        // ... заполните остальную информацию
    });
});
```

---

## Примеры стилей

### Минималистичный стиль

```css
.protocol-card {
    border: none;
    border-bottom: 2px solid var(--primary);
    border-radius: 0;
    box-shadow: none;
    padding: 1rem;
}

.protocol-card:hover {
    box-shadow: none;
    border-bottom: 3px solid var(--primary);
}
```

### Карточка со значком

```css
.protocol-card::before {
    content: '📌';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5em;
    opacity: 0.5;
}
```

### Ярко-цветные иконки протоколов

Модифицируйте структуру карточки в HTML:

```html
<div class="protocol-card" data-icon="🌐">
    <!-- содержимое -->
</div>
```

И в CSS:

```css
.protocol-card {
    position: relative;
    padding-left: 50px;
}

.protocol-card::before {
    content: attr(data-icon);
    position: absolute;
    left: 1rem;
    font-size: 2em;
}
```

### Анимированная граница

```css
@keyframes borderAnimation {
    0% { border-color: var(--primary); }
    50% { border-color: var(--primary-dark); }
    100% { border-color: var(--primary); }
}

.protocol-card:hover {
    animation: borderAnimation 1s infinite;
}
```

---

## 🔍 Полезные советы

1. **Сохраняйте оригинал** - Перед изменениями создайте копию файла
2. **Проверяйте в браузере** - Используйте F12 для быстрого тестирования
3. **Используйте инструменты разработчика** - Проверяйте CSS в реальном времени
4. **Согласованность** - Используйте одну цветовую схему во всём документе
5. **Контрастность** - Убедитесь, что текст читаем в обоих режимах

## 📚 Ресурсы

- [CSS Variables на MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Google Fonts](https://fonts.google.com/)
- [Color Picker](https://htmlcolorcodes.com/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

