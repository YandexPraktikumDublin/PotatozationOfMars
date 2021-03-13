import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { GameTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Game: FC = () => (
  <>
    <PageMeta title="Game" />
    <GameTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Game))
