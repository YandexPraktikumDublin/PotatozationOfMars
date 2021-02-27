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
    this.fireQuantity = 1
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
          if (this.projectiles.length >= 200) {
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

  private moveTo = (destination: TPosition, controller: unknown) => {
    const { coefficient, center } = controller as ContextController
    const { x, y } = destination as TPosition
    const { cx, cy } = coefficient
    const { ox, oy } = center
    this.destination = { x: x * cx - ox, y: y * cy - oy }
  }

  controlWithKeyboard = () => {
    const keysPressed = {
      up: false,
      down: false,
      left: false,
      right: false
    }

    const move = (key: unknown) => {
      switch (key) {
        case KEYS.up:
          this.velocity.y = -this.velocity.magnitude
          keysPressed.up = true
          break
        case KEYS.down:
          this.velocity.y = this.velocity.magnitude
          keysPressed.down = true
          break
        case KEYS.left:
          this.velocity.x = -this.velocity.magnitude
          keysPressed.left = true
          break
        case KEYS.right:
          this.velocity.x = this.velocity.magnitude
          keysPressed.right = true
          break
        default:
          return
      }
      this.destination = { x: null, y: null }
      this.velocity.correct()
    }

    const stay = (key: unknown) => {
      switch (key) {
        case KEYS.up:
          this.velocity.y = keysPressed.down ? this.velocity.magnitude : 0
          keysPressed.up = false
          break
        case KEYS.down:
          this.velocity.y = keysPressed.up ? -this.velocity.magnitude : 0
          keysPressed.down = false
          break
        case KEYS.left:
          this.velocity.x = keysPressed.right ? this.velocity.magnitude : 0
          keysPressed.left = false
          break
        case KEYS.right:
          this.velocity.x = keysPressed.left ? -this.velocity.magnitude : 0
          keysPressed.right = false
          break
        default:
          return
      }
      this.destination = { x: null, y: null }
      this.velocity.correct()
    }

    const upHandler = InputsController.onKeyPress(KEYS.up, move, stay, KEYS.up)
    const downHandler = InputsController.onKeyPress(
      KEYS.down,
      move,
      stay,
      KEYS.down
    )
    const leftHandler = InputsController.onKeyPress(
      KEYS.left,
      move,
      stay,
      KEYS.left
    )
    const rightHandler = InputsController.onKeyPress(
      KEYS.right,
      move,
      stay,
      KEYS.right
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
    const { top, right, bottom, left } = context.getBorders()
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    const { x, y } = this.position
    this.position.x = x > right ? right : x < left ? left : this.position.x
    this.position.y = y > bottom ? bottom : y < top ? top : this.position.y
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size * 3,
      height: this.size
    })
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
