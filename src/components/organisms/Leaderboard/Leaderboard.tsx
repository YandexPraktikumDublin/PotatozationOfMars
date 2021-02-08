import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { LeaderboardListItem } from '@components/atoms'
import { LeaderboardList } from '@components/molecules'

type TLeaderboardProps = {}

const leaders = [
  {
    position: 1,
    login: 'IvanIvanov',
    scores: 1023
  },
  {
    position: 2,
    login: 'PetrPetrov',
    scores: 1010
  }
]

const Leaderboard: FC<TLeaderboardProps> = memo(() => (
  <div className={classNames('text-primary', 'dark:text-white')}>
    <LeaderboardList>
      {leaders.map((leader) => (
        <LeaderboardListItem
          key={leader.login}
          position={leader.position}
          login={leader.login}
          scores={leader.scores}
        />
      ))}
    </LeaderboardList>
  </div>
))

Leaderboard.displayName = 'Leaderboard'

export default Leaderboard
