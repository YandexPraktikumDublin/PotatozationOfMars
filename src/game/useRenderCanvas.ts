import { useRef, useEffect, useState, useCallback } from 'react'
import { GameplayController, InputsController } from '@game/controllers'
import { KEYS } from '@game/config'

const useRenderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gamePauseModalDisplay, setGamePauseModalDisplay] = useState<boolean>(
    false
  )

  const game = new GameplayController()

  let pause = false

  const toggleModal = useCallback(() => {
    pause = !pause
    setGamePauseModalDisplay(pause)
    if (pause) {
      game.stop()
    } else {
      game.start()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement

    const handlePause = InputsController.onKeyPress(toggleModal, KEYS.pause)

    game.init(canvas)
    game.start()

    return () => {
      game.stop()
      game.kill()
      handlePause()
    }
  }, [])

  return {
    canvasRef,
    gamePauseModalDisplay,
    toggleModal: () => {
      toggleModal()
    }
  }
}

export default useRenderCanvas
