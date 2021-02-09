import { useRef, useEffect } from 'react'
import { Player } from '@game/entities'
import GameClock from './gameClock'
import ContextController from './contextController'

const renderCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = (canvasRef.current as unknown) as HTMLCanvasElement
    const context = new ContextController(
      canvas.getContext('2d') as CanvasRenderingContext2D
    )
    const canvasResizeHandler = context.resize()
    const clock = new GameClock(context)
    const player = new Player(clock)
    player.render()
    const playerControlHandler = player.controlWithMouse(canvas)

    let animationFrameId: number

    const render = () => {
      clock.draw()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      canvasResizeHandler()
      playerControlHandler()
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return canvasRef
}

export default renderCanvas
