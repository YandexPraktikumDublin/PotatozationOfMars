import React, { FC, memo, useCallback } from 'react'
import { GameCanvas, NavigationButton } from '@components/molecules'
import useRenderCanvas from '@game/useRenderCanvas'
import useFullScreen from '@game/useFullScreen'
import { pause } from '@images'
import { GamePauseMenuDisplay } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import {
  getControlsSelector,
  getFullscreenSelector,
  getPauseSelector
} from '@store/game/selectors'
import { toggleControls, togglePause } from '@store/game/actions'
import { controlTypes } from '@game/config'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  const dispatch = useDispatch()
  const isPaused = useSelector(getPauseSelector)
  const fullscreenIcon = useSelector(getFullscreenSelector)
  const controls = useSelector(getControlsSelector)
  const toggleModal = useCallback(() => {
    dispatch(togglePause({ isPaused: !isPaused }))
  }, [isPaused])
  const toggleControlInput = useCallback(() => {
    const newControls =
      controls === controlTypes.keyboard
        ? controlTypes.mouse
        : controlTypes.keyboard
    dispatch(toggleControls({ controls: newControls }))
  }, [controls])
  const settings = {
    toggleControlInput,
    controls
  }

  const { canvasRef, backgroundRef } = useRenderCanvas()
  const { windowRef, toggleFullScreen } = useFullScreen()

  return (
    <div className="relative flex justify-center items-center" ref={windowRef}>
      <GameCanvas forwardRef={canvasRef} backgroundRef={backgroundRef} />
      <NavigationButton
        className="z-20 absolute top-3 left-3"
        title="Pause"
        onClick={toggleModal}
        imageSrc={pause}
      />
      <GamePauseMenuDisplay
        isGamePaused={isPaused}
        toggleModal={toggleModal}
        settings={settings}
      />
      <NavigationButton
        className="z-20 absolute top-3 right-3"
        title="Full screen"
        onClick={toggleFullScreen}
        imageSrc={fullscreenIcon}
      />
    </div>
  )
})

GameWindow.displayName = 'GameWindow'

export default GameWindow
