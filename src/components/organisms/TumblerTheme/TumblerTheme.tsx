import React, { FC, memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEnjoyerSettingsSelector } from '@store/enjoyerSettings/fetchEnjoyerSettings/selectors'
import { updateEnjoyerSettingsRequest } from '@store/enjoyerSettings/updateEnjoyerSettings/actions'
import { moon } from '@images'

type TTumblerThemeProps = {}

const darkThemeClass = 'dark'

const defaultImageStyle = {
  display: 'none',
  top: 'calc(50% - 0.75rem)',
  transform: 'translateX(100%)'
}

const TumblerTheme: FC<TTumblerThemeProps> = memo(() => {
  const dispatch = useDispatch()
  const enjoyerSettings = useSelector(getEnjoyerSettingsSelector)

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    return enjoyerSettings?.isDarkModeEnabled ?? true
  })

  const [style, setStyle] = useState(defaultImageStyle)

  const toggleTheme = () => {
    dispatch(updateEnjoyerSettingsRequest({ isDarkModeEnabled: !isDarkTheme }))
    setIsDarkTheme((value) => !value)
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add(darkThemeClass)

      setStyle({
        ...defaultImageStyle,
        display: 'block',
        transform: 'translateX(-2px)'
      })
    } else {
      document.documentElement.classList.remove(darkThemeClass)

      setStyle({
        ...defaultImageStyle,
        display: 'block',
        transform: 'translateX(100%)'
      })
    }
    if (enjoyerSettings) {
      setIsDarkTheme(enjoyerSettings?.isDarkModeEnabled ?? true)
    }
  }, [isDarkTheme, enjoyerSettings])

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
