import { Entity } from '@game/entities'

type TLevel = {
  enemyType: typeof Entity
  quantity: number
  simultaneously: number
  bossType: typeof Entity
  bossEntranceMusic?: string
  bossMusic?: Array<string>
  levelMusic?: Array<string>
}

export default TLevel
