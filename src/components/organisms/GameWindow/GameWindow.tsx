import React, { FC, memo, useCallback } from 'react'
import { GameCanvas, NavigationButton } from '@components/molecules'
import useRenderCanvas from '@game/useRenderCanvas'
import useFullScreen from '@game/useFullScreen'
import { diamond, pause, potato } from '@images'
import { GameHud, GamePauseMenuDisplay } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFullscreenSelector,
  getHealthSelector,
  getPauseSelector,
  getScoreSelector
} from '@store/game/selectors'
import { togglePause } from '@store/game/actions'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  const dispatch = useDispatch()

  const isPaused = useSelector(getPauseSelector)
  const fullscreenIcon = useSelector(getFullscreenSelector)
  const health = useSelector(getHealthSelector)
  const score = useSelector(getScoreSelector)

  const toggleModal = useCallback(() => {
    dispatch(togglePause({ isPaused: !isPaused }))
  }, [isPaused])

  const { canvasRef, backgroundRef } = useRenderCanvas()
  const { windowRef, toggleFullScreen } = useFullScreen()

  return (
    <div className="relative flex justify-center items-center" ref={windowRef}>
      <GameCanvas forwardRef={canvasRef} backgroundRef={backgroundRef} />
      <div
        className="absolute flex space-x-6 top-3 right-3 z-20"
        style={{
          pointerEvents: 'none'
        }}
      >
        <GameHud title="health" value={health} imageSrc={potato} />
        <GameHud title="money" value={score} imageSrc={diamond} />
      </div>
      <NavigationButton
        className="z-20 absolute top-3 left-3"
        title="Pause"
        onClick={toggleModal}
        imageSrc={pause}
      />
      <GamePauseMenuDisplay isGamePaused={isPaused} toggleModal={toggleModal} />
      <NavigationButton
        className="z-20 absolute bottom-3 right-3"
        title="Full screen"
        onClick={toggleFullScreen}
        imageSrc={fullscreenIcon}
      />
    </div>
  )
})

GameWindow.displayName = 'GameWindow'

export default GameWindow
