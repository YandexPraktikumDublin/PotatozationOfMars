import React, { FC, memo, useEffect, useRef, useState } from 'react'
import { GameCanvas, NavigationButton } from '@components/molecules'
import { fullscreenOn, fullscreenOff } from '@images'
import { InputsController } from '@game/controllers'

type TGameWindowProps = {}

const GameWindow: FC<TGameWindowProps> = memo(() => {
  const windowRef = useRef<HTMLDivElement>(null)
  const [FSIcon, setFSIcon] = useState(fullscreenOn)

  const toggleFullScreen = (toggle = true) => {
    if (!toggle) return
    if (!document.fullscreenElement && document.fullscreenEnabled) {
      windowRef.current
        ?.requestFullscreen()
        .then(() => {
          setFSIcon(fullscreenOff)
        })
        .catch()
    } else {
      document
        .exitFullscreen()
        ?.then(() => {
          setFSIcon(fullscreenOn)
        })
        .catch()
    }
  }

  useEffect(() => {
    return InputsController.onKeyPress(toggleFullScreen, ['KeyF'])
  }, [])

  return (
    <div className="relative flex justify-center items-center" ref={windowRef}>
      <GameCanvas />
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
