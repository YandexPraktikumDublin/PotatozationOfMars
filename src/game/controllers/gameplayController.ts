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
  Player,
  PotatoAlienBoss,
  Sound
} from '@game/entities'
import TPosition from '@game/@types/position'
import { crystal9, diamond, starsBack, starsFront, starsMiddle } from '@images'
import { TDispatchers, TLevel } from '@game/@types'
import Reward from '@game/entities/reward'
import { getDistance } from '@game/utils'
import {
  asteroidSnakeBattleMusic,
  asteroidSnakeEntrance,
  potatoBossBattleMusic,
  potatoBossEntrance,
  rewardSound1,
  rewardSound2,
  upgradeSound
} from '@game/sound'

class GameplayController {
  context: ContextController
  background: ContextController
  backgroundLayers: Array<HTMLImageElement>
  clock: GameClock
  isPaused: boolean
  player: Player
  score: number
  readonly levels: Array<TLevel>
  readonly rewards: Array<Reward>
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
    this.isPaused = true
    this.player = new Player()
    this.score = 0
    this.levels = [
      {
        enemyType: EnemyAsteroid,
        quantity: 40,
        simultaneously: 5,
        bossType: AsteroidSnake,
        bossEntranceMusic: asteroidSnakeEntrance,
        bossMusic: asteroidSnakeBattleMusic
      },
      {
        enemyType: Alien,
        quantity: 10,
        simultaneously: 5,
        bossType: PotatoAlienBoss,
        bossEntranceMusic: potatoBossEntrance,
        bossMusic: potatoBossBattleMusic
      }
    ]
    this.enemyController = new EnemyController(Entity)
    this.boss = new Entity()
    this.rewards = []
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
      ),
      rewardsHandler: this.clock.startEvent(() => {
        this.isCollidedPlayer(this.rewards)
      })
    }
    this.currentLevel = 0
    this.initLevel(this.levels[this.currentLevel])
    this.player.init(this.clock)
    this.dispatchers.updateHealth(this.player.health)
    this.getRandomReward()
    this.context.startSoundTrack()
  }

  private initPlayer = () => {
    this.player = new Player()
    this.player.killCallback = () => {
      console.log(this.score)
      this.dispatchers.updateLeaderBoard(this.score)
    }
  }

  private initLevel = (level: TLevel) => {
    const { enemyType, simultaneously, quantity } = level
    const difficulty =
      this.currentLevel > this.levels.length - 1
        ? this.currentLevel + 1 - (this.levels.length - 1)
        : 1
    this.enemyController = new EnemyController(
      enemyType,
      simultaneously,
      difficulty,
      quantity * difficulty
    )
    const killCallback = (entity: Entity) => {
      const dispatchScore = () => {
        this.dispatchers.updateGameScore(entity.reward.score)
      }
      this.initReward(entity.position, dispatchScore, {
        imageURL: diamond,
        soundURL: [rewardSound1, rewardSound2]
      })
    }
    this.enemyController.init(this.clock, this.context, killCallback)
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.enemyController.getProjectiles())
      this.isHitEnemy(this.enemyController.getEntities())
      if (this.enemyController.current <= 0) {
        this.initBoss(level, difficulty)
        collisionHandler()
      }
    })
  }

  private initBoss = (level: TLevel, difficulty: number) => {
    const { bossType: Boss, bossEntranceMusic, bossMusic } = level
    this.boss = new Boss()
    this.boss.init(this.clock, this.context)
    this.boss.health *= difficulty
    const initialCount = 100
    let count = initialCount
    if (bossEntranceMusic) {
      const entrance = new Sound(bossEntranceMusic)
      const music = bossMusic
        ? new Sound(bossMusic)
        : this.context.currentSoundtrack
      this.context.stopSoundtrack()
      this.context.currentSoundtrack = entrance
      entrance.play(this.context.soundVolume).next(() => {
        this.context.startSoundTrack(music)
      })
    }
    const collisionHandler = this.clock.startEvent(() => {
      this.isCollidedPlayer(this.boss.getProjectiles())
      this.isHitEnemy(this.boss.getEntities())
      if (!this.boss.isAlive) {
        if (count === initialCount) {
          const dispatchScore = () => {
            this.dispatchers.updateGameScore(this.boss.reward.score)
          }
          this.initReward(this.boss.position, dispatchScore, {
            imageURL: diamond,
            soundURL: [rewardSound1, rewardSound2],
            size: 100
          })
          this.initReward(this.boss.position, this.getRandomReward, {
            imageURL: crystal9,
            soundURL: [upgradeSound]
          })
        }
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
              : this.levels[this.currentLevel % this.levels.length]
          this.initLevel(level)
          this.context.startSoundTrack()
          collisionHandler()
        }
      }
    })
  }

  private initReward = (
    position: TPosition,
    rewardAction: () => void,
    options?: { soundURL?: Array<string>; imageURL?: string; size?: number }
  ) => {
    if (this.rewards.length >= 50) {
      this.rewards[0].deathAnimation = () => {}
      this.rewards[0].delete()
      this.rewards.shift()
    }
    const reward = new Reward(rewardAction)
    reward.position = position
    reward.init(this.clock, this.context, options)
    reward.size = options?.size ?? reward.size
    this.rewards.push(reward)
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
          entity.takeDamage(damage)
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
      this.displayText(`Damage increased to ${Math.round(this.player.damage)}`)
    }
  }

  addProjectile = () => {
    if (this.player.isAlive) {
      if (this.player.fireQuantity < 8) {
        this.player.fireQuantity += 2
        this.displayText(`You now fire ${this.player.fireQuantity} projectiles`)
      } else this.getRandomReward()
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
      this.displayText(`Attack speed is increased by 20%`)
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
      this.displayText(`Homing is improved`)
      return
    }
    this.player.modifiers.homingProjectiles = true
    this.player.homingIntensity = 1
    let count = 60
    const hideText = this.clock.startEvent((context) => {
      count--
      if (count <= 0) hideText()
      context.drawText(`Projectiles are now homing`)
    })
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

  displayText = (text: string) => {
    let count = 60
    const hideText = this.clock.startEvent((context) => {
      count--
      if (count <= 0) hideText()
      context.drawText(text)
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

  setSoundVolume = (volume: number) => {
    this.context.soundVolume = volume
    const { currentSoundtrack, musicVolume } = this.context
    currentSoundtrack?.setVolume(volume * musicVolume)
    const clickSound = new Sound(rewardSound1)
    clickSound.play(volume)
  }

  setMusicVolume = (volume: number) => {
    this.context.musicVolume = volume
    const { currentSoundtrack, soundVolume } = this.context
    currentSoundtrack?.setVolume(volume * soundVolume)
    const clickSound = new Sound(rewardSound1)
    clickSound.play(volume * soundVolume)
  }

  start = () => {
    if (!this.context || !this.isPaused) return
    const tick = () => {
      this.clock.draw(this.context)
      this.drawBackground()
      this.animationFrameId = window.requestAnimationFrame(tick)
    }
    tick()
    this.isPaused = false
    this.context.unpauseSoundtrack()
  }

  stop = () => {
    window.cancelAnimationFrame(this.animationFrameId)
    this.context.pauseSoundtrack()
    this.isPaused = true
  }

  kill = () => {
    for (const handler in this.handlers) {
      if (Object.prototype.hasOwnProperty.call(this.handlers, handler)) {
        this.handlers[handler]()
        this.handlers[handler] = () => {}
      }
    }
    this.context.stopSoundtrack()
  }

  newGame = () => {
    this.dispatchers.initNewGame()
    this.kill()
    this.init()
  }
}

export default GameplayController
