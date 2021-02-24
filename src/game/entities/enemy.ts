import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Vector } from '@game/entities'
import { asteroid } from '@images'

class Enemy {
  readonly image = new Image()
  clockEvent: () => void
  protected destination: TPosition
  position: TPosition
  velocity: Vector
  killCallback: ()=>void

  constructor(killCallback = () => {}, v = 5) {
    this.clockEvent = () => {}
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.velocity = new Vector(v)
    this.killCallback = killCallback
  }

  public init = (clock: GameClock, context: ContextController) => {
    const { ox, oy } = context.center
    this.position = { x: ox, y: oy }
    this.destination = { x: 0, y: 0 }
    this.render(clock)
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, 150, 50)
  }

  public render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = asteroid
  }

  public kill = () => {
    this.clockEvent()
    this.killCallback()
  }
}

export default Enemy
