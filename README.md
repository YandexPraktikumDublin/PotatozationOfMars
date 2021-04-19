# PotatozationOfMars

Проектная работа третьей когорты курса Яндекс.Практикум "Мидл Фронт-Энд разработчик" команды "Дублин" Веб-Приложение "Игра" - "Potatozation of Mars".

Игра в жанре: Arcade, Shoot'em up, Bullethell.

Процесс игры: Пользователь управляет космическим кораблем, автоматически продвигающимся по уровню. Нажатиями клавиш "WASD" или "стрелочками" можно управлять положением игрока на экране. На экране будут появляться противники атакующие игрока "пулями", количество противников и частота/сложность их атак будет зависеть от текущей сложности игры. Сложность будет увеличиваться в процессе игры. Нажатием клавиши "пробел" или "ЛКМ" игрок начнет стрелять, этими выстрелами он может уничтожать противников. Урон, частота и количество "пуль" при выстреле будет зависеть от модификаторов, которые игрок может получить побеждая "босса". "Боссы" - это сильные противники появляющиеся перед переходом на следующий уровень сложности.

Цель игры: Продержаться как можно дольше и набрать максимальное количество очков. В игре будет только "Бесконечный режим" - игру не возможно пройти "до конца", нет максимально возможного количества очков, игра продолжается до поражения игрока.

Сюжет/Тематика игры: Главный герой бизнесмен Илон Маск, который летит на Марс с целью колонизации, грузом его космического корабля является картошка, выращивание которой он хочет наладить в будущей колонии. Потеряв весь свой груз он возвращается на Землю, что бы повторить попытку и игра начинается заново.

## Ссылка на игру
https://dublin-potatozation-of-mars.ya-praktikum.tech

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

- `sudo docker rm -vf $(docker ps -a -q)` - удалить все контейнеры.
- `sudo docker rmi -f $(docker images -a -q)` - удалить все образы.
- `sudo docker system prune -a` - удалить все неиспользуемые образы.
- `sudo docker system prune --volumes` - удалить все volumes.
- `sudo docker-compose up` - запуск в режиме разработки.
- `sudo docker-compose up --build` - запуск в режиме разработки с пересборкой.

## Деплой

### База данных
1. `ssh <login>@178.154.214.1` - войти на виртуальную машину.
2. запустить postgres с помощью следующей команды (нужно задать нормальный пароль):
  `sudo docker run -d \
  --name postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=potatozation-of-mars \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v /potatozation-of-mars/postgresdata:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:12`

#### Дополнительные команды
- `sudo docker exec -it postgres bash` - войти в образ postgres.
- `psql -U postgres` - запустить psql.

### Приложение

1. `sudo docker build -f Dockerfile.production --no-cache --force-rm --tag potatozation-of-mars .` - создание образа для боевого режима.
2. `sudo docker tag potatozation-of-mars cr.yandex/crp0a71agbjm7td67833/potatozation-of-mars` - создание тега для образа.
3. `sudo docker push cr.yandex/crp0a71agbjm7td67833/potatozation-of-mars` - отправить образ (если требуется авторизация, выполнить шаг 7 на локальном компьютере).
4. https://console.cloud.yandex.ru/folders/b1g8sio5liqo869jm3o8/container-registry - здесь проверить образ.
5. `ssh <login>@178.154.214.1` - войти на виртуальную машину (<login> - вместо этого использовать свой логин).
6. https://cloud.yandex.ru/docs/container-registry/solutions/run-docker-on-vm?utm_source=console&utm_medium=side-bar-left&utm_campaign=container-registry - раздел 4 "Аутентифицируйтесь в реестре от своего имени". Нужно получить токен.
7. `sudo docker login  --username oauth --password <OAuth token> cr.yandex` - аутентификация через OAuth токен (токен получить на шаге 6).
8. `sudo docker pull cr.yandex/crp0a71agbjm7td67833/potatozation-of-mars:latest` - скачать образ на виртуальную машину.
9. запустить образ. Здесь нужно подставить пароль, который был использован при запуске базы данных. Если база данных уже запущена, спросить у Игоря пароль:
   `sudo docker run \
   --env NODE_ENV=production \
   --env PORT=5000 \
   --env POSTGRES_HOST=0.0.0.0 \
   --env POSTGRES_USER=postgres \
   --env POSTGRES_PASSWORD=password \
   --env POSTGRES_DB=potatozation-of-mars \
   --detach \
   --net=host \
   cr.yandex/crp0a71agbjm7td67833/potatozation-of-mars:latest`

## Внутреннее API

### Enjoyer

- `GET /api/v1/enjoyer` - получить текущего пользователя.
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
- `POST /api/v1/logout` - выход.
- `PUT /api/v1/enjoyer` - обновить текущего пользователя.
```
  {
    login: string
    name: string
  }
```

- `PUT /api/v1/enjoyer/password` - обновить пароль текущего пользователя.
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

### Enjoyer settings

- `GET /api/v1/enjoyer-settings` - получить настройки текущего пользователя.
- `POST /api/v1/enjoyer-settings` - создать настройки текущего пользователя.
```
  {
    themeId: number
    isDarkModeEnabled?: boolean
  }
```
- `PUT /api/v1/enjoyer-settings` - обновить настройки текущего пользователя.
```
  {
    themeId?: number
    isDarkModeEnabled?: boolean
  }
```

### Feedbacks

- `GET /api/v1/feedbacks` - получить всю обратную связь (может только пользователь с ролью admin).
- `GET /api/v1/feedbacks/:id` - получить обратную связь по id (может только пользователь с ролью admin).
- `POST /api/v1/feedbacks` - создать обратную связь.
```
  {
    name: string
    email: string
    content: string
  }
```
