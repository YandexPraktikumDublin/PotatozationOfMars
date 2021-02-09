import { tumbler } from '@images'
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
  clock: GameClock
  image: HTMLImageElement
  velocity: Vector
  constructor(clock: GameClock) {
    this.image = new Image()
    this.clock = clock
    this.position = { x: 0, y: 0 }
    this.destination = this.position
    this.velocity = new Vector(10)
  }

  moveTo = (destination: TPosition) => {
    this.destination = destination
  }

  controlWithMouse = (context: HTMLCanvasElement) => {
    return InputsController.onMouseDrag(context, this.moveTo)
  }

  move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    context.drawImage(this.image, this.position.x, this.position.y, 64, 16)
  }

  render = () => {
    this.image.onload = () => this.clock.startEvent(this.move)
    this.image.src = tumbler
  }
}

export default Player
