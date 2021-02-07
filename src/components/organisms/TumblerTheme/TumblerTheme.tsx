import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { moon } from '@images'

type TTumblerThemeProps = {}

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => {
  const darkThemeClass = 'dark'

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((value) => !value)
  }, [setIsDarkTheme])

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add(darkThemeClass)
    } else {
      document.documentElement.classList.remove(darkThemeClass)
    }
  }, [isDarkTheme])

  return (
    <button
      className="relative bg-primary border-2 border-white rounded-2xl h-5 outline-none"
      style={{ width: '3.125rem' }}
      onClick={toggleTheme}
    >
      <img
        width="25"
        height="25"
        src={moon}
        className="absolute transition ease-in-out"
        style={{
          top: 'calc(50% - 12.5px)',
          transform: isDarkTheme ? 'translateX(-2px)' : 'translateX(100%)'
        }}
        alt="Toggle theme"
      />
    </button>
  )
})

TumblerTheme.displayName = 'TumblerTheme'

export default TumblerTheme
