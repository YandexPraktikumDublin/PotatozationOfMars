import { RefObject } from 'react'

type TCallback = (...args: Array<unknown>) => void

const enableFullScreen = (
  windowRef: RefObject<HTMLDivElement>,
  callbackFunc: TCallback,
  ...args: Array<unknown>
) => {
  windowRef?.current
    ?.requestFullscreen()
    .then(() => {
      callbackFunc(...args)
    })
    .catch()
}

export default enableFullScreen
