import { Enemy } from '@game/entities'
import GameClock from '@game/controllers/gameClock'
import ContextController from '@game/controllers/contextController'

class EnemyController {
  entities: Array<Enemy>
  EnemyType: typeof Enemy
  quantity: number
  constructor(EnemyType: typeof Enemy) {
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
    this.quantity = quantity - simultaneously
    console.log(quantity, simultaneously)

    for (let i = 0; i < simultaneously; i++) {
      const callback = () => {
        console.log(this.quantity)
        if (this.quantity > 0) {
          this.quantity--
          this.entities[i] = new this.EnemyType(callback, velocity)
          this.entities[i].init(clock, context)
        }
      }
      this.entities[i] = new this.EnemyType(callback, velocity)
      this.entities[i].init(clock, context)
    }
  }

  kill = () => {
    this.entities.forEach((entity) => {
      entity.kill()
    })
  }
}

export default EnemyController
