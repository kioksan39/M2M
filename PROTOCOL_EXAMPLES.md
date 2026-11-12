# 📚 Примеры протоколов для добавления

Здесь собраны готовые к использованию примеры протоколов, которые вы можете добавить в справочник.

## 🚀 Как использовать

1. Выберите нужный протокол из списка ниже
2. Скопируйте полный код протокола
3. Откройте `osi-guide.html` в текстовом редакторе
4. Найдите строку `const protocols = [`
5. Перед `];` вставьте ваш протокол
6. Не забудьте добавить запятую перед новым протоколом
7. Сохраните и обновите браузер

---

## 📡 Уровень 7 - Приложение

### Protobuf (Protocol Buffers)
```javascript
{
    name: "Protobuf",
    layer: 7,
    description: "Формат сериализации данных от Google. Компактный и быстрый.",
    port: "varies",
    function: "Сериализация данных",
    uses: "HTTP, gRPC",
    fullDescription: "Protocol Buffers - это язык для сериализации структурированных данных, разработанный Google. Он более эффективен, чем JSON и XML."
}
```

### gRPC
```javascript
{
    name: "gRPC",
    layer: 7,
    description: "Современная RPC фреймворк от Google. Использует HTTP/2 и Protobuf.",
    port: "50051",
    function: "Микросервисы и RPC",
    uses: "HTTP/2",
    fullDescription: "gRPC обеспечивает высокопроизводительные удалённые вызовы процедур с поддержкой потоков."
}
```

### WebSocket
```javascript
{
    name: "WebSocket",
    layer: 7,
    description: "Протокол для двусторонней связи в реальном времени. Работает поверх HTTP.",
    port: "80/443",
    function: "Реальное время, чат, уведомления",
    uses: "HTTP/TCP",
    fullDescription: "WebSocket позволяет браузеру и серверу обмениваться данными в реальном времени без постоянных запросов."
}
```

### MQTT
```javascript
{
    name: "MQTT",
    layer: 7,
    description: "Message Queuing Telemetry Transport. Лёгкий протокол для IoT.",
    port: "1883/8883",
    function: "IoT, Интернет вещей",
    uses: "TCP",
    fullDescription: "MQTT - это протокол на основе pub/sub для устройств IoT и M2M (машина-машина) коммуникаций."
}
```

### CoAP
```javascript
{
    name: "CoAP",
    layer: 7,
    description: "Constrained Application Protocol. Упрощённый HTTP для IoT устройств.",
    port: "5683",
    function: "IoT приложения",
    uses: "UDP",
    fullDescription: "CoAP разработан для устройств с ограниченными ресурсами и сетей с низкой пропускной способностью."
}
```

### XMPP
```javascript
{
    name: "XMPP",
    layer: 7,
    description: "Extensible Messaging and Presence Protocol. Используется для мгновенных сообщений.",
    port: "5222/5269",
    function: "Мгновенные сообщения",
    uses: "TCP",
    fullDescription: "XMPP - протокол для децентрализованной мгновенной передачи сообщений и наличия."
}
```

### LDAP
```javascript
{
    name: "LDAP",
    layer: 7,
    description: "Lightweight Directory Access Protocol. Доступ к службам каталогов.",
    port: "389/636",
    function: "Аутентификация и управление пользователями",
    uses: "TCP",
    fullDescription: "LDAP используется для доступа и управления информацией о пользователях в централизованном каталоге (Active Directory)."
}
```

### SIP
```javascript
{
    name: "SIP",
    layer: 7,
    description: "Session Initiation Protocol. Инициация сессий VoIP и видеоконференций.",
    port: "5060/5061",
    function: "VoIP, видеоконференции",
    uses: "UDP/TCP",
    fullDescription: "SIP инициирует и управляет сеансами связи для VoIP, видеоконференций и других мультимедийных коммуникаций."
}
```

### RTP
```javascript
{
    name: "RTP",
    layer: 7,
    description: "Real-time Transport Protocol. Доставка аудио и видео в реальном времени.",
    port: "varies",
    function: "Аудио/видео потоки",
    uses: "UDP",
    fullDescription: "RTP предоставляет функции доставки данных в реальном времени для аудио и видеоконференций."
}
```

### OAuth 2.0
```javascript
{
    name: "OAuth 2.0",
    layer: 7,
    description: "Протокол авторизации. Безопасный доступ к ресурсам без передачи пароля.",
    port: "443",
    function: "Авторизация и единый вход",
    uses: "HTTPS",
    fullDescription: "OAuth 2.0 позволяет пользователям авторизоваться через третьих сторон без передачи своих учётных данных."
}
```

---

## 🚚 Уровень 4 - Транспорт

### QUIC
```javascript
{
    name: "QUIC",
    layer: 4,
    description: "Quick UDP Internet Connections. Быстрый протокол на базе UDP для HTTP/3.",
    port: "443",
    function: "Транспорт для HTTP/3",
    uses: "UDP",
    fullDescription: "QUIC обеспечивает преимущества TCP (надёжность) с преимуществами UDP (скорость). Основа HTTP/3."
}
```

### SECP
```javascript
{
    name: "SECP",
    layer: 4,
    description: "Selective Repeat ARQ Protocol. Протокол надёжной доставки с выборочным повтором.",
    port: "N/A",
    function: "Надёжная доставка",
    uses: "IP",
    fullDescription: "SECP повышает надёжность доставки данных посредством выборочного повтора потерянных пакетов."
}
```

### SACK
```javascript
{
    name: "TCP SACK",
    layer: 4,
    description: "Selective Acknowledgment. Расширение TCP для более эффективной обработки потерь пакетов.",
    port: "varies",
    function: "Оптимизация TCP",
    uses: "TCP",
    fullDescription: "SACK позволяет приёмнику сообщить отправителю ровно какие блоки данных он получил, что ускоряет восстановление."
}
```

---

## 🗺️ Уровень 3 - Сеть

### IPv4 (подробнее)
```javascript
{
    name: "IPv4 Multicast",
    layer: 3,
    description: "Групповая рассылка в IPv4. Отправка одного пакета множеству получателей.",
    port: "N/A",
    function: "Групповая доставка",
    uses: "IP",
    fullDescription: "IPv4 Multicast позволяет одному отправителю отправить пакеты множеству подписчиков одновременно."
}
```

### IS-IS
```javascript
{
    name: "IS-IS",
    layer: 3,
    description: "Intermediate System to Intermediate System. Внутридомен маршрутизация.",
    port: "N/A",
    function: "Динамическая маршрутизация",
    uses: "CLNP, IP",
    fullDescription: "IS-IS - это протокол динамической маршрутизации, альтернатива OSPF, часто используется в провайдерских сетях."
}
```

### VRRP
```javascript
{
    name: "VRRP",
    layer: 3,
    description: "Virtual Router Redundancy Protocol. Высокая доступность для маршрутизаторов.",
    port: "112",
    function: "Отказоустойчивость маршрутизаторов",
    uses: "IP",
    fullDescription: "VRRP позволяет нескольким маршрутизаторам работать как один виртуальный маршрутизатор для отказоустойчивости."
}
```

### Tunnel
```javascript
{
    name: "Tunnel",
    layer: 3,
    description: "IP в IP туннелирование. Инкапсуляция IP пакетов в IP пакеты.",
    port: "N/A",
    function: "VPN, интеграция сетей",
    uses: "IP",
    fullDescription: "Туннелирование позволяет безопасно соединять удалённые сети через публичный интернет."
}
```

### L2TP
```javascript
{
    name: "L2TP",
    layer: 3,
    description: "Layer 2 Tunneling Protocol. Туннелирование между сетями на уровне 2.",
    port: "1701",
    function: "VPN туннелирование",
    uses: "UDP",
    fullDescription: "L2TP часто используется с IPSec для создания безопасных VPN соединений."
}
```

---

## 📡 Уровень 2 - Канал данных

### LLC
```javascript
{
    name: "LLC",
    layer: 2,
    description: "Logical Link Control. Управление логической связью в локальной сети.",
    port: "N/A",
    function: "Логическое управление каналом",
    uses: "Ethernet, Wi-Fi",
    fullDescription: "LLC предоставляет интерфейс между сетевым уровнем и физическим уровнем на уровне 2."
}
```

### MAC
```javascript
{
    name: "MAC",
    layer: 2,
    description: "Media Access Control. Контроль доступа к среде передачи данных.",
    port: "N/A",
    function: "Управление доступом к среде",
    uses: "Physical Layer",
    fullDescription: "MAC определяет, как устройства получают доступ к физической среде (кабель или эфир)."
}
```

### STP
```javascript
{
    name: "STP",
    layer: 2,
    description: "Spanning Tree Protocol. Стандартный протокол для управления топологией.",
    port: "N/A",
    function: "Предотвращение циклов",
    uses: "Ethernet",
    fullDescription: "STP предотвращает циклы в сетях с множественной избыточностью и обеспечивает автоматический переход на резервный путь."
}
```

### LACP
```javascript
{
    name: "LACP",
    layer: 2,
    description: "Link Aggregation Control Protocol. Объединение нескольких каналов.",
    port: "N/A",
    function: "Увеличение пропускной способности",
    uses: "Ethernet",
    fullDescription: "LACP позволяет объединить несколько физических каналов в один логический для увеличения пропускной способности."
}
```

### Bluetooth
```javascript
{
    name: "Bluetooth",
    layer: 2,
    description: "Беспроводной протокол для коротких дистанций. Часто используется для периферии.",
    port: "N/A",
    function: "Беспроводная передача на коротких дистанциях",
    uses: "Radio Waves",
    fullDescription: "Bluetooth работает в диапазоне 2.4 ГГц и используется для наушников, клавиатур, мышей и других устройств."
}
```

### ZigBee
```javascript
{
    name: "ZigBee",
    layer: 2,
    description: "Беспроводной протокол для IoT. Низкое энергопотребление, большая дальность в сетях.",
    port: "N/A",
    function: "IoT сети",
    uses: "Radio Waves",
    fullDescription: "ZigBee создаёт mesh-сети с низким энергопотреблением для домашних систем и IoT приложений."
}
```

### 6LoWPAN
```javascript
{
    name: "6LoWPAN",
    layer: 2,
    description: "IPv6 over Low-power Wireless. IPv6 для маломощных беспроводных сетей.",
    port: "N/A",
    function: "IoT, беспроводные сенсоры",
    uses: "IEEE 802.15.4",
    fullDescription: "6LoWPAN позволяет использовать IPv6 в маломощных беспроводных сетях, популярна в IoT."
}
```

---

## ⚡ Уровень 1 - Физический

### DSL
```javascript
{
    name: "DSL",
    layer: 1,
    description: "Digital Subscriber Line. Высокоскоростное соединение через медные кабели.",
    port: "N/A",
    function: "Высокоскоростной интернет",
    uses: "Copper Lines",
    fullDescription: "DSL (ADSL, VDSL) обеспечивает высокую скорость интернета через обычные телефонные линии."
}
```

### USB
```javascript
{
    name: "USB",
    layer: 1,
    description: "Universal Serial Bus. Стандарт соединения периферийных устройств.",
    port: "N/A",
    function: "Передача данных и питание",
    uses: "Serial Cable",
    fullDescription: "USB используется для подключения периферии (мышь, клавиатура) и передачи данных между устройствами."
}
```

### Ethernet (Physical)
```javascript
{
    name: "Ethernet (100BASE-T)",
    layer: 1,
    description: "100 Мбит/с Ethernet через витую пару или волокно.",
    port: "N/A",
    function: "Локальная сеть",
    uses: "Copper or Fiber",
    fullDescription: "Fast Ethernet обеспечивает скорость 100 Мбит/с и является стандартом для локальных сетей."
}
```

### Cellular
```javascript
{
    name: "Cellular (4G/LTE)",
    layer: 1,
    description: "Мобильная сеть четвёртого поколения. Высокоскоростное мобильное соединение.",
    port: "N/A",
    function: "Мобильный интернет",
    uses: "Radio Waves",
    fullDescription: "LTE/4G обеспечивает высокую скорость мобильного интернета с низкой задержкой."
}
```

### 5G
```javascript
{
    name: "5G",
    layer: 1,
    description: "Мобильная сеть пятого поколения. Ультравысокая скорость и низкая задержка.",
    port: "N/A",
    function: "Высокоскоростной мобильный интернет",
    uses: "Radio Waves",
    fullDescription: "5G обеспечивает очень высокую скорость, низкую задержку и поддержку массового IoT."
}
```

---

## 💡 Советы

1. **Не забывайте запятую** - каждый протокол (кроме последнего) должен заканчиваться запятой
2. **Проверьте синтаксис** - все скобки и кавычки должны быть парными
3. **Обновите браузер** - сохраните файл и обновите страницу (F5)
4. **Проверьте консоль** - F12 покажет ошибки, если они есть

---

**Всего в справочнике:** 40+ протоколов 🎉

