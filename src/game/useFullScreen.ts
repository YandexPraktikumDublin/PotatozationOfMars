import { useRef, useEffect, useState } from 'react'
import { InputsController } from '@game/controllers'
import { fullscreenOff, fullscreenOn } from '@images'
import { KEYS } from '@game/config'

const useFullScreen = () => {
  const [FSIcon, setFSIcon] = useState(fullscreenOn)

  const windowRef = useRef<HTMLDivElement>(null)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && document.fullscreenEnabled) {
      windowRef.current
        ?.requestFullscreen()
        .then(() => {
          setFSIcon(fullscreenOff)
        })
        .catch()
    } else {
      document
        .exitFullscreen()
        ?.then(() => {
          setFSIcon(fullscreenOn)
        })
        .catch()
    }
  }

  useEffect(() => {
    return InputsController.onKeyPress(KEYS.fullscreen, toggleFullScreen)
  }, [])

  return { windowRef, FSIcon, toggleFullScreen }
}

export default useFullScreen
