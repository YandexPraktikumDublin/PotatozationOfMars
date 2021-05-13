import ContextController from './contextController'

type TCallback = (context: ContextController) => void

class GameClock {
  static fps = 60
  static fpsInterval: number = (1000 / GameClock.fps) % 1000
  events: Array<TCallback>
  count: number
  animationFrameId: number = 0
  gameTickId: ReturnType<typeof setTimeout>
  constructor() {
    this.events = []
    this.count = 0
    this.gameTickId = setTimeout(() => {}, 0)
  }

  now = () => {
    return this.count
  }

  start = (
    context: ContextController,
    drawBackground: () => void = () => {}
  ) => {
    let now: number, then: number, elapsed: number
    then = performance.now()
    const gameTick = () => {
      this.animationFrameId = window.requestAnimationFrame(gameTick)
      now = performance.now()
      elapsed = now - then
      if (elapsed > GameClock.fpsInterval) {
        this.draw(context)
        drawBackground()
        then = now - (elapsed % GameClock.fpsInterval)
      }
    }
    window.cancelAnimationFrame(this.animationFrameId)
    gameTick()
  }

  stop = () => {
    window.cancelAnimationFrame(this.animationFrameId)
  }

  running = (callback: TCallback) => {
    return this.events.includes(callback)
  }

  startEvent = (callback: TCallback) => {
    if (!this.running(callback)) {
      this.events.push(callback)
    }
    return () => {
      if (!this.running(callback)) return
      this.events = this.events.filter((event) => event !== callback)
    }
  }

  draw = (context: ContextController) => {
    this.count++
    context.clearFrame()
    this.events.forEach((event) => {
      event(context)
    })
  }
}

export default GameClock
