import ContextController from './contextController'

type TCallback = (context: ContextController) => void

class GameClock {
  events: Array<TCallback>
  count: number
  constructor() {
    this.events = []
    this.count = 0
  }

  now = () => {
    return this.count
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
