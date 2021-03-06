import React, { FC, memo, useCallback, useState } from 'react'
import { Button } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TGamePauseMenuProps = {
  toggleModal: () => void
  toggleControlInput?: () => void
  controlWithMouse?: boolean
  increaseFireRate?: () => void
  decreaseFireRate?: () => void
  addProjectile?: () => void
  removeProjectile?: () => void
}

const GamePauseMenu: FC<TGamePauseMenuProps> = memo(
  ({
    toggleModal,
    toggleControlInput,
    controlWithMouse,
    increaseFireRate,
    decreaseFireRate,
    addProjectile,
    removeProjectile
  }: TGamePauseMenuProps) => {
    const history = useHistory()

    const returnToMainPage = useCallback(() => {
      history.push(PATHS.BASE)
    }, [history])

    enum Menus {
      main,
      setting
    }

    const [currentMenu, setCurrentMenu] = useState<Menus>(Menus.main)

    const toSettingsMenu = () => {
      setCurrentMenu(Menus.setting)
    }

    const toMainMenu = () => {
      setCurrentMenu(Menus.main)
    }

    return (
      <>
        {currentMenu === Menus.main && (
          <>
            <Button onClick={toggleModal}>Resume</Button>
            <Button onClick={toSettingsMenu}>Settings</Button>
            <Button onClick={returnToMainPage}>Quit</Button>
          </>
        )}
        {currentMenu === Menus.setting && (
          <>
            <Button onClick={increaseFireRate}>Increase fire rate</Button>
            <Button onClick={decreaseFireRate}>Decrease fire rate</Button>
            <Button onClick={addProjectile}>Add projectile</Button>
            <Button onClick={removeProjectile}>Remove projectile</Button>
            <Button onClick={toggleControlInput}>
              {controlWithMouse ? 'Mouse' : 'Keyboard'} control
            </Button>
            <Button onClick={toMainMenu}>Back</Button>
          </>
        )}
      </>
    )
  }
)

GamePauseMenu.displayName = 'GamePauseMenu'

export default GamePauseMenu
