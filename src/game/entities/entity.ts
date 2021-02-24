import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Vector } from '@game/entities'
import { asteroid } from '@images'

class Entity {
  readonly image = new Image()
  protected clockEvent: () => void
  protected destination: TPosition
  isAlive: boolean
  position: TPosition
  size: number
  velocity: Vector
  killCallback: () => void

  constructor(killCallback = () => {}, velocity = 5, size = 50) {
    this.clockEvent = () => {}
    this.isAlive = true
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.size = size
    this.velocity = new Vector(velocity)
    this.killCallback = killCallback
  }

  public init = (clock: GameClock, context: ContextController) => {
    this.isAlive = !!context
    this.position = { x: 0, y: 0 }
    this.destination = { x: 0, y: 0 }
    this.render(clock)
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, this.size)
  }

  public getProjectile = () => {
    return [this]
  }

  protected render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = asteroid
  }

  public kill = () => {
    this.isAlive = false
    this.clockEvent()
    this.killCallback()
  }
}

export default Entity
