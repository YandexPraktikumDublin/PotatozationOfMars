import { Entity } from '@game/entities'

type TLevel = {
  enemyType: typeof Entity
  quantity: number
  simultaneously: number
  bossType: typeof Entity
  bossEntranceMusic?: string
  bossMusic?: string
}

export default TLevel
