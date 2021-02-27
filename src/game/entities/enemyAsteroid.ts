import { asteroid } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'

class EnemyAsteroid extends Entity {
  angle: number
  rotation: number
  constructor(killCallback = () => {}, v = 5) {
    super(killCallback, Math.random() * v + v, Math.random() * 50 + 50)
    this.angle = 0
    this.rotation = Math.random() / 100
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
    this.moveTo(x, y)
    this.render(clock)
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

  render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = asteroid
  }
}

export default EnemyAsteroid
