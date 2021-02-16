import { moon } from '@images'
import {
  ContextController,
  GameClock,
  InputsController
} from '@game/controllers'
import { TPosition } from '@game/@types'
import Vector from './vector'

class Player {
  position: TPosition
  destination: TPosition
  image: HTMLImageElement
  velocity: Vector
  constructor() {
    this.image = new Image()
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.velocity = new Vector(10)
  }

  moveTo = (destination: unknown, controller: unknown) => {
    const { x, y } = destination as TPosition
    const { cx, cy } = (<ContextController>controller).coefficient
    this.destination = { x: x * cx, y: y * cy }
  }

  moveInDirection = (move: unknown, moveFunc: unknown) => {
    const go = moveFunc as (move: boolean) => void
    this.destination = { x: -1, y: -1 }
    go(move as boolean)
    this.velocity.correct()
  }

  moveUp = (move: boolean) => {
    this.velocity.y = move
      ? -this.velocity.magnitude
      : this.velocity.y < 0
      ? 0
      : this.velocity.y
  }

  moveLeft = (move: boolean) => {
    this.velocity.x = move
      ? -this.velocity.magnitude
      : this.velocity.x < 0
      ? 0
      : this.velocity.x
  }

  moveRight = (move: boolean) => {
    this.velocity.x = move
      ? this.velocity.magnitude
      : this.velocity.x > 0
      ? 0
      : this.velocity.x
  }

  moveDown = (move: boolean) => {
    this.velocity.y = move
      ? this.velocity.magnitude
      : this.velocity.y > 0
      ? 0
      : this.velocity.y
  }

  controlWithKeyboard = () => {
    const up = ['KeyW', 'ArrowUp']
    const down = ['KeyS', 'ArrowDown']
    const left = ['KeyA', 'ArrowLeft']
    const right = ['KeyD', 'ArrowRight']
    const upHandler = InputsController.onKeyPress(
      this.moveInDirection,
      up,
      this.moveUp
    )
    const downHandler = InputsController.onKeyPress(
      this.moveInDirection,
      down,
      this.moveDown
    )
    const leftHandler = InputsController.onKeyPress(
      this.moveInDirection,
      left,
      this.moveLeft
    )
    const rightHandler = InputsController.onKeyPress(
      this.moveInDirection,
      right,
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

  move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, 64, 16)
  }

  render = (clock: GameClock) => {
    this.image.onload = () => clock.startEvent(this.move)
    this.image.src = moon
  }
}

export default Player
