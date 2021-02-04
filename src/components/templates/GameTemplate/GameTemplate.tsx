import React, { FC, memo } from 'react'

export type TGameTemplateProps = {
  testContent: string
}

export const GameTemplate: FC<TGameTemplateProps> = memo(
  ({ testContent }: TGameTemplateProps) => <></>
)

GameTemplate.displayName = 'GameTemplate'

export default GameTemplate
