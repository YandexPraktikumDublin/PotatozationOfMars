import { laser, teslaWithAGun } from '@images'
import {
  ContextController,
  GameClock,
  InputsController
} from '@game/controllers'
import { TPosition } from '@game/@types'
import { Entity, Sound } from '@game/entities'
import { KEYS } from '@game/config'
import { explosionSound1, gameOverSound } from '@game/sound'
import { getDistance } from '@game/utils'

class Player extends Entity {
  opacity: number
  damagePeriod: number
  damageCooldown: number

  constructor(killCallback = () => {}, velocity = 10, size = 50) {
    super(killCallback, velocity, size, teslaWithAGun, 3)
    this.opacity = 1
    this.damage = 10
    this.fireAngle = 0
    this.projectileVelocity = 30
    this.damagePeriod = 60
    this.damageCooldown = this.damagePeriod
  }

  init = (clock: GameClock) => {
    this.fire = this.initFire(clock, laser, {
      positionOffset: { x: 60, y: -20 }
    })
    this.deathAnimation = this.initDeathAnimation(clock)
    this.render(clock, this.move)
  }

  initDeathAnimation = (clock: GameClock) => {
    const sound = new Sound(gameOverSound)
    const sound2 = new Sound(explosionSound1)
    return () => {
      clock.startEvent((context) => {
        context.drawText('Game over', 0, 0, { fontSize: 120 })
        if (context.currentSoundtrack?.isPlaying) {
          context.pauseSoundtrack()
          sound.play(context.soundVolume)
          sound2.play(context.soundVolume)
        }
      })
    }
  }

  protected followPointer = (destination: TPosition, controller: unknown) => {
    const { coefficient, center } = controller as ContextController
    const { x, y } = destination as TPosition
    const { cx, cy } = coefficient
    const { ox, oy } = center
    this.destination = { x: x * cx - ox, y: y * cy - oy }
  }

  public controlWithMouse = (
    controlSurface: HTMLElement,
    context: ContextController
  ) => {
    return InputsController.onMouseDrag(
      controlSurface,
      this.followPointer,
      context
    )
  }

  public controlWithKeyboard = () => {
    const keysPressed = {
      up: false,
      down: false,
      left: false,
      right: false
    }

    const move = (key: string, keys: unknown) => {
      switch (keys) {
        case KEYS.up:
          this.velocity.y = -this.velocity.magnitude
          keysPressed.up = true
          break
        case KEYS.down:
          this.velocity.y = this.velocity.magnitude
          keysPressed.down = true
          break
        case KEYS.left:
          this.velocity.x = -this.velocity.magnitude
          keysPressed.left = true
          break
        case KEYS.right:
          this.velocity.x = this.velocity.magnitude
          keysPressed.right = true
          break
        default:
          return
      }
      this.destination = { x: null, y: null }
      this.velocity.correct()
    }

    const stay = (key: string, keys: unknown) => {
      switch (keys) {
        case KEYS.up:
          this.velocity.y = keysPressed.down ? this.velocity.magnitude : 0
          keysPressed.up = false
          break
        case KEYS.down:
          this.velocity.y = keysPressed.up ? -this.velocity.magnitude : 0
          keysPressed.down = false
          break
        case KEYS.left:
          this.velocity.x = keysPressed.right ? this.velocity.magnitude : 0
          keysPressed.left = false
          break
        case KEYS.right:
          this.velocity.x = keysPressed.left ? -this.velocity.magnitude : 0
          keysPressed.right = false
          break
        default:
          return
      }
      this.destination = { x: null, y: null }
      this.velocity.correct()
    }

    const upHandler = InputsController.onKeyPress(KEYS.up, move, stay, KEYS.up)
    const downHandler = InputsController.onKeyPress(
      KEYS.down,
      move,
      stay,
      KEYS.down
    )
    const leftHandler = InputsController.onKeyPress(
      KEYS.left,
      move,
      stay,
      KEYS.left
    )
    const rightHandler = InputsController.onKeyPress(
      KEYS.right,
      move,
      stay,
      KEYS.right
    )
    return () => {
      upHandler()
      downHandler()
      leftHandler()
      rightHandler()
    }
  }

  damageTimer = () => {
    if (this.damageCooldown > 0) {
      this.damageCooldown--
      this.modifiers.invincible = this.damageCooldown !== 0
      this.opacity = this.modifiers.invincible ? 0.5 : 1
    }
  }

  getProjectiles = () => {
    return this.projectiles
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)

    this.damageTimer()

    this.fire(context)

    this.getBoundByBorders(context.getBorders())

    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size * 3,
      height: this.size,
      opacity: this.opacity
    })
  }

  public reactToProjectile = (
    projectile: Entity,
    dispatcher: (health: number) => void = () => {}
  ) => {
    const entitySize = this.size
    const entityPos = this.velocity.applyTo(this.position)
    const distance = getDistance(entityPos, projectile.position)
    if (distance <= projectile.size / 2 + entitySize / 2) {
      projectile.hit()
      this.takeDamage(projectile.damage, dispatcher)
    }
  }

  takeDamage = (damage = 1, dispatcher?: (health: number) => void) => {
    if (this.modifiers.invincible || damage <= 0) return
    this.damageCooldown = this.damagePeriod
    this.opacity = 0.5
    this.modifiers.invincible = true
    this.health -= damage
    dispatcher?.(this.health)
    if (this.health <= 0) this.kill()
  }
}

export default Player
