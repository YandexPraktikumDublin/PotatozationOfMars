import { asteroid } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Enemy } from '@game/entities'

class EnemyAsteroid extends Enemy {
  constructor(killCallback = () => {}, v = 5) {
    super(killCallback, Math.random() * v + v)
  }

  init = (clock: GameClock, context: ContextController) => {
    const { width, height } = context.getSize()
    const { ox, oy } = context.center
    this.position = {
      x: width + Math.random() * width - ox,
      y: Math.random() * height - oy
    }
    const x = 0 - ox
    const y = Math.random() * height - oy
    this.moveTo(x, y)
    this.render(clock)
  }

  moveTo = (x: number, y: number) => {
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
    context.drawImage(this.image, this.position.x, this.position.y, 50, 50)
  }

  render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = asteroid
  }
}

export default EnemyAsteroid
