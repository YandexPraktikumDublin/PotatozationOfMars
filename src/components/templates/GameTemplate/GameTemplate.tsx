import React, { FC, memo } from 'react'
import { GameWindow } from '@components/organisms'

type TGameTemplateProps = {}

const GameTemplate: FC<TGameTemplateProps> = memo(() => {
  return <GameWindow />
})

GameTemplate.displayName = 'GameTemplate'

export default GameTemplate
