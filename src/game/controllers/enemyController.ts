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
    this.difficulty = difficulty < 1 ? 1 : difficulty
    this.simultaneously =
      this.difficulty > simultaneously
        ? simultaneously * 2
        : simultaneously + (this.difficulty - 1)
    this.quantity =
      quantity < this.simultaneously ? this.simultaneously : quantity
    this.quantity += (this.difficulty - 1) * simultaneously
    this.current = this.quantity
  }

  init = (
    clock: GameClock,
    context: ContextController,
    killCallback: (entity: Entity) => void = () => {}
  ) => {
    this.current = this.quantity

    const createEntity = (i: number, callback: () => void) => {
      this.entities[i] = new this.EnemyType(callback)
      this.entities[i].init(clock, context)
      this.entities[i].health *= Math.round(1.2 ** (this.difficulty - 1))
    }

    for (let i = 0; i < this.simultaneously; i++) {
      const callback = () => {
        if (this.entities[i].isAlive) return
        killCallback(this.entities[i])
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

  delete = () => {
    this.current = 0
    this.entities.forEach((entity) => {
      entity.isAlive = false
      entity.delete()
    })
  }
}

export default EnemyController
