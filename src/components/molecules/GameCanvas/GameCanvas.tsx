import React, { FC, memo, Ref } from 'react'

type TGameCanvasProps = { forwardRef?: Ref<HTMLCanvasElement>,
    backgroundRef?: Ref<HTMLCanvasElement>}

const GameCanvas: FC<TGameCanvasProps> = memo(({ forwardRef, backgroundRef }) => {
  return (
    <>
      <canvas
        className="z-10 border-2 border-white rounded-2xl h-screen"
        style={{
          height: 'calc(100vh - 7rem)',
          maxHeight: '48vw',
          maxWidth: '96vw'
        }}
        ref={forwardRef}
      />
      <canvas
        className="z-0 absolute border-2 border-white rounded-2xl h-screen"
        style={{
          height: 'calc(100vh - 7rem)',
          maxHeight: '48vw',
          maxWidth: '96vw'
        }}
        ref={backgroundRef}
      />
    </>
  )
})

GameCanvas.displayName = 'GameCanvas'

export default GameCanvas
