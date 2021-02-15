import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { GameTemplate } from '@components/templates'

const Game: FC = () => <GameTemplate />

export default withHeaderAndFooter(Game)
