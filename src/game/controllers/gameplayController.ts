import {
  ContextController,
  GameClock,
  EnemyController
} from '@game/controllers'
import {
  Alien,
  AsteroidSnake,
  EnemyAsteroid,
  Entity,
  Player
} from '@game/entities'
import TPosition from '@game/@types/position'
import { starsBack, starsFront, starsMiddle } from '@images'
import { TDispatchers, TLevel } from '@game/@types'
import Reward from '@game/entities/reward'
import { getDistance } from '@game/utils'

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
  private reward: Reward
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
        quantity: 40,
        simultaneously: 5,
        bossType: AsteroidSnake
      },
      {
        enemyType: Alien,
        quantity: 5,
        simultaneously: 5,
        bossType: AsteroidSnake,
        scalable: true
      }
    ]
    this.enemyController = new EnemyController(Entity)
    this.boss = new Entity()
    this.reward = new Reward()
    this.handlers = {}
    this.animationFrameId = 0
    this.dispatchers = dispatchers
  }

  init = () => {
    this.clock = new GameClock()
    this.initPlayer()
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
    this.getRandomReward()
  }

  private initPlayer = () => {
    this.player = new Player()
    this.player.killCallback = () => {
      console.log(this.score)
      this.dispatchers.updateLeaderBoard(this.score)
    }
  }

  private initLevel = (level: TLevel) => {
    const { enemyType, simultaneously, scalable, quantity, bossType } = level
    const difficulty = scalable ? this.currentLevel + 1 : 1
    this.enemyController = new EnemyController(
      enemyType,
      simultaneously,
      difficulty,
      quantity * difficulty
    )
    this.enemyController.init(this.clock, this.context)
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.enemyController.getProjectiles())
      this.isHitEnemy(this.enemyController.getEntities())
      if (this.enemyController.current <= 0) {
        this.initBoss(bossType)
        collisionHandler()
      }
    })
  }

  private initBoss = (Boss: typeof Entity) => {
    this.boss = new Boss()
    this.boss.init(this.clock, this.context)
    const initialCount = 100
    let count = initialCount
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.boss.getProjectiles())
      this.isHitEnemy(this.boss.getEntities())
      if (!this.boss.isAlive) {
        if (count === initialCount) this.initReward(this.boss.position)
        count--
        if (count <= 0) {
          this.currentLevel++
          if (this.player.isAlive) {
            this.player.health++
            this.dispatchers.updateHealth(this.player.health)
          }
          const level =
            this.levels.length > this.currentLevel
              ? this.levels[this.currentLevel]
              : this.levels[this.levels.length - 1]
          this.initLevel(level)
          collisionHandler()
        }
      }
    })
  }

  private initReward = (position: TPosition) => {
    this.reward.killCallback = () => {}
    this.reward.kill()
    this.reward = new Reward(this.getRandomReward)
    this.reward.position = position
    this.reward.init(this.clock, this.context)
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer([this.reward])
      if (!this.reward.isAlive) {
        collisionHandler()
      }
    })
  }

  private initBackground = () => {
    this.backgroundLayers[0].src = starsBack
    this.backgroundLayers[1].src = starsMiddle
    this.backgroundLayers[2].src = starsFront
  }

  private isHitEnemy = (enemies: Array<Entity>) => {
    const projectiles = this.player.getProjectiles()
    const damage = this.player.damage
    projectiles.forEach((projectile) => {
      if (!projectile.isAlive) return
      const projectileSize = projectile.size
      const projectilePos = projectile.velocity.applyTo(projectile.position)
      let closest: number
      let target: TPosition | undefined
      enemies.forEach((entity) => {
        if (!entity.isAlive) return
        const entitySize = entity.size
        const entityPos = entity.velocity.applyTo(entity.position)
        const distance = getDistance(entityPos, projectilePos)
        if (
          this.player.modifiers.homingProjectiles &&
          (!closest || distance < closest)
        ) {
          closest = distance
          target = entityPos
        }
        if (distance <= projectileSize / 2 + entitySize / 2) {
          projectile.hit()
          entity.takeDamage(damage, this.dispatchers.updateGameScore)
        }
      })
      if (target) {
        projectile.velocity.deflectTo(
          target,
          projectilePos,
          this.player.homingIntensity
        )
      }
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
      const distance = getDistance(playerPos, projectilePos)
      if (distance <= projectileSize / 2 + playerSize / 2) {
        this.player.takeDamage(projectile.damage, this.dispatchers.updateHealth)
        projectile.hit()
      }
    })
  }

  increaseDamage = () => {
    if (this.player.isAlive) {
      this.player.damage *= 1.2
    }
  }

  addProjectile = () => {
    if (this.player.isAlive) {
      if (this.player.fireQuantity < 8) this.player.fireQuantity += 2
      else this.getRandomReward()
    }
  }

  increaseAttackSpeed = () => {
    const maxSpeed = 5
    if (this.player.isAlive) {
      if (this.player.firePeriod === maxSpeed) {
        this.getRandomReward()
        return
      }
      this.player.firePeriod =
        this.player.firePeriod * 0.8 < maxSpeed
          ? maxSpeed
          : this.player.firePeriod * 0.8
    }
  }

  homingProjectile = () => {
    if (
      this.player.modifiers.homingProjectiles &&
      this.player.homingIntensity
    ) {
      if (this.player.homingIntensity > 10) {
        this.getRandomReward()
        return
      }
      this.player.homingIntensity++
      return
    }
    this.player.modifiers.homingProjectiles = true
    this.player.homingIntensity = 1
  }

  getRandomReward = () => {
    const rarity = {
      common: 4,
      rare: 2
    }
    const rewards = [
      { upgrade: this.increaseDamage, rarity: rarity.common },
      { upgrade: this.addProjectile, rarity: rarity.rare },
      { upgrade: this.increaseAttackSpeed, rarity: rarity.common },
      { upgrade: this.homingProjectile, rarity: rarity.rare }
    ]
    let commonRarity = rewards.reduceRight(
      (acc, value) => value.rarity + acc,
      0
    )
    const random = Math.random() * commonRarity
    rewards.some((reward) => {
      commonRarity -= reward.rarity
      if (commonRarity <= random) {
        reward.upgrade()
        return true
      }
      return false
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
