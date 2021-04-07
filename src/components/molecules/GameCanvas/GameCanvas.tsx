import React, { FC, memo, Ref } from 'react'

type TGameCanvasProps = {
  forwardRef?: Ref<HTMLCanvasElement>
  backgroundRef?: Ref<HTMLCanvasElement>
}

const canvasStyle = { height: 'calc(100vh - 7rem)' }

const GameCanvas: FC<TGameCanvasProps> = memo(
  ({ forwardRef, backgroundRef }) => {
    return (
      <>
        <canvas
          className="z-10 border-2 border-white rounded-2xl h-screen max-h-[48vw] max-w-[96vw]"
          style={canvasStyle}
          ref={forwardRef}
        />
        <canvas
          className="z-0 absolute border-2 border-white rounded-2xl h-screen max-h-[48vw] max-w-[96vw]"
          style={canvasStyle}
          ref={backgroundRef}
        />
      </>
    )
  }
)

GameCanvas.displayName = 'GameCanvas'

export default GameCanvas
