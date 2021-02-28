import { ContextController, GameClock } from '@game/controllers'
import { Entity } from '@game/entities'
import { laser } from '@images'
import TPosition from '@game/@types/position'

class Projectile extends Entity {
  constructor(killCallback = () => {}, velocity = 20, size = 10) {
    super(killCallback, velocity, size)
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
    this.render(clock)
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

  public render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = laser
  }
}

export default Projectile
