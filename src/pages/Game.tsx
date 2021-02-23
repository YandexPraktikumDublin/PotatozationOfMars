import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { GameTemplate } from '@components/templates'

const Game: FC = () => <GameTemplate />

export default withAuth(withHeaderAndFooter(Game))
