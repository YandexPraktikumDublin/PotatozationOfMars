import { useRef, useEffect, useState } from 'react'
import { InputsController } from '@game/controllers'
import { fullscreenOff, fullscreenOn } from '@images'
import { KEYS } from '@game/config'
import { disableFullScreen, enableFullScreen } from '@game/utils'

const useFullScreen = () => {
  const [FSIcon, setFSIcon] = useState(fullscreenOn)

  const windowRef = useRef<HTMLDivElement>(null)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && document.fullscreenEnabled) {
      enableFullScreen(windowRef, setFSIcon, fullscreenOff)
    } else {
      disableFullScreen(setFSIcon, fullscreenOn)
    }
  }

  useEffect(() => {
    return InputsController.onKeyPress(KEYS.fullscreen, toggleFullScreen)
  }, [])

  return { windowRef, FSIcon, toggleFullScreen }
}

export default useFullScreen
