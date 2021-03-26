import { useRef, useEffect } from 'react'
import { GameplayController, InputsController } from '@game/controllers'
import { controlTypes, KEYS } from '@game/config'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getControlsSelector } from '@store/game/selectors'
import { togglePause, updatePlayerHealth } from '@store/game/actions'
import { isServer } from '@utils/misc'

const useRenderCanvas = () => {
  const store = useStore()
  const dispatch = useDispatch()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const backgroundRef = useRef<HTMLCanvasElement>(null)
  let controls = isServer()
    ? useSelector(getControlsSelector)
    : window.localStorage.controlWithMouse ?? useSelector(getControlsSelector)

  let { isPaused } = store.getState().game

  const updateHealth = (health: number) => {
    dispatch(updatePlayerHealth({ health }))
  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const backgroundCanvas = backgroundRef.current as HTMLCanvasElement

    const game = new GameplayController(canvas, backgroundCanvas, {
      updateHealth
    })

    const toggleModal = () => {
      dispatch(togglePause({ isPaused: !isPaused }))
    }

    const listener = () => {
      const newIsPaused = store.getState().game.isPaused
      const newControls = store.getState().game.controls
      if (controls !== newControls) {
        controls = newControls
        if (newControls === controlTypes.mouse) {
          game.controlWithMouse()
        }
        if (newControls === controlTypes.keyboard) {
          game.controlWithKeyboard()
        }
      }
      if (isPaused !== newIsPaused) {
        isPaused = newIsPaused
        if (isPaused) {
          game.stop()
        } else {
          game.start()
        }
      }
    }
    const unsubscribe = store.subscribe(listener)

    const handlePause = InputsController.onKeyPress(KEYS.pause, toggleModal)

    game.init()
    game.start()

    if (controls === controlTypes.mouse) {
      game.controlWithMouse()
    }
    if (controls === controlTypes.keyboard) {
      game.controlWithKeyboard()
    }

    return () => {
      game.stop()
      game.kill()
      handlePause()
      unsubscribe()
    }
  }, [])

  return {
    canvasRef,
    backgroundRef
  }
}

export default useRenderCanvas
