import { explosion, moon } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'
import { getDistance } from '@game/utils'
import AsteroidSnakeTail from '@game/entities/asteroidSnakeTail'

class AsteroidSnake extends Entity {
  angle: number
  goToRandomPositionRight: () => void
  goToRandomPositionLeft: () => void
  phase: 'idle' | 'attack'
  phasePeriod: number
  phaseCooldown: number
  damagePeriod: number
  damageCooldown: number
  tail: Array<AsteroidSnakeTail>

  constructor(killCallback = () => {}, velocity = 10, size = 100) {
    super(killCallback, velocity, size, moon, 500)
    this.angle = 0
    this.reward.score = 500
    this.goToRandomPositionRight = () => {}
    this.goToRandomPositionLeft = () => {}
    this.phase = 'idle'
    this.phasePeriod = 500
    this.phaseCooldown = this.phasePeriod
    this.damagePeriod = 60
    this.damageCooldown = this.damagePeriod
    this.tail = []
  }

  init = (clock: GameClock, context: ContextController) => {
    const { width, height } = context.getSize()
    const { ox, oy } = context.center
    this.isAlive = true
    this.position = {
      x: width + Math.random() * width - ox,
      y: Math.random() * height - oy
    }
    this.goToRandomPositionRight = () => {
      this.moveTo(
        Math.random() * (width / 2) + width / 2 - ox,
        Math.random() * height - oy
      )
    }
    this.goToRandomPositionLeft = () => {
      this.moveTo(-ox, Math.random() * height - oy)
    }
    this.goToRandomPositionRight()
    this.deathAnimation = this.initDeathAnimation(clock, explosion)
    this.initTail(clock, context)
    this.render(clock, this.move)
  }

  initTail = (clock: GameClock, context: ContextController) => {
    for (let i = 0; i < 10; i++) {
      this.tail[i] = new AsteroidSnakeTail()
      this.tail[i].init(clock, context)
      this.tail[i].attach(i === 0 ? this : this.tail[i - 1], this.takeDamage)
    }
  }

  timers = () => {
    if (this.damageCooldown > 0) {
      this.damageCooldown--
      this.modifiers.invincible = this.damageCooldown !== 0
    }
    if (this.phaseCooldown > 0) {
      this.phaseCooldown--
    } else if (this.phase === 'idle') {
      this.goToRandomPositionLeft()
      this.velocity.magnitude = 15
      this.phase = 'attack'
    }
  }

  private moveTo = (x: number, y: number) => {
    this.destination = { x, y }
  }

  protected move = (context: ContextController) => {
    this.timers()
    this.velocity.deflectTo(this.destination, this.position, 1)
    this.position = this.velocity.applyTo(this.position)
    this.angle = this.velocity.getAngle() - 1
    const distance = getDistance(this.destination, this.position)
    if (distance < this.size) {
      this.goToRandomPositionRight()
      if (this.phase === 'attack') {
        this.velocity.magnitude = 10
        this.phaseCooldown = this.phasePeriod
        this.phase = 'idle'
      }
    }
    const { top, right, bottom, left } = context.getBorders()
    this.getBoundByBorders(top, right * 2, bottom, left)
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size,
      angle: this.angle
    })
  }

  getEntities = () => {
    return [this, ...this.tail]
  }

  getProjectiles = () => {
    return [this, ...this.tail]
  }

  hit = () => {
    if (this.modifiers.invincible) return
    this.damageCooldown = this.damagePeriod
    this.modifiers.invincible = true
    this.deathAnimation()
  }

  public kill = (dispatcher: (score: number) => void = () => {}) => {
    this.tail.forEach((entity) => {
      entity.kill()
    })
    this.isAlive = false
    this.clockEvent()
    this.deathAnimation()
    dispatcher(this.reward.score)
    this.killCallback()
  }
}

export default AsteroidSnake
