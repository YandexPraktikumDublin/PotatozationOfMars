import React from 'react'
import { withPage } from '../HOCs/withPage'
import { GameTemplate } from '../components/templates/GameTemplate'

const Game = () => {
  return <GameTemplate testContent="test" />
}

export default withPage(Game, {})
