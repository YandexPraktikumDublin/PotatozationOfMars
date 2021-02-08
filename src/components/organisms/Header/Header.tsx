import React, { FC, memo } from 'react'
import { Navigation, TumblerTheme } from '@components/organisms'
import { NavigationButton, NavigationLink } from '@components/molecules'
import { PATHS } from '@config'
import { home, pause, profile, forum, leaderboard } from '@images'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const pauseButtonClick = () => {}

  return (
    <header className="relative flex items-center justify-between p-4">
      <Navigation>
        <NavigationLink title="Home" href={PATHS.BASE} imageSrc={home} />
        <NavigationButton
          title="Pause"
          onClick={pauseButtonClick}
          imageSrc={pause}
        />
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
