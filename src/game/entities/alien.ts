import { explosion, laserGreen, saucer1 } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'

class Alien extends Entity {
  readonly phasePeriod = 200
  phaseCooldown: number
  phase: 'move' | 'fire'
  constructor(killCallback = () => {}, velocity = 5, size = 100) {
    super(killCallback, velocity, size, saucer1, 60)
    this.phaseCooldown = this.phasePeriod
    this.phase = 'move'
    this.reward.score = 100
  }

  init = (clock: GameClock, context: ContextController) => {
    this.isAlive = true
    this.fire = this.initFire(clock, laserGreen)
    this.initPosition(context)
    this.goToRandomPositionRight(context)
    this.deathAnimation = this.initDeathAnimation(clock, explosion)
    this.render(clock, this.move)
  }

  getProjectiles = () => {
    return this.projectiles
  }

  behave = (context: ContextController) => {
    switch (this.phase) {
      case 'fire':
        this.firePhase(context)
        break
      case 'move':
        this.movePhase()
        break
      default:
    }
  }

  movePhase = () => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    if (this.isAtDestination()) {
      this.phase = 'fire'
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
      this.goToRandomPositionRight(context)
      this.phaseCooldown = this.phasePeriod
    }
  }

  protected move = (context: ContextController) => {
    this.behave(context)
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size,
      height: this.size / 2
    })
  }
}

export default Alien
