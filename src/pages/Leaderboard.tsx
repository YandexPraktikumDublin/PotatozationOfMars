import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { LeaderboardTemplate } from '@components/templates'

const Leaderboard = () => {
  return <LeaderboardTemplate title="Leaderboard" />
}

export default withHeaderAndFooter(Leaderboard)
