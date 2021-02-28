import React, { FC, memo } from 'react'
import { GamePauseMenu, Modal, Title } from '@components/organisms'

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
      <Modal toggleModal={toggleModal}>
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
      </Modal>
    )
  }
)

GamePauseMenuModal.displayName = 'GamePauseMenuModal'

export default GamePauseMenuModal
