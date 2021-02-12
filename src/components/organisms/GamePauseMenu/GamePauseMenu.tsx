import React, { FC, memo, useCallback } from 'react'
import { Button } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TGamePauseMenuProps = {
  toggleModal: () => void
}

const GamePauseMenu: FC<TGamePauseMenuProps> = memo(
  ({ toggleModal }: TGamePauseMenuProps) => {
    const history = useHistory()

    const returnToMainPage = useCallback(() => {
      history.push(PATHS.BASE)
    }, [history])

    return (
      <>
        <Button onClick={toggleModal}>Resume</Button>
        <Button>Settings</Button>
        <Button onClick={returnToMainPage}>Main menu</Button>
      </>
    )
  }
)

GamePauseMenu.displayName = 'GamePauseMenu'

export default GamePauseMenu
