import { teslaWithAGun } from '@images'
import {
  ContextController,
  GameClock,
  InputsController
} from '@game/controllers'
import { TPosition } from '@game/@types'
import { Vector } from '@game/entities'
import { KEYS } from '@game/config'

class Player {
  readonly image = new Image()
  private clockEvent: () => void
  position: TPosition
  destination: TPosition
  velocity: Vector
  constructor() {
    this.clockEvent = () => {}
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.velocity = new Vector(10)
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
    this.destination = { x: -1, y: -1 }
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
    context.drawImage(this.image, this.position.x, this.position.y, 150, 50)
  }

  render = (clock: GameClock) => {
    this.image.onload = () => {
      this.clockEvent = clock.startEvent(this.move)
    }
    this.image.src = teslaWithAGun
  }

  kill = () => {
    this.clockEvent()
  }
}

export default Player
