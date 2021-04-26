import { explosion, laserGreen, potatoBoss } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'

class PotatoAlienBoss extends Entity {
  readonly phasePeriod = 400
  phaseCooldown: number
  phase: 'move' | 'fire'
  patternStep: number
  constructor(killCallback = () => {}, velocity = 5, size = 200) {
    super(killCallback, velocity, size, potatoBoss, 800)
    this.phaseCooldown = this.phasePeriod
    this.fireQuantity = 8
    this.firePeriod = 10
    this.phase = 'move'
    this.reward.score = 100
    this.patternStep = 0.01
  }

  init = (clock: GameClock, context: ContextController) => {
    this.isAlive = true
    this.fire = this.initFire(clock, laserGreen, {
      spread: 2,
      callbackWave: this.rotatePattern,
      maxLimit: 400,
      positionOffset: { x: -this.size / 6, y: (this.size / 12) * 5 }
    })
    this.initPosition(context)
    this.goToRandomPositionRight(context)
    this.deathAnimation = this.initDeathAnimation(clock, explosion)
    this.render(clock, this.move)
  }

  getProjectiles = () => {
    return this.projectiles
  }

  rotatePattern = () => {
    this.fireAngle += this.patternStep
  }

  behave = (context: ContextController) => {
    switch (this.phase) {
      case 'fire':
        this.firePhase(context)
        break
      case 'move':
        this.movePhase(context)
        break
      default:
    }
  }

  movePhase = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    if (this.isAtDestination()) {
      this.phase = 'fire'
      this.getBoundByBorders(context.getBorders(), this.size)
    }
  }

  firePhase = (context: ContextController) => {
    this.fire(context)
    this.timers(context)
  }

  timers = (context: ContextController) => {
    this.phaseCooldown--
    if (this.phaseCooldown <= 0) {
      this.phase = 'move'
      this.patternStep = -this.patternStep
      this.goToRandomPositionRight(context)
      this.phaseCooldown = this.phasePeriod
    }
  }

  protected move = (context: ContextController) => {
    this.behave(context)
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size
    })
  }
}

export default PotatoAlienBoss
