import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '@config'
import { profile, forum, leaderboard } from '@images'

type TNavigationProps = {}

const Navigation: FC<TNavigationProps> = memo(() => (
  <nav className='flex items-center gap-4 mr-4'>
    <Link to={PATHS.PROFILE}>
      <img src={profile} alt="My profile"/>
    </Link>
    <Link to={PATHS.FORUM}>
      <img src={forum} alt="Forum"/>
    </Link>
    <Link to={PATHS.LEADERBOARD}>
      <img src={leaderboard} alt="Leaderboard"/>
    </Link>
  </nav>
))

Navigation.displayName = 'Navigation'

export default Navigation
