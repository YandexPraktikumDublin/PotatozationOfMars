import { Entity } from "@game/entities";

type TLevel = {
  enemyType: typeof Entity
  quantity: number
  simultaneously: number
}

export default TLevel
