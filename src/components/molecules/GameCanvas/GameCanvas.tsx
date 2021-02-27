import React, { FC, memo, Ref } from 'react'

type TGameCanvasProps = { forwardRef?: Ref<HTMLCanvasElement> }

const GameCanvas: FC<TGameCanvasProps> = memo(({ forwardRef }) => {
  return (
    <canvas
      className="border-2 border-white rounded-2xl h-screen"
      style={{
        height: 'calc(100vh - 7rem)',
        maxHeight: '48vw',
        maxWidth: '96vw'
      }}
      ref={forwardRef}
    />
  )
})

GameCanvas.displayName = 'GameCanvas'

export default GameCanvas
