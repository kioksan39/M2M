const protocolDatabase = {
    'HTTP': {
        layer: 7,
        port: '80/443',
        description: 'Протокол передачи гипертекста',
        stages: [
            {
                step: 1,
                title: 'DNS Разрешение',
                description: 'Браузер отправляет запрос на DNS сервер: "Какой IP адрес у google.com?"',
                diagram: 'dns-query',
                packet: 'DNS Query: A google.com',
                nodes: ['Browser', 'DNS Server'],
                flow: 'Browser → DNS Server'
            },
            {
                step: 2,
                title: 'DNS Ответ',
                description: 'DNS сервер отвечает с IP адресом: 142.250.0.1',
                diagram: 'dns-response',
                packet: 'DNS Answer: 142.250.0.1',
                nodes: ['Browser', 'DNS Server'],
                flow: 'DNS Server → Browser'
            },
            {
                step: 3,
                title: 'TCP Соединение (SYN)',
                description: 'Браузер отправляет SYN пакет на порт 80/443 сервера для установления соединения',
                diagram: 'tcp-syn',
                packet: 'TCP SYN, SEQ=1000, port=80',
                nodes: ['Browser', 'Web Server'],
                flow: 'Browser → Web Server'
            },
            {
                step: 4,
                title: 'TCP Подтверждение (SYN-ACK)',
                description: 'Сервер отвечает SYN-ACK пакетом, подтверждая готовность принять соединение',
                diagram: 'tcp-syn-ack',
                packet: 'TCP SYN-ACK, SEQ=2000, ACK=1001',
                nodes: ['Browser', 'Web Server'],
                flow: 'Web Server → Browser'
            },
            {
                step: 5,
                title: 'TCP Финализация (ACK)',
                description: 'Браузер отправляет ACK, завершая трёхстороннее рукопожатие. Соединение установлено.',
                diagram: 'tcp-ack',
                packet: 'TCP ACK, SEQ=1001, ACK=2001',
                nodes: ['Browser', 'Web Server'],
                flow: 'Browser → Web Server'
            },
            {
                step: 6,
                title: 'HTTP Запрос',
                description: 'Браузер отправляет HTTP запрос: GET /index.html HTTP/1.1 с заголовками',
                diagram: 'http-request',
                packet: 'GET /index.html HTTP/1.1\r\nHost: google.com',
                nodes: ['Browser', 'Web Server'],
                flow: 'Browser → Web Server'
            },
            {
                step: 7,
                title: 'HTTP Ответ (Заголовки)',
                description: 'Сервер отправляет заголовки ответа: HTTP/1.1 200 OK с информацией о контенте',
                diagram: 'http-response-header',
                packet: 'HTTP/1.1 200 OK\r\nContent-Type: text/html',
                nodes: ['Browser', 'Web Server'],
                flow: 'Web Server → Browser'
            },
            {
                step: 8,
                title: 'HTTP Ответ (Данные)',
                description: 'Сервер отправляет тело страницы (HTML, CSS, JavaScript) в нескольких пакетах',
                diagram: 'http-response-body',
                packet: '<html><head>...</head><body>...',
                nodes: ['Browser', 'Web Server'],
                flow: 'Web Server → Browser (multiple packets)'
            },
            {
                step: 9,
                title: 'Закрытие Соединения',
                description: 'Сервер отправляет FIN пакет, указывая на конец передачи. Браузер отвечает ACK.',
                diagram: 'tcp-fin',
                packet: 'TCP FIN, ACK',
                nodes: ['Browser', 'Web Server'],
                flow: 'Web Server → Browser & Browser → Web Server'
            }
        ],
        fullDescription: `HTTP (HyperText Transfer Protocol) - это протокол уровня приложения (Layer 7), используемый для передачи веб-страниц и других ресурсов через Интернет. HTTP работает поверх TCP соединения (обычно на порту 80 для незащищённого HTTP и порту 443 для HTTPS).

Характеристики HTTP:
• Текстовый протокол (читаемый человеком)
• Request-Response модель
• Без сохранения состояния (stateless)
• Может использовать Keep-Alive для переиспользования соединения
• HTTPS добавляет TLS/SSL шифрование для безопасности

Методы HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
Коды ответов: 1xx (информация), 2xx (успех), 3xx (перенаправление), 4xx (ошибка клиента), 5xx (ошибка сервера)`
    },
    
    'TCP': {
        layer: 4,
        port: 'varies',
        description: 'Протокол управления передачей (надёжная доставка)',
        stages: [
            {
                step: 1,
                title: 'Инициирование Соединения (SYN)',
                description: 'Клиент отправляет SYN пакет на сервер с начальным номером последовательности (SEQ)',
                diagram: 'tcp-client-send-syn',
                packet: 'TCP SYN (SEQ=1000, ACK=0)',
                nodes: ['Client', 'Server'],
                flow: 'Client → Server'
            },
            {
                step: 2,
                title: 'Сервер Отвечает (SYN-ACK)',
                description: 'Сервер отвечает SYN-ACK: подтверждает полученный SEQ и отправляет свой SEQ',
                diagram: 'tcp-server-syn-ack',
                packet: 'TCP SYN-ACK (SEQ=2000, ACK=1001)',
                nodes: ['Client', 'Server'],
                flow: 'Server → Client'
            },
            {
                step: 3,
                title: 'Клиент Завершает Рукопожатие (ACK)',
                description: 'Клиент отправляет ACK, подтверждая SEQ сервера. Соединение установлено и готово к передаче данных.',
                diagram: 'tcp-client-ack',
                packet: 'TCP ACK (SEQ=1001, ACK=2001)',
                nodes: ['Client', 'Server'],
                flow: 'Client → Server'
            },
            {
                step: 4,
                title: 'Передача Данных',
                description: 'Данные передаются в обе стороны с последовательными номерами (SEQ) и подтверждениями (ACK)',
                diagram: 'tcp-data-transfer',
                packet: 'TCP DATA (SEQ=1001, DATA...)',
                nodes: ['Client', 'Server'],
                flow: 'Bidirectional with ACKs'
            },
            {
                step: 5,
                title: 'Закрытие Соединения (FIN)',
                description: 'Одна сторона отправляет FIN пакет, сообщая о завершении передачи',
                diagram: 'tcp-fin-close',
                packet: 'TCP FIN (SEQ=...)',
                nodes: ['Client', 'Server'],
                flow: 'Client → Server'
            },
            {
                step: 6,
                title: 'Подтверждение Закрытия',
                description: 'Другая сторона отвечает ACK на FIN пакет, подтверждая закрытие соединения',
                diagram: 'tcp-ack-close',
                packet: 'TCP ACK (ACK=...)',
                nodes: ['Client', 'Server'],
                flow: 'Server → Client'
            }
        ],
        fullDescription: `TCP (Transmission Control Protocol) - это протокол транспортного уровня (Layer 4), обеспечивающий надёжную, упорядоченную доставку данных.

Ключевые особенности TCP:
• Ориентирован на соединение (connection-oriented)
• Гарантирует доставку всех пакетов
• Сохраняет порядок пакетов
• Обнаруживает и исправляет ошибки
• Контролирует скорость передачи (flow control)
• Использует 3-Way Handshake для установления соединения
• Использует 4-Way Handshake для закрытия соединения

Поля TCP заголовка:
- Порт источника (16 бит)
- Порт назначения (16 бит)
- Номер последовательности (SEQ) - 32 бита
- Номер подтверждения (ACK) - 32 бита
- Флаги: SYN, ACK, FIN, RST, PSH, URG`
    },
    
    'DNS': {
        layer: 7,
        port: '53',
        description: 'Преобразование доменных имён в IP адреса',
        stages: [
            {
                step: 1,
                title: 'Клиент запрашивает IP',
                description: 'Браузер отправляет DNS запрос: "Какой IP адрес у google.com?" на локальный DNS резолвер',
                diagram: 'dns-client-query',
                packet: 'DNS Query: Type=A, Domain=google.com',
                nodes: ['Client', 'Recursive Resolver'],
                flow: 'Client → Recursive Resolver'
            },
            {
                step: 2,
                title: 'Резолвер запрашивает Root NS',
                description: 'Если адрес не в кэше, резолвер отправляет запрос Root Name Server: "Где находится google.com?"',
                diagram: 'dns-resolver-to-root',
                packet: 'DNS Query: Domain=google.com',
                nodes: ['Recursive Resolver', 'Root Nameserver'],
                flow: 'Recursive Resolver → Root NS'
            },
            {
                step: 3,
                title: 'Root NS отвечает адресом TLD',
                description: 'Root Name Server отвечает адресом .com TLD сервера, который знает про google.com',
                diagram: 'dns-root-response',
                packet: 'DNS Answer: NS com.gtld-servers.net',
                nodes: ['Root Nameserver', 'Recursive Resolver'],
                flow: 'Root NS → Recursive Resolver'
            },
            {
                step: 4,
                title: 'Резолвер запрашивает TLD NS',
                description: 'Резолвер отправляет запрос на .com TLD сервер: "Где google.com?"',
                diagram: 'dns-resolver-to-tld',
                packet: 'DNS Query: Domain=google.com',
                nodes: ['Recursive Resolver', 'TLD Nameserver'],
                flow: 'Recursive Resolver → TLD NS'
            },
            {
                step: 5,
                title: 'TLD NS отвечает адресом Authoritative NS',
                description: 'TLD сервер отвечает адресом авторитетного Name Server Google, который хранит окончательный ответ',
                diagram: 'dns-tld-response',
                packet: 'DNS Answer: NS ns1.google.com',
                nodes: ['TLD Nameserver', 'Recursive Resolver'],
                flow: 'TLD NS → Recursive Resolver'
            },
            {
                step: 6,
                title: 'Резолвер запрашивает Authoritative NS',
                description: 'Резолвер отправляет финальный запрос на авторитетный Name Server Google',
                diagram: 'dns-resolver-to-auth',
                packet: 'DNS Query: Domain=google.com',
                nodes: ['Recursive Resolver', 'Authoritative NS'],
                flow: 'Recursive Resolver → Authoritative NS'
            },
            {
                step: 7,
                title: 'Authoritative NS отвечает IP адресом',
                description: 'Авторитетный сервер Google отвечает с IP адресом: 142.250.0.1',
                diagram: 'dns-auth-response',
                packet: 'DNS Answer: A 142.250.0.1 (TTL=300)',
                nodes: ['Authoritative NS', 'Recursive Resolver'],
                flow: 'Authoritative NS → Recursive Resolver'
            },
            {
                step: 8,
                title: 'Резолвер отвечает клиенту',
                description: 'Резолвер кэширует ответ и отправляет IP адрес обратно клиенту/браузеру',
                diagram: 'dns-resolver-to-client',
                packet: 'DNS Answer: A 142.250.0.1',
                nodes: ['Recursive Resolver', 'Client'],
                flow: 'Recursive Resolver → Client'
            }
        ],
        fullDescription: `DNS (Domain Name System) - это иерархическая система преобразования доменных имён в IP адреса. Работает на уровне приложения (Layer 7), обычно на портах UDP 53 (запросы) и TCP 53 (передача зон).

Иерархия DNS серверов:
1. Root Nameservers (13 основных серверов) - знают про TLD серверы
2. TLD (Top Level Domain) Nameservers - .com, .org, .ru и т.д. - знают про авторитетные серверы
3. Authoritative Nameservers - хранят окончательные записи для доменов
4. Recursive Resolvers (ISP DNS или публичные DNS) - кэшируют и помогают клиентам

Типы DNS записей:
- A: IPv4 адрес
- AAAA: IPv6 адрес
- MX: Mail Exchange (почтовые серверы)
- CNAME: Canonical Name (псевдоним)
- NS: Nameserver (указатель на NS)
- TTL: Time To Live (время кэширования)`
    },

    'UDP': {
        layer: 4,
        port: 'varies',
        description: 'Протокол дейтаграмм пользователя (быстрая доставка)',
        stages: [
            {
                step: 1,
                title: 'Отправка Дейтаграммы без подтверждения',
                description: 'Клиент отправляет UDP дейтаграмму на сервер БЕЗ установления соединения',
                diagram: 'udp-send',
                packet: 'UDP Datagram (Port: 53/67/5353)',
                nodes: ['Client', 'Server'],
                flow: 'Client → Server (no connection setup)'
            },
            {
                step: 2,
                title: 'Получение Дейтаграммы',
                description: 'Сервер получает дейтаграмму и обрабатывает её',
                diagram: 'udp-receive',
                packet: 'UDP Packet received',
                nodes: ['Server'],
                flow: 'Process received packet'
            },
            {
                step: 3,
                title: 'Отправка Ответа',
                description: 'Сервер отправляет ответ клиенту (если требуется) - также без гарантии доставки',
                diagram: 'udp-response',
                packet: 'UDP Response Datagram',
                nodes: ['Server', 'Client'],
                flow: 'Server → Client (no ACK required)'
            },
            {
                step: 4,
                title: 'Нет гарантии доставки',
                description: 'UDP не гарантирует, что пакеты будут доставлены или прибудут в правильном порядке',
                diagram: 'udp-no-guarantee',
                packet: 'Packet may be lost or reordered',
                nodes: ['Network'],
                flow: 'No reliability mechanism'
            }
        ],
        fullDescription: `UDP (User Datagram Protocol) - это протокол транспортного уровня (Layer 4), обеспечивающий быструю, но ненадёжную доставку данных.

Ключевые особенности UDP:
• Без соединения (connectionless)
• Быстрая доставка (low latency)
• Меньше служебной информации чем TCP
• НЕ гарантирует доставку пакетов
• НЕ гарантирует порядок пакетов
• НЕ обнаруживает ошибки (есть только checksum)
• Нет контроля потока
• Лучше для потоковых приложений (видео, голос, игры)

Применение UDP:
- DNS запросы (port 53)
- DHCP (port 67/68)
- mDNS (port 5353)
- Потоковое видео и аудио
- Онлайн игры
- VoIP

UDP заголовок содержит только:
- Порт источника (16 бит)
- Порт назначения (16 бит)
- Длина (16 бит)
- Контрольная сумма (16 бит)`
    }
};

