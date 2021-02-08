import React, { FC, memo } from 'react'
import { Navigation, TumblerTheme } from '@components/organisms'
import { NavigationButton, NavigationLink } from '@components/molecules'
import { PATHS } from '@config'
import { home, pause, profile, forum, leaderboard } from '@images'
import { useLocation } from 'react-router-dom'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const location = useLocation()

  const pauseButtonClick = () => {}

  return (
    <header className="flex items-center justify-between p-4">
      <Navigation>
        <NavigationLink title="Home" href={PATHS.BASE} imageSrc={home} />
        {location.pathname === PATHS.GAME && (
          <NavigationButton
            title="Pause"
            onClick={pauseButtonClick}
            imageSrc={pause}
          />
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
          title="Leader Board"
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
