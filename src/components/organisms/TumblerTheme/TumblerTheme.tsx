import React, { FC, memo, useState, useEffect } from 'react'
import { isServer } from '@utils/misc'
import { moon } from '@images'

type TTumblerThemeProps = {}

const darkThemeClass = 'dark'

let isDefaultLightTheme = false

if (!isServer()) {
  isDefaultLightTheme = window.localStorage.isLightTheme === 'true'
}

const defaultImageStyle = {
  display: 'none',
  top: 'calc(50% - 0.75rem)',
  transform: 'translateX(100%)'
}

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(isDefaultLightTheme)
  const [style, setStyle] = useState(defaultImageStyle)

  const toggleTheme = () => {
    setIsLightTheme((value) => !value)
  }

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.remove(darkThemeClass)

      if (!isServer()) {
        window.localStorage.isLightTheme = 'true'
      }

      setStyle({
        ...defaultImageStyle,
        display: 'block',
        transform: 'translateX(100%)'
      })
    } else {
      document.documentElement.classList.add(darkThemeClass)

      if (!isServer()) {
        window.localStorage.isLightTheme = 'false'
      }

      setStyle({
        ...defaultImageStyle,
        display: 'block',
        transform: 'translateX(-2px)'
      })
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
        style={style}
        alt="Toggle theme"
      />
    </button>
  )
})

TumblerTheme.displayName = 'TumblerTheme'

export default TumblerTheme
