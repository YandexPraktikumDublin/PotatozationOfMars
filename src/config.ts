const IS_DEV = process.env.NODE_ENV !== 'production'

export const SITE_URL = 'https://dublin-potatozation-of-mars.ya-praktikum.tech'
export const SITE_TITLE = 'Potatozation of Mars'
export const SITE_DESCRIPTION =
  'The main character is a businessman Elon Musk, who is flying to Mars for the purpose of colonization, the cargo of his spaceship is potatoes, the cultivation of which he wants to establish in a future colony. After losing all his cargo, he returns to Earth to try again and the game starts again.'

export const PATHS = {
  BASE: '/',
  AUTH: '/auth',
  SIGNUP: '/signup',
  GAME: '/game',
  PROFILE: '/profile',
  LEADERBOARD: '/leaderboard',
  FORUM: '/forum',
  FORUM_TOPIC: '/forum/topics/:id'
}

export const SERVER_URL = 'https://ya-praktikum.tech'

export const BASE_API_URL = `${SERVER_URL}/api/v2`

export const INNER_API_V1_URL = '/api/v1'
export const INNER_SERVER_API_V1_URL = IS_DEV
  ? `https://web:5000${INNER_API_V1_URL}`
  : `http://localhost:5000${INNER_API_V1_URL}`

export const YANDEX_OAUTH_REDIRECT_URL = 'https://oauth.yandex.ru/authorize'

export const DEFAULT_ERROR_MESSAGE = 'something went wrong'

export const RATING_FIELD_NAME = 'potatozationOfMarsScores'
export const RATING_LIMIT = 10

export const T_800_PHRASES = [
  'Hasta la vista, baby',
  'I need your clothes, your boots, and your motorcycle',
  'I’ll be back'
]
