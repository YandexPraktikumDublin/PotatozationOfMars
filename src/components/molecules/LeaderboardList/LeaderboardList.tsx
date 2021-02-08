import React, { FC, memo, ReactNode } from 'react'

type TLeaderboardListProps = {
  children: ReactNode
}

const LeaderboardList: FC<TLeaderboardListProps> = memo(
  ({ children }: TLeaderboardListProps) => <ol>{children}</ol>
)

LeaderboardList.displayName = 'LeaderboardList'

export default LeaderboardList
