import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { GameTemplate } from '@components/templates'

const Game = () => {
  return <GameTemplate />
}

export default withHeaderAndFooter(Game)
