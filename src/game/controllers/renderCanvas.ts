import { useRef, useEffect } from 'react'
import { Player } from '@game/entities'
import GameClock from './gameClock'
import ContextController from './contextController'

const useRenderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const context = new ContextController(
      canvas.getContext('2d') as CanvasRenderingContext2D
    )
    const canvasResizeHandler = context.resize()
    const clock = new GameClock(context)
    const player = new Player()
    player.render(clock)
    const playerControlHandler = player.controlWithMouse(canvas, context)
    const playerKeyboardControlHandler = player.controlWithKeyboard()

    let animationFrameId: number

    const render = () => {
      clock.draw()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      canvasResizeHandler()
      playerControlHandler()
      playerKeyboardControlHandler()
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return canvasRef
}

export default useRenderCanvas
