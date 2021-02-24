import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { LeaderboardTemplate } from '@components/templates'

const Leaderboard: FC = () => <LeaderboardTemplate />

export default withAuth(withHeaderAndFooter(Leaderboard))
