import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  GamePauseMenuModal,
  Navigation,
  TumblerTheme
} from '@components/organisms'
import { NavigationButton, NavigationLink } from '@components/molecules'
import { PATHS } from '@config'
import { home, pause, profile, forum, leaderboard } from '@images'
import { useLocation } from 'react-router-dom'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const location = useLocation()

  const [gamePauseModalDisplay, setGamePauseModalDisplay] = useState<boolean>(
    false
  )

  const toggleModal = () => {
    setGamePauseModalDisplay((value) => !value)
  }

  const escIsPressed = useCallback((evt: KeyboardEvent) => {
    if (evt.code === 'Escape') toggleModal()
  }, [])

  useEffect(() => {
    if (location.pathname === PATHS.GAME) {
      document.addEventListener('keydown', escIsPressed)
    }

    return () => {
      document.removeEventListener('keydown', escIsPressed)
    }
  }, [])

  return (
    <header className="flex items-center justify-between p-4">
      <Navigation>
        <NavigationLink title="Home" href={PATHS.BASE} imageSrc={home} />
        {location.pathname === PATHS.GAME && (
          <NavigationButton
            title="Pause"
            onClick={toggleModal}
            imageSrc={pause}
          />
        )}
        {gamePauseModalDisplay && (
          <GamePauseMenuModal toggleModal={toggleModal} />
        )}
      </Navigation>

      <Navigation>
        <NavigationLink
          title="Profile"
          href={PATHS.PROFILE}
          imageSrc={profile}
        />
        <NavigationLink title="Forum" href={PATHS.FORUM} imageSrc={forum} />
        <NavigationLink
          title="Leaderboard"
          href={PATHS.LEADERBOARD}
          imageSrc={leaderboard}
        />
        <TumblerTheme />
      </Navigation>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
