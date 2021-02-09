import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TLeaderboardListItemProps = {
  position: number
  login: string
  scores: number
}

const LeaderboardListItem: FC<TLeaderboardListItemProps> = memo(
  ({ position, login, scores }: TLeaderboardListItemProps) => (
    <div
      className={classNames(
        'flex justify-between border-b border-primary mb-4',
        'dark:border-white'
      )}
    >
      <span>
        {position}. {login}
      </span>
      <span>{scores}</span>
    </div>
  )
)

LeaderboardListItem.displayName = 'LeaderboardListItem'

export default LeaderboardListItem
