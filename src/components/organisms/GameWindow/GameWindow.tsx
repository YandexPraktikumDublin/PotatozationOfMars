import React, { FC, memo } from 'react'
import { GameCanvas, NavigationButton } from '@components/molecules'
import useRenderCanvas from '@game/useRenderCanvas'
import useFullScreen from '@game/useFullScreen'
import { fullscreenOn, pause } from '@images'
import { GamePauseMenuDisplay } from '@components/organisms'
import { isServer } from '@utils/misc'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  if (isServer()) {
    const onClick = () => {}
    return (
      <div className="relative flex justify-center items-center">
        <GameCanvas />
        <NavigationButton
          className="z-20 absolute top-3 left-3"
          title="Pause"
          onClick={onClick}
          imageSrc={pause}
        />
        <GamePauseMenuDisplay isGamePaused={false} toggleModal={onClick} />
        <NavigationButton
          className="z-20 absolute top-3 right-3"
          title="Full screen"
          onClick={onClick}
          imageSrc={fullscreenOn}
        />
      </div>
    )
  }
  const {
    canvasRef,
    backgroundRef,
    isGamePaused,
    toggleModal,
    settings
  } = useRenderCanvas()
  const { windowRef, FSIcon, toggleFullScreen } = useFullScreen()
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
        isGamePaused={isGamePaused}
        toggleModal={toggleModal}
        settings={settings}
      />
      <NavigationButton
        className="z-20 absolute top-3 right-3"
        title="Full screen"
        onClick={toggleFullScreen}
        imageSrc={FSIcon}
      />
    </div>
  )
})

GameWindow.displayName = 'GameWindow'

export default GameWindow
