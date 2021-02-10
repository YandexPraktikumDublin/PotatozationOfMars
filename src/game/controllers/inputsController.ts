type TCallback = (...rest: Array<unknown>) => void

class InputsController {
  private static __instance: InputsController
  constructor() {
    if (InputsController.__instance) {
      return InputsController.__instance
    }

    InputsController.__instance = this
  }

  onKeyPress = (
    callback: TCallback,
    keyCodes: Array<string>,
    ...rest: Array<unknown>
  ) => {
    const isPressed = (keyPressed: string) => {
      let eitherPressed = false
      keyCodes.forEach((code) => {
        eitherPressed = eitherPressed || keyPressed === code
      })
      return eitherPressed
    }

    const onKeyDown = (evt: KeyboardEvent) => {
      const pressed = isPressed(evt.code)
      if (pressed) callback(pressed, ...rest)
    }

    const onKeyUp = (evt: KeyboardEvent) => {
      const pressed = !isPressed(evt.code)
      if (!pressed) callback(pressed, ...rest)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }

  onMouseDrag = (
    context: HTMLElement,
    callback: TCallback,
    ...rest: Array<unknown>
  ) => {
    let tracking = false

    const isTouch = (evt: MouseEvent | TouchEvent): evt is TouchEvent => {
      return !!(evt as TouchEvent).touches
    }

    const getMousePos = (evt: MouseEvent | TouchEvent) => {
      const rect = context.getBoundingClientRect()
      const mousePos = isTouch(evt)
        ? {
            x: evt.touches[0].clientX - rect.left,
            y: evt.touches[0].clientY - rect.top
          }
        : {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
          }
      callback(mousePos, ...rest)
    }

    const mouseTracking = (evt: MouseEvent | TouchEvent) => {
      if (tracking) getMousePos(evt)
    }

    const startTracking = (evt: MouseEvent | TouchEvent) => {
      tracking = true
      mouseTracking(evt)
    }

    const stopTracking = () => {
      tracking = false
    }

    context.addEventListener('mousedown', startTracking)
    context.addEventListener('mousemove', mouseTracking)
    context.addEventListener('mouseup', stopTracking)
    context.addEventListener('touchstart', startTracking)
    context.addEventListener('touchmove', mouseTracking)
    context.addEventListener('touchend', stopTracking)

    return () => {
      context.removeEventListener('mousedown', startTracking)
      context.removeEventListener('mousemove', mouseTracking)
      context.removeEventListener('mouseup', stopTracking)
      context.removeEventListener('touchstart', startTracking)
      context.removeEventListener('touchmove', mouseTracking)
      context.removeEventListener('touchend', stopTracking)
    }
  }
}

export default new InputsController()
