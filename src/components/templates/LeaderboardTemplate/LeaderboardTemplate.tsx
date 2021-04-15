import React, { FC, memo } from 'react'
import { Title, Window, Leaderboard } from '@components/organisms'

type TLeaderboardTemplateProps = {}

const LeaderboardTemplate: FC<TLeaderboardTemplateProps> = memo(() => (
  <div className="w-full max-w-2xl">
    <Window isFullHeight>
      <Title>Leaderboard</Title>
      <Leaderboard />
    </Window>
  </div>
))

LeaderboardTemplate.displayName = 'LeaderboardTemplate'

export default LeaderboardTemplate
