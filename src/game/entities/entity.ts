import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Vector } from '@game/entities'
import { explosion } from '@images'

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
  reward: {
    score: number
    upgrade?: string
  }

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
    this.reward = {
      score: 0
    }
  }

  public init = (clock: GameClock, context: ContextController) => {
    this.isAlive = !!context
    this.position = { x: 0, y: 0 }
    this.destination = { x: 0, y: 0 }
    this.deathAnimation = this.initDeathAnimation(clock)
    this.render(clock, this.move)
  }

  protected initDeathAnimation = (clock: GameClock, src = explosion) => {
    let size = this.size * 2
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

  public getProjectiles = () => {
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

  public takeDamage = (damage: number, dispatcher: (score: number) => void) => {
    this.health -= damage
    if (this.health <= 0) this.kill(dispatcher)
  }

  public kill = (dispatcher: (score: number) => void = () => {}) => {
    this.isAlive = false
    this.clockEvent()
    this.deathAnimation()
    dispatcher(this.reward.score)
    this.killCallback()
  }
}

export default Entity
