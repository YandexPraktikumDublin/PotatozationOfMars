import { asteroid, explosion } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { AsteroidSnake, Entity } from '@game/entities'
import { getDistance } from '@game/utils'

class AsteroidSnakeTail extends Entity {
  angle: number
  damagePeriod: number
  damageCooldown: number
  homingIntensity: number
  divertDamage: (damage: number) => void
  head: AsteroidSnake | AsteroidSnakeTail | null

  constructor(killCallback = () => {}, velocity = 10, size = 100) {
    super(killCallback, velocity, size, asteroid, 10)
    this.angle = 0
    this.damagePeriod = 60
    this.damageCooldown = this.damagePeriod
    this.homingIntensity = 0
    this.divertDamage = () => {}
    this.head = null
  }

  init = (clock: GameClock, context: ContextController) => {
    this.isAlive = !!context
    this.position = this.head ? this.head.position : { x: 0, y: 0 }
    this.deathAnimation = this.initDeathAnimation(clock, explosion)
    this.render(clock, this.move)
  }

  attach = (
    head: AsteroidSnake | AsteroidSnakeTail,
    diverDamage: (damage: number) => void
  ) => {
    this.head = head
    this.position = this.head.position
    this.divertDamage = diverDamage
  }

  protected move = (context: ContextController) => {
    if (this.head) {
      const distance = getDistance(this.head.position, this.position)
      if (distance > this.size * 0.7) {
        this.velocity.magnitude = this.head.velocity.magnitude
        this.homingIntensity = this.head.homingIntensity
        if (distance > this.size * 0.9) {
          this.velocity.defineByDirection(this.head.position, this.position)
          this.velocity.applyTo(this.position)
        }
        this.velocity.deflectTo(
          this.head.position,
          this.position,
          this.homingIntensity
        )
        this.position = this.velocity.applyTo(this.position)
        this.angle = this.velocity.getAngle() - 1
      }
    }
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size,
      angle: this.angle
    })
  }

  hit = () => {
    if (this.modifiers.invincible) return
    this.damageCooldown = this.damagePeriod
    this.modifiers.invincible = true
    this.deathAnimation()
  }

  takeDamage = (damage: number) => {
    this.divertDamage(damage)
  }
}

export default AsteroidSnakeTail
