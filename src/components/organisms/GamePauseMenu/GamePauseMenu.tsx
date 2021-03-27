import React, { FC, memo, useCallback, useState } from 'react'
import { Button } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'
import { controlTypes } from '@game/config'
import { requestNewGame, toggleControls } from '@store/game/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getControlsSelector } from '@store/game/selectors'

type TGamePauseMenuProps = {
  toggleModal: () => void
}

const GamePauseMenu: FC<TGamePauseMenuProps> = memo(
  ({ toggleModal }: TGamePauseMenuProps) => {
    const history = useHistory()

    const dispatch = useDispatch()

    const controls = useSelector(getControlsSelector)

    const toggleControlInput = useCallback(() => {
      const newControls =
        controls === controlTypes.keyboard
          ? controlTypes.mouse
          : controlTypes.keyboard
      dispatch(toggleControls({ controls: newControls }))
    }, [controls])

    const startNewGame = () => {
      dispatch(requestNewGame({ newGame: true }))
      toggleModal()
    }

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
            <Button onClick={startNewGame}>New game</Button>
            <Button onClick={toSettingsMenu}>Settings</Button>
            <Button onClick={returnToMainPage}>Quit</Button>
          </>
        )}
        {currentMenu === Menus.setting && (
          <>
            <Button onClick={toggleControlInput}>{controls} control</Button>
            <Button onClick={toMainMenu}>Back</Button>
          </>
        )}
      </>
    )
  }
)

GamePauseMenu.displayName = 'GamePauseMenu'

export default GamePauseMenu
