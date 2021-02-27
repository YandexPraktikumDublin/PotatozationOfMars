class ContextController {
  instance: CanvasRenderingContext2D
  coefficient: { cx: number; cy: number }
  center: { ox: number; oy: number }
  constructor(context: CanvasRenderingContext2D, width = 2000, height = 1000) {
    this.instance = context
    this.instance.canvas.width = width
    this.instance.canvas.height = height
    this.center = { ox: width / 2, oy: height / 2 }
    this.coefficient = { cx: 1, cy: 1 }
  }

  getSize = () => {
    const { width, height } = this.instance.canvas
    return { width, height }
  }

  getBorders = () => {
    const { width, height } = this.instance.canvas
    const { ox, oy } = this.center
    return { top: 0 - oy, right: width - ox, bottom: height - oy, left: 0 - ox }
  }

  resize = () => {
    const resizeCanvas = () => {
      const { width, height } = this.instance.canvas.getBoundingClientRect()
      this.coefficient.cx = this.instance.canvas.width / width
      this.coefficient.cy = this.instance.canvas.height / height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }

  drawImage = (
    image: HTMLImageElement,
    x: number,
    y: number,
    options: {
      width?: number
      height?: number
      angle?: number
      pivotX?: number
      pivotY?: number
    }
  ) => {
    const context = this.instance

    context.save()

    const imageWidth = options.width ?? image.width
    const imageHeight = options.height ?? options.width ?? image.height
    const pivotX = options.pivotX ?? 0.5
    const pivotY = options.pivotY ?? 0.5
    const angle = options.angle ?? 0
    const { ox, oy } = this.center
    const offsetX = pivotX * imageWidth
    const offsetY = pivotY * imageHeight
    context.translate(x + ox, y + oy)
    context.rotate(angle * Math.PI)
    context.translate(-offsetX, -offsetY)

    context.drawImage(image, 0, 0, imageWidth, imageHeight)
    context.restore()
  }

  clearFrame = () => {
    this.instance.fillStyle = '#000000'
    this.instance.fillRect(
      0,
      0,
      this.instance.canvas.width,
      this.instance.canvas.height
    )
  }
}

export default ContextController
