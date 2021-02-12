import React, { FC, memo } from 'react'
import { GamePauseMenu, Modal, Title } from '@components/organisms'

type TGamePauseMenuModalProps = {
  toggleModal: () => void
}

const GamePauseMenuModal: FC<TGamePauseMenuModalProps> = memo(
  ({ toggleModal }: TGamePauseMenuModalProps) => {
    return (
      <Modal toggleModal={toggleModal}>
        <Title>Pause</Title>
        <GamePauseMenu toggleModal={toggleModal} />
      </Modal>
    )
  }
)

GamePauseMenuModal.displayName = 'GamePauseMenuModal'

export default GamePauseMenuModal
