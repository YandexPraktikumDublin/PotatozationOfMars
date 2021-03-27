import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import { EnemyAsteroid, Entity, Player } from '@game/entities'
import TPosition from '@game/@types/position'
import { starsBack, starsFront, starsMiddle } from '@images'
import { TDispatchers, TLevel } from '@game/@types'

class GameplayController {
  context: ContextController
  background: ContextController
  backgroundLayers: Array<HTMLImageElement>
  clock: GameClock
  player: Player
  score: number
  readonly levels: Array<TLevel>
  private currentLevel: number = 0
  private enemyController: EnemyController
  private boss: Entity
  private handlers: Record<string, () => void>
  private animationFrameId: number
  private dispatchers: TDispatchers

  constructor(
    canvas: HTMLCanvasElement,
    backgroundCanvas: HTMLCanvasElement,
    dispatchers: TDispatchers
  ) {
    this.context = new ContextController(canvas)
    this.background = new ContextController(backgroundCanvas)
    this.backgroundLayers = [new Image(), new Image(), new Image()]
    this.clock = new GameClock()
    this.player = new Player()
    this.score = 0
    this.levels = [
      {
        enemyType: EnemyAsteroid,
        quantity: 10,
        simultaneously: 10,
        bossType: EnemyAsteroid
      }
    ]
    this.enemyController = new EnemyController(Entity)
    this.boss = new Entity()
    this.handlers = {}
    this.animationFrameId = 0
    this.dispatchers = dispatchers
  }

  init = () => {
    this.clock = new GameClock()
    this.player = new Player()
    this.initBackground()
    this.handlers = {
      canvasResize: this.context.resize(),
      playerControl: this.player.controlWithMouse(
        this.context.canvas,
        this.context
      )
    }
    this.currentLevel = 0
    this.initLevel(this.levels[this.currentLevel])
    this.player.init(this.clock)
    this.dispatchers.updateHealth(this.player.health)
  }

  private initLevel = (level: TLevel) => {
    const { enemyType, quantity, simultaneously, bossType } = level
    this.enemyController = new EnemyController(enemyType)
    this.enemyController.init(
      this.clock,
      this.context,
      quantity,
      simultaneously
    )
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.enemyController.getProjectiles())
      this.isHitEnemy(this.enemyController.entities)
      if (this.enemyController.quantity <= 0) {
        this.initBoss(bossType)
        collisionHandler()
      }
    })
  }

  private initBoss = (Boss: typeof Entity) => {
    this.boss = new Boss()
    this.boss.init(this.clock, this.context)
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.boss.getProjectiles())
      this.isHitEnemy([this.boss])
      if (!this.boss.isAlive) {
        this.currentLevel++
        const level =
          this.levels.length > this.currentLevel
            ? this.levels[this.currentLevel]
            : this.levels[this.levels.length - 1]
        this.initLevel(level)
        collisionHandler()
      }
    })
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

  private isHitEnemy = (enemies: Array<Entity>) => {
    const projectiles = this.player.projectiles
    const damage = this.player.fireDamage
    projectiles.forEach((projectile) => {
      if (!projectile.isAlive) return
      const projectileSize = projectile.size
      const projectilePos = projectile.velocity.applyTo(projectile.position)
      enemies.forEach((entity) => {
        if (!entity.isAlive) return
        const entitySize = entity.size
        const entityPos = entity.velocity.applyTo(entity.position)
        const distance = GameplayController.getDistance(
          entityPos,
          projectilePos
        )
        if (distance <= projectileSize / 2 + entitySize / 2) {
          projectile.kill()
          entity.takeDamage(damage, this.dispatchers.updateGameScore)
        }
      })
    })
  }

  private isCollidedPlayer = (projectiles: Array<Entity>) => {
    if (!this.player.isAlive) return
    const playerPos = this.player.position
    const playerSize = this.player.size
    projectiles.forEach((projectile) => {
      if (!projectile.isAlive) return
      const projectilePos = projectile.position
      const projectileSize = projectile.size
      const distance = GameplayController.getDistance(playerPos, projectilePos)
      if (distance <= projectileSize / 2 + playerSize / 2) {
        this.player.takeDamage(1, this.dispatchers.updateHealth)
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
    if (now % 5 === 0) {
      now = now / 5
      const size = this.background.getSize()
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

  newGame = () => {
    this.dispatchers.initNewGame()
    this.kill()
    this.init()
  }
}

export default GameplayController
