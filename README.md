# PotatozationOfMars

Проектная работа третьей когорты курса Яндекс.Практикум "Мидл Фронт-Энд разработчик" команды "Дублин" Веб-Приложение "Игра" - "Potatozation of Mars".

Игра в жанре: Arcade, Shoot'em up, Bullethell.

Процесс игры: Пользователь управляет космическим кораблем, автоматически продвигающимся по уровню. Нажатиями клавиш "WASD" или "стрелочками" можно управлять положением игрока на экране. На экране будут появляться противники атакующие игрока "пулями", количество противников и частота/сложность их атак будет зависеть от текущей сложности игры. Сложность будет увеличиваться в процессе игры. Нажатием клавиши "пробел" или "ЛКМ" игрок начнет стрелять, этими выстрелами он может уничтожать противников. Урон, частота и количество "пуль" при выстреле будет зависеть от модификаторов, которые игрок может получить побеждая "босса". "Боссы" - это сильные противники появляющиеся перед переходом на следующий уровень сложности.

Цель игры: Продержаться как можно дольше и набрать максимальное количество очков. В игре будет только "Бесконечный режим" - игру не возможно пройти "до конца", нет максимально возможного количества очков, игра продолжается до поражения игрока.

Сюжет/Тематика игры: Главный герой бизнесмен Илон Маск, который летит на Марс с целью колонизации, грузом его космического корабля является картошка, выращивание которой он хочет наладить в будущей колонии. Потеряв весь свой груз он возвращается на Землю, что бы повторить попытку и игра начинается заново.

## Ссылка на игру
https://potatozationofmars.herokuapp.com/

## Дизайн-макет
https://www.figma.com/file/43ecmoZ23TjLMOEkq6ouKI/Potatozation-of-Mars?node-id=0%3A1

## Сборка и тесты
- `npm run make-aliases` - создать алиас по адресу `https://potatozation-of-mars.localhost.ya-praktikum.tech:3000`
- `npm run build` - собрать проект в папку `dist`
- `npm run start` - запустить сервер по адресам `https://potatozation-of-mars.localhost.ya-praktikum.tech:3000` `https://localhost:3000`
- `npm run lint` - валидация файлов
- `npm run test` - запуск тестов
- `npm run generate` - генерация компонентов

## Особенности локального запуска

Так как мы используем в проекте самоподписной ssl сертификат для локальной разработки, при первом запуске нужно в отдельной вкладке открыть следующие файлы и разрешить их исполнение:
- https://127.0.0.1:8080/main.css
- https://127.0.0.1:8080/main.js

## Запуск в Docker

- `docker-compose up web` - запуск.
- `docker-compose up --build web` - запуск с пересборкой.

## Внутреннее API

### User

- `GET /api/v1/user` - получить текущего пользователя.
- `POST /api/v1/signup` - регистрация.
```
  {
    login: string
    name: string
    password: string
  }
```
- `POST /api/v1/signin` - аутентификация.
```
  {
    login: string
    password: string
  }
```
- `GET /api/v1/logout` - выход.
- `PUT /api/v1/user` - обновить текущего пользователя.
```
  {
    login: string
    name: string
  }
```

- `PUT /api/v1/user/password` - обновить пароль текущего пользователя.
```
  {
    oldPassword: string
    newPassword: string
  }
```

### Topics

- `GET /api/v1/topics` - получить все топики.
- `GET /api/v1/topics/:id` - получить топик по id.
- `POST /api/v1/topics` - создать новый топик.
```
  {
      subject: string
      content: string
  }
```

### Comments

- `GET /api/v1/topic-comments/:topicId` - получить все комментарии топика.
- `GET /api/v1/comments/:id` - получить комментарии по id.
- `POST /api/v1/comments` - создать новый комментарий.
```
  {
    content: string
    topicId: number
    parentId?: number | null
    hierarchyLevel?: number
  }
```

### Reactions

- `GET /api/v1/comment-reactions/:commentId` - получить все реакции комментария.
- `GET /api/v1/reactions/:id` - получить реакции по id.
- `POST /api/v1/reactions` - создать новую реакции.
- `DELETE /api/v1/reactions/:id` - удалить реакцию по id.
```
  {
    content: string
    hierarchyLevel?: number
    commentId: number
  }
```

### Themes

- `GET /api/v1/themes` - получить все темы оформления.
- `GET /api/v1/themes/:id` - получить тему оформления по id.
- `POST /api/v1/themes` - создать новую тему оформления (может только пользователь с ролью admin).
```
  {
    name: string
    preset: string(JSONB)
    isEnabled?: boolean
  }
```
- `PUT /api/v1/themes` - обновить тему оформления (может только пользователь с ролью admin).
```
  {
    name: string
    preset: string(JSONB)
    isEnabled?: boolean
  }
```

### User settings

- `GET /api/v1/user-settings` - получить настройки текущего пользователя.
- `POST /api/v1/user-settings` - создать настройки текущего пользователя.
```
  {
    themeId: number
    isDarkModeEnabled?: boolean
  }
```
- `PUT /api/v1/user-settings` - обновить настройки текущего пользователя.
```
  {
    themeId?: number
    isDarkModeEnabled?: boolean
  }
```
