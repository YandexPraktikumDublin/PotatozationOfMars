import { asteroid, explosion } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'

class EnemyAsteroid extends Entity {
  angle: number
  rotation: number

  constructor(killCallback = () => {}, velocity = 5, size = 50) {
    super(
      killCallback,
      velocity,
      Math.round(Math.random() * size + size),
      asteroid,
      1
    )
    this.velocity.magnitude = velocity * ((size * 2) / this.size)
    this.health = (this.size - 50) * 0.8
    this.angle = 0
    this.rotation = (Math.random() - 0.5) / 100
    this.reward.score = this.size
  }

  init = (clock: GameClock, context: ContextController) => {
    const { width, height } = context.getSize()
    const { ox, oy } = context.center
    this.isAlive = true
    this.position = {
      x: width + Math.random() * width - ox,
      y: Math.random() * height - oy
    }
    const x = 0 - ox
    const y = Math.random() * height - oy
    this.moveTo(x - this.size, y - this.size)
    this.deathAnimation = this.initDeathAnimation(clock, explosion)
    this.render(clock, this.move)
  }

  private moveTo = (x: number, y: number) => {
    this.destination = { x, y }
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    if (
      this.destination.x === this.position.x &&
      this.destination.y === this.position.y
    ) {
      this.kill()
      return
    }
    this.angle += this.rotation
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size,
      angle: this.angle
    })
  }
}

export default EnemyAsteroid
