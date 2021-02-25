import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import { EnemyAsteroid, Player } from '@game/entities'
import TPosition from '@game/@types/position'

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
    const level = this.levels[this.currentLevel]
    level.init(this.clock, this.context, 1000, 10, 5)
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(level)
      this.isHitEnemy(level)
      if (level.quantity <= 0) {
        collisionHandler()
      }
    })
    this.player.init(this.clock)
  }

  private static getDistance(positionA: TPosition, positionB: TPosition) {
    const dx = positionA.x - positionB.x
    const dy = positionA.y - positionB.y
    return Math.sqrt(dx ** 2 + dy ** 2)
  }

  private isHitEnemy = (enemies: EnemyController) => {
    const projectiles = this.player.projectiles
    const entities = enemies.entities
    projectiles.forEach((projectile) => {
      const projectileSize = projectile.size
      const projectilePos = projectile.position
      entities.forEach((entity) => {
        const entitySize = entity.size
        const entityPos = entity.position
        const distance = GameplayController.getDistance(
          entityPos,
          projectilePos
        )
        if (
          distance <= projectileSize + entitySize &&
          projectile.isAlive &&
          entity.isAlive
        ) {
          projectile.kill()
          entity.kill()
        }
      })
    })
  }

  private isCollidedPlayer = (enemies: EnemyController) => {
    const playerPos = this.player.position
    const projectiles = enemies.getProjectiles()
    projectiles.forEach((projectile) => {
      const projectilePos = projectile.position
      const projectileSize = projectile.size
      const distance = GameplayController.getDistance(playerPos, projectilePos)
      if (distance <= projectileSize && projectile.isAlive) {
        projectile.kill()
      }
    })
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
