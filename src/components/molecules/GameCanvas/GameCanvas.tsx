import React, { FC, memo } from 'react'
import { renderCanvas } from '@game/controllers'

type TGameCanvasProps = {}

const GameCanvas: FC<TGameCanvasProps> = memo(() => {
  const canvasRef = renderCanvas()
  return (
    <canvas
      className="border-2 border-white rounded-2xl h-screen"
      style={{ maxHeight: 'calc(100vh - 7rem)' }}
      ref={canvasRef}
    />
  )
})

GameCanvas.displayName = 'GameCanvas'

export default GameCanvas
