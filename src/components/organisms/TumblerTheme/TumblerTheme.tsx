import React, { FC, memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSettingsSelector } from '@store/userSettings/fetchUserSettings/selectors'
import { updateUserSettingsRequest } from '@store/userSettings/updateUserSettings/actions'
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
  const userSettings = useSelector(getUserSettingsSelector)

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    return userSettings?.isDarkModeEnabled ?? true
  })

  const [style, setStyle] = useState(defaultImageStyle)

  const toggleTheme = () => {
    dispatch(updateUserSettingsRequest({ isDarkModeEnabled: !isDarkTheme }))
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
    if (userSettings) {
      setIsDarkTheme(userSettings?.isDarkModeEnabled ?? true)
    }
  }, [isDarkTheme, userSettings])

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
