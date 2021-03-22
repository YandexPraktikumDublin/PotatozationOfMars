import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import { EnemyAsteroid, Player } from '@game/entities'
import TPosition from '@game/@types/position'

class GameplayController {
  canvas: HTMLCanvasElement | null
  context: ContextController | null
  clock: GameClock
  player: Player
  private currentLevel: number = 0
  readonly levels: Array<EnemyController>
  private handlers: Record<string, () => void>
  private animationFrameId: number

  constructor() {
    this.canvas = null
    this.context = null
    this.clock = new GameClock()
    this.player = new Player()
    this.levels = [new EnemyController(EnemyAsteroid)]
    this.handlers = {}
    this.animationFrameId = 0
  }

  init = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas
    this.context = new ContextController(
      this.canvas.getContext('2d') as CanvasRenderingContext2D
    )
    this.handlers = {
      canvasResize: this.context.resize(),
      playerControl: this.player.controlWithMouse(this.canvas, this.context)
    }
    const level = this.levels[this.currentLevel]
    level.init(this.clock, this.context, 1000000, 10)
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
    const damage = this.player.fireDamage
    const entities = enemies.entities
    projectiles.forEach((projectile) => {
      if (!projectile.isAlive) return
      const projectileSize = projectile.size
      const projectilePos = projectile.position
      entities.forEach((entity) => {
        if (!entity.isAlive) return
        const entitySize = entity.size
        const entityPos = entity.position
        const distance = GameplayController.getDistance(
          entityPos,
          projectilePos
        )
        if (distance <= projectileSize / 2 + entitySize / 2) {
          projectile.kill()
          entity.takeDamage(damage)
        }
      })
    })
  }

  private isCollidedPlayer = (enemies: EnemyController) => {
    const playerPos = this.player.position
    const playerSize = this.player.size
    const projectiles = enemies.getProjectiles()
    projectiles.forEach((projectile) => {
      if (!projectile.isAlive) return
      const projectilePos = projectile.position
      const projectileSize = projectile.size
      const distance = GameplayController.getDistance(playerPos, projectilePos)
      if (distance <= projectileSize / 2 + playerSize / 2) {
        projectile.kill()
      }
    })
  }

  controlWithKeyboard = () => {
    this.handlers.playerControl()
    this.handlers.playerControl = this.player.controlWithKeyboard()
  }

  controlWithMouse = () => {
    if (!this.canvas || !this.context) return
    this.handlers.playerControl()
    this.handlers.playerControl = this.player.controlWithMouse(
      this.canvas,
      this.context
    )
  }

  start = () => {
    if (!this.context) return
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
