import React, { FC, memo, useEffect, useState } from 'react'
import { moon } from '@images'

type TTumblerThemeProps = {}

const darkThemeClass = 'dark'

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => {
  const [isLightTheme, setIsLightTheme] = useState(
    window.localStorage.isLightTheme === 'true'
  )

  const toggleTheme = () => {
    setIsLightTheme((value) => !value)
  }

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.remove(darkThemeClass)
      window.localStorage.isLightTheme = 'true'
    } else {
      document.documentElement.classList.add(darkThemeClass)
      window.localStorage.isLightTheme = 'false'
    }
  }, [isLightTheme])

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
          transform: isLightTheme ? 'translateX(100%)' : 'translateX(-2px)'
        }}
        alt="Toggle theme"
      />
    </button>
  )
})

TumblerTheme.displayName = 'TumblerTheme'

export default TumblerTheme
