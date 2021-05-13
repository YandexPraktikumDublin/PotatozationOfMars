import React, { FC, memo, useCallback, useState } from 'react'
import { Button, GamePauseMenuRange } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'
import { controlTypes } from '@game/config'
import {
  requestNewGame,
  toggleControls,
  updateMusicVolume,
  updateSoundVolume
} from '@store/game/actions'
import { useDispatch, useSelector } from 'react-redux'
import {
  getControlsSelector,
  getMusicVolumeSelector,
  getSoundVolumeSelector
} from '@store/game/selectors'

type TGamePauseMenuProps = {
  toggleModal: () => void
}

const GamePauseMenu: FC<TGamePauseMenuProps> = memo(
  ({ toggleModal }: TGamePauseMenuProps) => {
    const history = useHistory()

    const dispatch = useDispatch()

    const controls = useSelector(getControlsSelector)
    const volume = useSelector(getSoundVolumeSelector)
    const mVolume = useSelector(getMusicVolumeSelector)

    const toggleControlInput = useCallback(() => {
      const newControls =
        controls === controlTypes.keyboard
          ? controlTypes.mouse
          : controlTypes.keyboard

      window.localStorage.controlType = newControls

      dispatch(toggleControls({ controls: newControls }))
    }, [controls])

    const increaseVolume = useCallback(() => {
      const soundVolume = volume + 0.1
      dispatch(updateSoundVolume({ soundVolume }))
      window.localStorage.soundVolume = soundVolume
    }, [volume])

    const decreaseVolume = useCallback(() => {
      const soundVolume = volume - 0.1
      dispatch(updateSoundVolume({ soundVolume }))
      window.localStorage.soundVolume = soundVolume
    }, [volume])

    const increaseMusicVolume = useCallback(() => {
      const musicVolume = mVolume + 0.1
      dispatch(updateMusicVolume({ musicVolume }))
      window.localStorage.musicVolume = musicVolume
    }, [mVolume])

    const decreaseMusicVolume = useCallback(() => {
      const musicVolume = mVolume - 0.1
      dispatch(updateMusicVolume({ musicVolume }))
      window.localStorage.musicVolume = musicVolume
    }, [mVolume])

    const startNewGame = () => {
      dispatch(requestNewGame({ newGame: true }))
      toggleModal()
    }

    const returnToMainPage = useCallback(() => {
      toggleModal()
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
            <GamePauseMenuRange
              decrease={decreaseVolume}
              increase={increaseVolume}
              text="General volume"
              value={volume}
            />
            <GamePauseMenuRange
              decrease={decreaseMusicVolume}
              increase={increaseMusicVolume}
              text="Music volume"
              value={mVolume}
            />
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
