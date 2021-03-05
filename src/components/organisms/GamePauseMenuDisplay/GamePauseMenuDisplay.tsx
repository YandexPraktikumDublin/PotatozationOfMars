import React, { FC, memo } from 'react'
import { GamePauseMenuModal } from '@components/organisms'

type TGamePauseMenuDisplayProps = {
  isGamePaused: boolean
  toggleModal: () => void
  settings?: {
    toggleControlInput: () => void
    controlWithMouse: boolean
    increaseFireRate: () => void
    decreaseFireRate: () => void
    addProjectile: () => void
    removeProjectile: () => void
  }
}

const GamePauseMenuDisplay: FC<TGamePauseMenuDisplayProps> = memo(
  ({ isGamePaused, toggleModal, settings }: TGamePauseMenuDisplayProps) => (
    <>
      {isGamePaused && (
        <GamePauseMenuModal toggleModal={toggleModal} settings={settings} />
      )}
    </>
  )
)

GamePauseMenuDisplay.displayName = 'GamePauseMenuDisplay'

export default GamePauseMenuDisplay
