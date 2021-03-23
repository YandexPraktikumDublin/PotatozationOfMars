import { useRef, useEffect, useState, useCallback } from 'react'
import { GameplayController, InputsController } from '@game/controllers'
import { KEYS } from '@game/config'

const useRenderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const backgroundRef = useRef<HTMLCanvasElement>(null)
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false)
  const [controlWithMouse, setControlWithMouse] = useState<boolean>(
    window.localStorage.controlWithMouse === 'true'
  )

  const game = new GameplayController()

  let pause = isGamePaused

  const toggleModal = useCallback(() => {
    pause = !pause
    setIsGamePaused(pause)
    if (pause) {
      game.stop()
    } else {
      game.start()
    }
  }, [])

  let mouseControl = controlWithMouse

  const toggleControlInput = useCallback(() => {
    mouseControl = !mouseControl
    setControlWithMouse(mouseControl)
    window.localStorage.controlWithMouse = mouseControl ? 'true' : 'false'
    if (mouseControl) {
      game.controlWithMouse()
    } else {
      game.controlWithKeyboard()
    }
  }, [])

  const increaseFireRate = useCallback(() => {
    const firePeriod = game.player.firePeriod
    game.player.firePeriod = firePeriod > 5 ? firePeriod - 5 : 1
    game.player.fireCooldown = game.player.firePeriod
  }, [])

  const decreaseFireRate = useCallback(() => {
    const firePeriod = game.player.firePeriod
    game.player.firePeriod = firePeriod === 1 ? 5 : firePeriod + 5
    game.player.fireCooldown = game.player.firePeriod
  }, [])

  const addProjectile = useCallback(() => {
    const quantity = game.player.fireQuantity
    game.player.fireQuantity = quantity + 1
  }, [])

  const removeProjectile = useCallback(() => {
    const quantity = game.player.fireQuantity
    game.player.fireQuantity = quantity > 1 ? quantity - 1 : 1
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const backgroundCanvas = backgroundRef.current as HTMLCanvasElement

    const handlePause = InputsController.onKeyPress(KEYS.pause, toggleModal)

    game.init(canvas, backgroundCanvas)
    game.start()

    if (!controlWithMouse) {
      game.controlWithKeyboard()
    }

    return () => {
      game.stop()
      game.kill()
      handlePause()
    }
  }, [])

  return {
    canvasRef,
    backgroundRef,
    isGamePaused,
    toggleModal,
    settings: {
      controlWithMouse,
      toggleControlInput,
      increaseFireRate,
      decreaseFireRate,
      addProjectile,
      removeProjectile
    }
  }
}

export default useRenderCanvas
