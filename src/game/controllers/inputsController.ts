import { TPosition } from '@game/@types'

type TCallback = (mousePosition: TPosition, ...args: Array<unknown>) => void

class InputsController {
  private static __instance: InputsController
  constructor() {
    if (InputsController.__instance) {
      return InputsController.__instance
    }

    InputsController.__instance = this
  }

  onMouseDrag = (
    context: HTMLElement,
    callback: TCallback,
    ...args: Array<unknown>
  ) => {
    let tracking = false

    const getMousePos = (evt: MouseEvent) => {
      const rect = context.getBoundingClientRect()
      const mousePos = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }
      callback(mousePos, ...args)
    }

    const mouseTracking = (evt: MouseEvent) => {
      if (tracking) getMousePos(evt)
    }

    const startTracking = (evt: MouseEvent) => {
      tracking = true
      mouseTracking(evt)
    }

    const stopTracking = () => {
      tracking = false
    }

    context.addEventListener('mousedown', startTracking)
    context.addEventListener('mousemove', mouseTracking)
    context.addEventListener('mouseup', stopTracking)

    return () => {
      context.removeEventListener('mousedown', startTracking)
      context.removeEventListener('mousemove', mouseTracking)
      context.removeEventListener('mouseup', stopTracking)
    }
  }
}

export default new InputsController()
