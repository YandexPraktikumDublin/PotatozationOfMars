type TCallback = (...args: Array<unknown>) => void

const disableFullScreen = (
  callbackFunc: TCallback,
  ...args: Array<unknown>
) => {
  document
    .exitFullscreen()
    ?.then(() => {
      callbackFunc(...args)
    })
    .catch()
}

export default disableFullScreen
