import { useRef, useEffect, useCallback } from 'react'
import { InputsController } from '@game/controllers'
import { fullscreenOff, fullscreenOn } from '@images'
import { KEYS } from '@game/config'
import { disableFullScreen, enableFullScreen } from '@game/utils'
import { useDispatch } from 'react-redux'
import { setFullscreenIcon } from '@store/game/actions'

const useFullScreen = () => {
  const dispatch = useDispatch()
  const setFSIcon = (icon: unknown) => {
    if (typeof icon === 'string')
      dispatch(setFullscreenIcon({ fullscreenIcon: icon }))
  }

  const windowRef = useRef<HTMLDivElement>(null)

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement && document.fullscreenEnabled) {
      enableFullScreen(windowRef, setFSIcon, fullscreenOff)
    } else {
      disableFullScreen(setFSIcon, fullscreenOn)
    }
  }, [])

  useEffect(() => {
    return InputsController.onKeyPress(KEYS.fullscreen, toggleFullScreen)
  }, [])

  return { windowRef, toggleFullScreen }
}

export default useFullScreen
