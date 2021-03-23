import React, { FC, memo } from 'react'
import { GamePauseMenu, Title } from '@components/organisms'
import classNames from 'classnames'
import { CloseButton } from '@components/atoms'

type TGamePauseMenuModalProps = {
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

const GamePauseMenuModal: FC<TGamePauseMenuModalProps> = memo(
  ({ toggleModal, settings }: TGamePauseMenuModalProps) => {
    return (
      <div
        className={classNames(
          'flex flex-col w-full max-w-md relative text-center border border-primary rounded-3xl p-6 bg-white',
          'dark:text-white dark:border-white dark:bg-primary'
        )}
      >
        <CloseButton onClick={toggleModal} className="absolute top-4 right-4" />
        <div className="relative w-full h-full flex flex-col justify-center items-center px-3">
          <Title>Pause</Title>
          <GamePauseMenu
            toggleModal={toggleModal}
            controlWithMouse={settings?.controlWithMouse}
            toggleControlInput={settings?.toggleControlInput}
            increaseFireRate={settings?.increaseFireRate}
            decreaseFireRate={settings?.decreaseFireRate}
            addProjectile={settings?.addProjectile}
            removeProjectile={settings?.removeProjectile}
          />
        </div>
      </div>
    )
  }
)

GamePauseMenuModal.displayName = 'GamePauseMenuModal'

export default GamePauseMenuModal
