import React, { FC, memo } from 'react'
import { Title, Window, Leaderboard } from '@components/organisms'

type TLeaderboardTemplateProps = {
  title: string
}

const LeaderboardTemplate: FC<TLeaderboardTemplateProps> = memo(
  ({ title }: TLeaderboardTemplateProps) => (
    <div className="w-full max-w-2xl">
      <Window>
        <Title>{title}</Title>
        <Leaderboard />
      </Window>
    </div>
  )
)

LeaderboardTemplate.displayName = 'LeaderboardTemplate'

export default LeaderboardTemplate
