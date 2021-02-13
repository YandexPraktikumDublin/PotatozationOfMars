import React, { FC, memo } from 'react'
import { GameCanvas } from '@components/molecules'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  return <GameCanvas />
})

GameWindow.displayName = 'GameWindow'

export default GameWindow
