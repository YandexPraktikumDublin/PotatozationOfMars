import { TPosition } from '@game/@types'

class Vector {
  magnitude: number
  x: number
  y: number
  constructor(magnitude: number) {
    this.magnitude = magnitude
    this.x = 0
    this.y = 0
  }

  correct = () => {
    const magnitude = Math.sqrt(this.x ** 2 + this.y ** 2)
    if (magnitude === 0) return
    const k = this.magnitude / magnitude
    this.x *= k
    this.y *= k
  }

  defineByAngle = (a: number) => {
    this.x = this.magnitude * Math.cos(a * Math.PI)
    this.y = this.magnitude * Math.sin(a * Math.PI)
  }

  defineByDirection = (
    destination: TPosition | { x: null; y: null },
    position: TPosition = { x: 0, y: 0 }
  ) => {
    const [x, y] = [destination.x, destination.y]
    if (!(x && y)) return
    const [ex, ey] = [position.x, position.y]
    const [dx, dy] = [x - ex, y - ey]
    const magnitude = Math.sqrt(dx ** 2 + dy ** 2)
    if (magnitude <= this.magnitude) {
      this.x = dx
      this.y = dy
      return
    }
    const k = this.magnitude / magnitude
    this.x = k * dx
    this.y = k * dy
  }

  applyTo = (position: TPosition): TPosition => {
    let { x, y } = position
    x += this.x
    y += this.y
    return { x, y }
  }
}

export default Vector
