import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { NameValueListItem } from '@components/atoms'
import { List } from '@components/molecules'

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
    <List>
      {leaders.map((leader) => (
        <NameValueListItem
          key={leader.login}
          name={`${leader.position} ${leader.login}`}
          value={leader.scores}
        />
      ))}
    </List>
  </div>
))

Leaderboard.displayName = 'Leaderboard'

export default Leaderboard
