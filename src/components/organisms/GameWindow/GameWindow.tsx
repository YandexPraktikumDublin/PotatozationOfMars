import React, { FC, memo } from 'react'
import { GameCanvas, NavigationButton } from '@components/molecules'
import { GamePauseMenuModal } from '@components/organisms'
import useRenderCanvas from '@game/useRenderCanvas'
import useFullScreen from '@game/useFullScreen'
import { pause } from '@images'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  const { canvasRef, gamePauseModalDisplay, toggleModal } = useRenderCanvas()
  const { windowRef, FSIcon, toggleFullScreen } = useFullScreen()

  return (
    <div className="relative flex justify-center items-center" ref={windowRef}>
      <GameCanvas forwardRef={canvasRef} />
      <NavigationButton
        className="absolute top-3 left-3"
        title="Pause"
        onClick={toggleModal}
        imageSrc={pause}
      />
      {gamePauseModalDisplay && (
        <GamePauseMenuModal toggleModal={toggleModal} />
      )}
      <NavigationButton
        className="absolute top-3 right-3"
        title="Full screen"
        onClick={toggleFullScreen}
        imageSrc={FSIcon}
      />
    </div>
  )
})

GameWindow.displayName = 'GameWindow'

export default GameWindow
