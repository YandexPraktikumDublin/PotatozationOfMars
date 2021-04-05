import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { LeaderboardTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Leaderboard: FC = () => (
  <>
    <PageMeta title="Leaderboard" />
    <LeaderboardTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Leaderboard))
