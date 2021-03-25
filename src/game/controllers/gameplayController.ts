import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import { EnemyAsteroid, Player } from '@game/entities'
import TPosition from '@game/@types/position'
import { starsBack, starsFront, starsMiddle } from '@images'

class GameplayController {
  context: ContextController
  background: ContextController
  backgroundLayers: Array<HTMLImageElement>
  clock: GameClock
  player: Player
  private currentLevel: number = 0
  readonly levels: Array<EnemyController>
  private handlers: Record<string, () => void>
  private animationFrameId: number

  constructor(canvas: HTMLCanvasElement, backgroundCanvas: HTMLCanvasElement) {
    this.context = new ContextController(canvas)
    this.background = new ContextController(backgroundCanvas)
    this.backgroundLayers = [new Image(), new Image(), new Image()]
    this.clock = new GameClock()
    this.player = new Player()
    this.levels = [new EnemyController(EnemyAsteroid)]
    this.handlers = {}
    this.animationFrameId = 0
  }

  init = () => {
    this.initBackground()
    this.handlers = {
      canvasResize: this.context.resize(),
      playerControl: this.player.controlWithMouse(
        this.context.canvas,
        this.context
      )
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

  private initBackground = () => {
    this.backgroundLayers[0].src = starsBack
    this.backgroundLayers[1].src = starsMiddle
    this.backgroundLayers[2].src = starsFront
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
      const projectilePos = projectile.velocity.applyTo(projectile.position)
      entities.forEach((entity) => {
        if (!entity.isAlive) return
        const entitySize = entity.size
        const entityPos = entity.velocity.applyTo(entity.position)
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
    if (!this.context.canvas || !this.context) return
    this.handlers.playerControl()
    this.handlers.playerControl = this.player.controlWithMouse(
      this.context.canvas,
      this.context
    )
  }

  drawBackground = () => {
    let now = this.clock.now()
    if (now % 5 === 0 && this.background) {
      now = now / 5
      const size = this.background?.getSize()
      this.background.fillFrame('#000000')
      for (let i = 0; i < this.backgroundLayers.length; i++) {
        this.background.drawImage(
          this.backgroundLayers[i],
          -((now * i + size.width) % (size.width * 2)) + size.width,
          0,
          size
        )
        this.background.drawImage(
          this.backgroundLayers[i],
          -((now * i) % (size.width * 2)) + size.width,
          0,
          size
        )
      }
    }
  }

  start = () => {
    if (!this.context) return
    this.clock.draw(this.context)
    this.drawBackground()
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
