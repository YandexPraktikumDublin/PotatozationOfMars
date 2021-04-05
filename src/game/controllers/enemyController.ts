import { Entity } from '@game/entities'
import GameClock from '@game/controllers/gameClock'
import ContextController from '@game/controllers/contextController'

class EnemyController {
  entities: Array<Entity>
  EnemyType: typeof Entity
  current: number
  quantity: number
  simultaneously: number
  difficulty: number
  constructor(
    EnemyType: typeof Entity,
    simultaneously: number = 1,
    difficulty: number = 1,
    quantity: number = 0
  ) {
    this.EnemyType = EnemyType
    this.entities = []
    this.simultaneously = simultaneously
    this.difficulty = difficulty
    this.quantity = quantity === 0 ? simultaneously * difficulty : quantity
    this.current = this.quantity
  }

  init = (clock: GameClock, context: ContextController) => {
    this.current = this.quantity

    const createEntity = (i: number, callback: () => void) => {
      this.entities[i] = new this.EnemyType(callback)
      this.entities[i].init(clock, context)
      this.entities[i].health *= this.difficulty
    }

    for (let i = 0; i < this.simultaneously; i++) {
      const callback = () => {
        if (this.entities[i].isAlive) return
        if (this.current > this.simultaneously) {
          createEntity(i, callback)
        }
        this.current--
      }
      createEntity(i, callback)
    }
  }

  getEntities = () => {
    return this.entities.reduceRight(
      (acc: Array<Entity>, val) => [...acc, ...val.getEntities()],
      []
    )
  }

  getProjectiles = () => {
    return this.entities.reduceRight(
      (acc: Array<Entity>, val) => [...acc, ...val.getProjectiles()],
      []
    )
  }

  kill = () => {
    this.entities.forEach((entity) => {
      entity.kill()
    })
  }
}

export default EnemyController
