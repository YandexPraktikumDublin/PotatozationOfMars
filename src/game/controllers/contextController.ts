class ContextController {
  instance: CanvasRenderingContext2D
  coefficient: { cx: number; cy: number }
  constructor(context: CanvasRenderingContext2D) {
    this.instance = context
    this.instance.canvas.width = 1000
    this.instance.canvas.height = 500
    this.coefficient = { cx: 1, cy: 1 }
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
    width?: number | undefined,
    height?: number | undefined,
    pivotX = 0.5,
    pivotY = 0.5
  ) => {
    width = width || image.width
    height = height || image.height
    x -= pivotX * width
    y -= pivotY * height
    this.instance.drawImage(image, x, y, width, height)
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
