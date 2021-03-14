import React, { FC, memo, useState } from 'react'
import { withCookies } from '@hocs'
import { useCookies } from '@hooks'

const COOKIE_KEY = 'notification'

const CookiesNotification: FC = memo(() => {
  const [cookie, setCookie] = useCookies(COOKIE_KEY)
  const [read, setRead] = useState(false)

  if (cookie || read) {
    return null
  }

  return (
    <button
      onClick={() => {
        setCookie(true)
        setRead(true)
      }}
    >
      Accept use cookie
    </button>
  )
})

CookiesNotification.displayName = 'CookiesNotification'

export default withCookies(CookiesNotification)
