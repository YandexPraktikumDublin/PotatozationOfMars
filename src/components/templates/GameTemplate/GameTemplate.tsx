import React, { FC, memo } from 'react'
import { GameWindow } from '@components/organisms'

type TGameTemplateProps = {}

const GameTemplate: FC<TGameTemplateProps> = memo(() => {
  return (
    <div className="flex justify-center flex-grow">
      <GameWindow />
    </div>
  )
})

GameTemplate.displayName = 'GameTemplate'

export default GameTemplate
