import ContextController from './contextController'

type TCallback = (context: ContextController) => void

class GameClock {
  events: Array<TCallback>
  constructor() {
    this.events = []
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
    context.clearFrame()
    this.events.forEach((event) => {
      event(context)
    })
  }
}

export default GameClock
