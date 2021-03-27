import React, { FC, memo } from 'react'
import { GamePauseMenu, Title } from '@components/organisms'
import classNames from 'classnames'
import { CloseButton } from '@components/atoms'

type TGamePauseMenuModalProps = {
  toggleModal: () => void
}

const GamePauseMenuModal: FC<TGamePauseMenuModalProps> = memo(
  ({ toggleModal }: TGamePauseMenuModalProps) => {
    return (
      <div
        className={classNames(
          'flex flex-col w-full max-w-md relative text-center border border-primary rounded-3xl p-6 bg-white',
          'dark:text-white dark:border-white dark:bg-primary'
        )}
      >
        <div className="relative w-full h-full flex flex-col justify-center items-center px-3">
          <Title>Pause</Title>
          <GamePauseMenu
            toggleModal={toggleModal}
          />
        </div>
        <CloseButton onClick={toggleModal} className="absolute top-4 right-4" />
      </div>
    )
  }
)

GamePauseMenuModal.displayName = 'GamePauseMenuModal'

export default GamePauseMenuModal
