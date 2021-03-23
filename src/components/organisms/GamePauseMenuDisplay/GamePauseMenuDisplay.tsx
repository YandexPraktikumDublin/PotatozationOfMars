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
        <div className="z-50 fixed inset-0 overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-80" />
          <div className="relative w-full h-full flex justify-center items-center px-3">
            <GamePauseMenuModal toggleModal={toggleModal} settings={settings} />
          </div>
        </div>
      )}
    </>
  )
)

GamePauseMenuDisplay.displayName = 'GamePauseMenuDisplay'

export default GamePauseMenuDisplay
