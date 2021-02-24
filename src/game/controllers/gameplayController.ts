import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import { EnemyAsteroid, Player } from '@game/entities'

class GameplayController {
  canvas: HTMLCanvasElement
  context: ContextController
  clock: GameClock
  player: Player
  private currentLevel: number = 0
  private levels: Array<EnemyController>
  private handlers: Record<string, () => void>
  private animationFrameId: number
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = new ContextController(
      canvas.getContext('2d') as CanvasRenderingContext2D
    )
    this.clock = new GameClock()
    this.player = new Player()
    this.levels = [new EnemyController(EnemyAsteroid)]
    this.handlers = {}
    this.animationFrameId = 0
  }

  init = () => {
    this.handlers = {
      canvasResize: this.context.resize(),
      playerControl: this.player.controlWithMouse(this.canvas, this.context)
    }
    this.levels[this.currentLevel].init(this.clock, this.context, 1000, 10, 5)
    this.player.render(this.clock)
  }

  controlWithKeyboard = () => {
    this.handlers.playerControl()
    this.handlers.playerControl = this.player.controlWithKeyboard()
  }

  controlWithMouse = () => {
    this.handlers.playerControl()
    this.handlers.playerControl = this.player.controlWithMouse(
      this.canvas,
      this.context
    )
  }

  start = () => {
    this.clock.draw(this.context)
    this.animationFrameId = window.requestAnimationFrame(this.start)
  }

  stop = () => {
    window.cancelAnimationFrame(this.animationFrameId)
  }

  kill = () => {
    for (const handler in this.handlers) {
      if (Object.prototype.hasOwnProperty.call(this.handlers, handler)) {
        this.handlers[handler]()
        this.handlers[handler] = () => {}
      }
    }
  }
}

export default GameplayController
