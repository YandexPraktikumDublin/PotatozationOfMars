import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Vector } from '@game/entities'

class Entity {
  readonly image = new Image()
  protected clockEvent: () => void
  protected destination: TPosition | { x: null; y: null }
  health: number
  isAlive: boolean
  position: TPosition
  size: number
  velocity: Vector
  deathAnimation: () => void
  killCallback: () => void

  constructor(
    killCallback = () => {},
    velocity = 5,
    size = 50,
    image = '',
    health = 1
  ) {
    this.clockEvent = () => {}
    this.health = health
    this.isAlive = true
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.size = size
    this.velocity = new Vector(velocity)
    this.deathAnimation = () => {}
    this.killCallback = killCallback
    this.image.src = image
  }

  public init = (clock: GameClock, context: ContextController) => {
    this.isAlive = !!context
    this.position = { x: 0, y: 0 }
    this.destination = { x: 0, y: 0 }
    this.deathAnimation = this.initDeathAnimation(clock)
    this.render(clock, this.move)
  }

  protected initDeathAnimation = (clock: GameClock, src = this.image.src) => {
    let size = this.size * 1.5
    let opacity = 1
    const image = new Image()
    image.src = src
    return () => {
      const deathAnimation = clock.startEvent((context) => {
        size -= 1
        opacity = opacity - 0.03
        if (opacity <= 0) {
          deathAnimation()
          return
        }
        context.drawImage(image, this.position.x, this.position.y, {
          width: size,
          opacity
        })
      })
    }
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size
    })
  }

  protected getBoundByBorders = (
    top: number,
    right: number,
    bottom: number,
    left: number
  ) => {
    const { x, y } = this.position
    this.position.x = x > right ? right : x < left ? left : this.position.x
    this.position.y = y > bottom ? bottom : y < top ? top : this.position.y
  }

  public getProjectile = () => {
    return [this]
  }

  protected render = (
    clock: GameClock,
    callback: (context: ContextController) => void
  ) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(callback)
    }
  }

  public takeDamage = (damage: number) => {
    this.health -= damage
    if (this.health <= 0) this.kill()
  }

  public kill = () => {
    this.isAlive = false
    this.clockEvent()
    this.deathAnimation()
    this.killCallback()
  }
}

export default Entity
