import ContextController from './contextController'

type TCallback = (context: ContextController) => void

class GameClock {
  context: ContextController
  events: Array<TCallback>
  constructor(context: ContextController) {
    this.context = context
    this.events = []
  }

  running = (callback: TCallback) => {
    return this.events.includes(callback)
  }

  startEvent = (callback: TCallback) => {
    if (this.running(callback)) return
    this.events.push(callback)
  }

  endEvent = (callback: TCallback) => {
    if (!this.running(callback)) return
    this.events = this.events.filter((event) => event !== callback)
  }

  draw = () => {
    this.context.clearFrame()
    this.events.forEach((event) => {
      event(this.context)
    })
  }
}

export default GameClock
