import React, { FC, memo } from 'react'
import { Navigation, TumblerTheme } from '@components/organisms'
import { NavigationLink } from '@components/molecules'
import { PATHS } from '@config'
import { home, profile, forum, leaderboard } from '@images'
import { useSelector } from 'react-redux'
import { getUserSelector } from '@store/user/fetchUser/selectors'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => {
  const user = useSelector(getUserSelector)

  return (
    <header className="flex items-center justify-between p-4">
      <Navigation>
        {user && (
          <NavigationLink title="Home" href={PATHS.BASE} imageSrc={home} />
        )}
      </Navigation>

      <Navigation>
        {user && (
          <>
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
          </>
        )}

        <TumblerTheme />
      </Navigation>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
