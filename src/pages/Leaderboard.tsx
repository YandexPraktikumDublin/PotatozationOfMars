import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { LeaderboardTemplate } from '@components/templates'

const Leaderboard: FC = () => <LeaderboardTemplate />

export default withHeaderAndFooter(Leaderboard)
