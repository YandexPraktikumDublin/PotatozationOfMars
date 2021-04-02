import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Projectile, Vector } from '@game/entities'
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
  projectileVelocity: number
  damage: number
  firePeriod: number
  fireCooldown: number
  fireQuantity: number
  protected projectiles: Array<Projectile>
  protected fire: (context: ContextController) => void
  deathAnimation: () => void
  killCallback: () => void
  modifiers: {
    invincible?: boolean
    homingProjectiles?: boolean
  }

  reward: {
    score: number
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
    this.damage = 1
    this.firePeriod = 50
    this.fireCooldown = this.firePeriod
    this.fireQuantity = 1
    this.projectileVelocity = 10
    this.velocity = new Vector(velocity)
    this.fire = () => {}
    this.deathAnimation = () => {}
    this.killCallback = killCallback
    this.image.src = image
    this.projectiles = []
    this.modifiers = {}
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

  protected initPosition = (context: ContextController) => {
    const { width, height } = context.getSize()
    const { ox, oy } = context.center
    this.position = {
      x: width + Math.random() * width - ox,
      y: Math.random() * height - oy
    }
  }

  protected initFire = (
    clock: GameClock,
    src: string,
    options?: {
      player?: boolean
      spread?: number
      positionOffset?: TPosition
    }
  ) => {
    const { player, spread, positionOffset } = options ?? {}
    return (context: ContextController) => {
      this.fireCooldown--
      if (this.fireCooldown <= 0) {
        this.fireCooldown = this.firePeriod
        for (let i = 0; i < this.fireQuantity; i++) {
          if (this.projectiles.length >= 200) {
            this.projectiles[0].deathAnimation = () => {}
            this.projectiles[0].kill()
            this.projectiles.shift()
          }
          const projectile = new Projectile(
            this.projectileVelocity,
            10,
            src,
            this.damage
          )
          this.projectiles.push(projectile)
          const projectileSpread = spread ?? 0.5
          const angle =
            ((i - (this.fireQuantity - 1) / 2) * projectileSpread) /
            this.fireQuantity
          const position = positionOffset
            ? {
                x: this.position.x + positionOffset.x,
                y: this.position.y + positionOffset.y
              }
            : this.position
          projectile.init(clock, context, position, player ? angle : angle - 1)
        }
      }
    }
  }

  protected initDeathAnimation = (clock: GameClock, src = explosion) => {
    const image = new Image()
    image.src = src
    return () => {
      let size = this.size * 2
      let opacity = 1
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

  goToRandomPositionRight = (context: ContextController) => {
    const { width, height } = context.getSize()
    const { ox, oy } = context.center
    this.moveTo(
      Math.random() * (width / 2) + width / 2 - ox,
      Math.random() * height - oy
    )
  }

  protected moveTo = (x: number, y: number) => {
    this.destination = { x, y }
  }

  protected isAtDestination = () => {
    return (
      this.destination.x === this.position.x &&
      this.destination.y === this.position.y
    )
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
    if (x > right || x < left || y > bottom || y < top) {
      this.position.x = x > right ? right : x < left ? left : this.position.x
      this.position.y = y > bottom ? bottom : y < top ? top : this.position.y
      return true
    }
  }

  public getEntities = (): Array<Entity> => {
    return [this]
  }

  public getProjectiles = (): Array<Entity> => {
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

  public hit = () => {
    this.kill()
  }

  public kill = (dispatcher: (score: number) => void = () => {}) => {
    this.projectiles.forEach((projectile) => projectile.kill())
    this.isAlive = false
    this.clockEvent()
    this.deathAnimation()
    dispatcher(this.reward.score)
    this.killCallback()
  }
}

export default Entity
