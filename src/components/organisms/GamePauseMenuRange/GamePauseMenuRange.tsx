import React, { FC, memo } from 'react'
import { Button } from '@components/organisms'

type TGamePauseMenuRangeProps = {
  decrease: () => void
  increase: () => void
  text: string
  value: number
}

const GamePauseMenuRange: FC<TGamePauseMenuRangeProps> = memo(
  ({ decrease, increase, text, value }: TGamePauseMenuRangeProps) => (
    <div className="flex flex-grow w-full mb-4">
      <div className="flex w-1/2 items-center ml-1 mr-4">{text}:</div>
      <div className="flex flex-grow">
        <Button className="mb-0" onClick={decrease}>
          -
        </Button>
        <div className="flex items-center mx-4">{value}</div>
        <Button className="mb-0" onClick={increase}>
          +
        </Button>
      </div>
    </div>
  )
)

GamePauseMenuRange.displayName = 'GamePauseMenuRange'

export default GamePauseMenuRange
