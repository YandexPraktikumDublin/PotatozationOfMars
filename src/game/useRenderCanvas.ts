import { useRef, useEffect } from 'react'
import { GameplayController } from '@game/controllers'

const useRenderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const game = new GameplayController(canvas)

    game.init()
    game.start()

    return () => {
      game.stop()
      game.kill()
    }
  }, [])

  return canvasRef
}

export default useRenderCanvas
