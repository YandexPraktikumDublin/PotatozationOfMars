import { Entity } from '@game/entities'
import GameClock from '@game/controllers/gameClock'
import ContextController from '@game/controllers/contextController'

class EnemyController {
  entities: Array<Entity>
  EnemyType: typeof Entity
  quantity: number
  constructor(EnemyType: typeof Entity) {
    this.EnemyType = EnemyType
    this.entities = []
    this.quantity = 0
  }

  init = (
    clock: GameClock,
    context: ContextController,
    quantity: number = 1,
    simultaneously: number = 1,
    velocity: number = 1
  ) => {
    this.quantity = quantity
    console.log(quantity, simultaneously)

    for (let i = 0; i < simultaneously; i++) {
      const callback = () => {
        this.quantity--
        if (this.quantity > simultaneously) {
          this.entities[i] = new this.EnemyType(callback, velocity)
          this.entities[i].init(clock, context)
        }
      }
      this.entities[i] = new this.EnemyType(callback, velocity)
      this.entities[i].init(clock, context)
    }
  }

  getProjectiles = () => {
    const projectiles: Array<Entity> = []
    this.entities.forEach((entity) => {
      projectiles.push(...entity.getProjectile())
    })
    return projectiles
  }

  kill = () => {
    this.entities.forEach((entity) => {
      entity.kill()
    })
  }
}

export default EnemyController
