import { teslaWithAGun } from '@images'
import {
  ContextController,
  GameClock,
  InputsController
} from '@game/controllers'
import { TPosition } from '@game/@types'
import { Vector, Projectile } from '@game/entities'
import { KEYS } from '@game/config'

class Player {
  readonly image = new Image()
  private clockEvent: () => void
  position: TPosition
  destination: TPosition | { x: null; y: null }
  size: number
  velocity: Vector
  firePeriod: number
  fireCooldown: number
  fireQuantity: number
  projectiles: Array<Projectile>

  constructor(size = 50, velocity = 10) {
    this.clockEvent = () => {}
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.size = size
    this.velocity = new Vector(velocity)
    this.firePeriod = 50
    this.fireCooldown = this.firePeriod
    this.fireQuantity = 3
    this.projectiles = []
  }

  public init = (clock: GameClock) => {
    const fire = this.initFire(clock)
    const callBack = (context: ContextController) => {
      fire(context)
      this.move(context)
    }
    this.render(clock, callBack)
  }

  private initFire = (clock: GameClock) => {
    return (context: ContextController) => {
      this.fireCooldown--
      if (this.fireCooldown <= 0) {
        this.fireCooldown = this.firePeriod
        for (let i = 0; i < this.fireQuantity; i++) {
          if (this.projectiles.length >= 100) {
            this.projectiles[0].kill()
            this.projectiles.shift()
          }
          const projectile = new Projectile()
          this.projectiles.push(projectile)
          const angle =
            (i - (this.fireQuantity - 1) / 2) / (2 * this.fireQuantity)
          projectile.init(clock, context, this.position, angle)
        }
      }
    }
  }

  private moveTo = (destination: unknown, controller: unknown) => {
    const { coefficient, center } = controller as ContextController
    const { x, y } = destination as TPosition
    const { cx, cy } = coefficient
    const { ox, oy } = center
    this.destination = { x: x * cx - ox, y: y * cy - oy }
  }

  private moveInDirection = (move: unknown, moveFunc: unknown) => {
    const go = moveFunc as (move: boolean) => void
    this.destination = { x: null, y: null }
    go(move as boolean)
    this.velocity.correct()
  }

  private moveUp = (move: boolean) => {
    this.velocity.y = move
      ? -this.velocity.magnitude
      : this.velocity.y < 0
      ? 0
      : this.velocity.y
  }

  private moveLeft = (move: boolean) => {
    this.velocity.x = move
      ? -this.velocity.magnitude
      : this.velocity.x < 0
      ? 0
      : this.velocity.x
  }

  private moveRight = (move: boolean) => {
    this.velocity.x = move
      ? this.velocity.magnitude
      : this.velocity.x > 0
      ? 0
      : this.velocity.x
  }

  private moveDown = (move: boolean) => {
    this.velocity.y = move
      ? this.velocity.magnitude
      : this.velocity.y > 0
      ? 0
      : this.velocity.y
  }

  controlWithKeyboard = () => {
    const upHandler = InputsController.onKeyPress(
      this.moveInDirection,
      KEYS.up,
      this.moveUp
    )
    const downHandler = InputsController.onKeyPress(
      this.moveInDirection,
      KEYS.down,
      this.moveDown
    )
    const leftHandler = InputsController.onKeyPress(
      this.moveInDirection,
      KEYS.left,
      this.moveLeft
    )
    const rightHandler = InputsController.onKeyPress(
      this.moveInDirection,
      KEYS.right,
      this.moveRight
    )
    return () => {
      upHandler()
      downHandler()
      leftHandler()
      rightHandler()
    }
  }

  controlWithMouse = (
    context: HTMLCanvasElement,
    controller: ContextController
  ) => {
    return InputsController.onMouseDrag(context, this.moveTo, controller)
  }

  private move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size * 3,
      this.size
    )
  }

  render = (
    clock: GameClock,
    callback: (context: ContextController) => void
  ) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(callback)
    }
    this.image.src = teslaWithAGun
  }

  kill = () => {
    this.clockEvent()
  }
}

export default Player
