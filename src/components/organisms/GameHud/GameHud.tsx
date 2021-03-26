import React, { FC, memo } from 'react'

type TGameHudProps = {
  title: string
  value: number
  imageSrc: string
}

const GameHud: FC<TGameHudProps> = memo(
  ({ title, value, imageSrc}: TGameHudProps) => {
    return (
      <div className="flex ml-4">
        <img
          width="24"
          height="24"
          src={imageSrc}
          className="w-8 h-8 mr-2"
          alt={title}
        />
        <div className="text-white text-2xl">x{value}</div>
      </div>
    )
  }
)

GameHud.displayName = 'GameHud'

export default GameHud
