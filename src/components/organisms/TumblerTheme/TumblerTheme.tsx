import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { moon } from '@images'

type TTumblerThemeProps = {}

const darkThemeClass = 'dark'

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.localStorage.isDarkTheme === 'true'
  )

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((value) => !value)
  }, [setIsDarkTheme])

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add(darkThemeClass)
      window.localStorage.isDarkTheme = 'true'
    } else {
      document.documentElement.classList.remove(darkThemeClass)
      window.localStorage.isDarkTheme = 'false'
    }
  }, [isDarkTheme])

  return (
    <button
      className="relative bg-primary border-2 border-white rounded-2xl w-12	h-5 outline-none"
      onClick={toggleTheme}
    >
      <img
        width="24"
        height="24"
        src={moon}
        className="absolute transition ease-in-out w-6 h-6"
        style={{
          top: 'calc(50% - 0.75rem)',
          transform: isDarkTheme ? 'translateX(-2px)' : 'translateX(100%)'
        }}
        alt="Toggle theme"
      />
    </button>
  )
})

TumblerTheme.displayName = 'TumblerTheme'

export default TumblerTheme
