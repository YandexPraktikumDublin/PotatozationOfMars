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

## Запуск в Docker

- `docker-compose up --build app` - первый запуск
- `docker-compose up app` - последующие запуски
