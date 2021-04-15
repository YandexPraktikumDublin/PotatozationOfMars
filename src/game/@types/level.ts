import { Entity } from '@game/entities'

type TLevel = {
  enemyType: typeof Entity
  quantity: number
  simultaneously: number
  bossType: typeof Entity
  scalable?: boolean
}

export default TLevel
