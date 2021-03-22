import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'
import { laser } from '@images'
import TPosition from '@game/@types/position'

class Projectile extends Entity {
  constructor(velocity = 20, size = 10, image = laser, killCallback = () => {}) {
    super(killCallback, velocity, size, image)
  }

  public init = (
    clock: GameClock,
    context: ContextController,
    position: TPosition = this.position,
    angle = 0
  ) => {
    const { ox, oy } = context.center
    this.isAlive = true
    this.position = position || { x: ox, y: oy }
    this.velocity.defineByAngle(angle)
    this.render(clock, this.move)
  }

  protected move = (context: ContextController) => {
    const { width, height } = context.instance.canvas
    if (
      Math.abs(this.position.x) > width / 2 ||
      Math.abs(this.position.y) > height / 2
    ) {
      this.kill()
    }
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size
    })
  }
}

export default Projectile
