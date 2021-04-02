import { crystal10 } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'

class Reward extends Entity {
  constructor(killCallback = () => {}, velocity = 2, size = 30) {
    super(killCallback, velocity, size, crystal10, 1)
    this.velocity.magnitude = velocity * ((size * 2) / this.size)
    this.damage = 0
  }

  init = (clock: GameClock, context: ContextController) => {
    const { height } = context.getSize()
    const { ox, oy } = context.center
    this.isAlive = true
    const x = 0 - ox
    const y = Math.random() * height - oy
    this.moveTo(x - this.size, y - this.size)
    this.render(clock, this.move)
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    if (
      this.destination.x === this.position.x &&
      this.destination.y === this.position.y
    ) {
      this.killCallback = () => {}
      this.kill()
      return
    }
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size
    })
  }
}

export default Reward
