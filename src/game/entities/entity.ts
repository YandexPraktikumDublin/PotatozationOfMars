import { TPosition } from '@game/@types'
import { ContextController, GameClock } from '@game/controllers'
import { Projectile, Vector, Sound } from '@game/entities'
import { explosion } from '@images'
import {
  explosionSound1,
  explosionSound2,
  fireSound1,
  fireSound2,
  fireSound3
} from '@game/sound'

class Entity {
  readonly image = new Image()
  protected clockEvent: () => void
  protected destination: TPosition | { x: null; y: null }
  health: number
  maxHealth: number
  isAlive: boolean
  position: TPosition
  size: number
  velocity: Vector
  projectileVelocity: number
  damage: number
  firePeriod: number
  fireCooldown: number
  fireQuantity: number
  fireAngle: number
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
    this.maxHealth = health
    this.health = this.maxHealth
    this.isAlive = true
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.size = size
    this.damage = 1
    this.firePeriod = 50
    this.fireCooldown = this.firePeriod
    this.fireQuantity = 1
    this.fireAngle = 1
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
      spread?: number
      positionOffset?: TPosition
      maxLimit?: number
      callbackWave?: (projectiles: Array<Projectile>) => void
      callbackEach?: (projectile: Projectile) => void
      soundURL?: Array<string>
    }
  ) => {
    const { spread, positionOffset, maxLimit, soundURL: tempSoundURL } =
      options ?? {}
    const soundURL = tempSoundURL ?? [fireSound1, fireSound2, fireSound3]
    const sounds: Array<Sound> = []
    soundURL?.forEach((sound) => {
      sounds.push(new Sound(sound, { initialVolume: 0.1 }))
    })
    return (context: ContextController) => {
      this.fireCooldown--
      if (this.fireCooldown <= 0) {
        this.fireCooldown = this.firePeriod
        if (sounds.length !== 0) {
          const randomSoundIndex = Math.floor(Math.random() * sounds.length)
          sounds[randomSoundIndex].stop()
          sounds[randomSoundIndex].play(context.soundVolume)
        }
        for (let i = 0; i < this.fireQuantity; i++) {
          if (this.projectiles.length >= (maxLimit ?? 200)) {
            this.projectiles[0].deathAnimation = () => {}
            this.projectiles[0].delete()
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

          projectile.init(clock, context, position, angle + this.fireAngle)

          const callback = options?.callbackEach
            ? options.callbackEach
            : () => {}

          callback(projectile)
        }

        const callback = options?.callbackWave ? options.callbackWave : () => {}

        callback(
          this.projectiles.slice(
            Math.max(this.projectiles.length - this.fireQuantity, 0)
          )
        )
      }
    }
  }

  protected initDeathAnimation = (
    clock: GameClock,
    src = explosion,
    options?: {
      soundURL?: Array<string>
    }
  ) => {
    const image = new Image()
    image.src = src
    const sounds: Array<Sound> = []
    const soundURL = options?.soundURL ?? [explosionSound1, explosionSound2]
    soundURL.forEach((sound) => {
      sounds.push(new Sound(sound))
    })
    return () => {
      let size = this.size * 2
      let opacity = 1
      const deathAnimation = clock.startEvent((context) => {
        if (opacity === 1 && sounds.length !== 0) {
          const randomSoundIndex = Math.floor(Math.random() * sounds.length)
          sounds[randomSoundIndex].stop()
          sounds[randomSoundIndex].play(context.soundVolume)
        }
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
      Math.random() * (width / 2 - this.size) + width / 2 + this.size / 2 - ox,
      Math.random() * (height - this.size) + this.size / 2 - oy
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
    borders: { top: number; right: number; bottom: number; left: number },
    sizeX: number = 0,
    sizeY?: number
  ) => {
    const { top, right, bottom, left } = borders
    const { x, y } = this.position
    const offsetX = sizeX / 2
    const offsetY = sizeY ?? sizeX / 2
    const [offsetRight, offsetLeft, offsetBottom, offsetTop] = [
      right - offsetX,
      left + offsetX,
      bottom - offsetY,
      top + offsetY
    ]
    if (
      x > offsetRight ||
      x < offsetLeft ||
      y > offsetBottom ||
      y < offsetTop
    ) {
      this.position.x =
        x > offsetRight
          ? offsetRight
          : x < offsetLeft
          ? offsetLeft
          : this.position.x
      this.position.y =
        y > offsetBottom
          ? offsetBottom
          : y < offsetTop
          ? offsetTop
          : this.position.y
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

  public takeDamage = (damage: number) => {
    this.health -= damage
    if (this.health <= 0) this.kill()
  }

  public hit = () => {
    this.kill()
  }

  public kill = () => {
    if (!this.isAlive) return
    this.projectiles.forEach((projectile) => projectile.kill())
    this.isAlive = false
    this.clockEvent()
    this.deathAnimation()
    this.killCallback()
  }

  public delete = () => {
    this.projectiles.forEach((projectile) => projectile.delete())
    this.clockEvent()
    if (!this.isAlive) return
    this.isAlive = false
    this.killCallback()
  }
}

export default Entity
