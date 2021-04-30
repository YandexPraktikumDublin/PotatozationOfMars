import { Sound } from '@game/entities'
import { soundtrack1 } from '@game/sound'

class ContextController {
  instance: CanvasRenderingContext2D
  canvas: HTMLCanvasElement
  soundVolume: number
  musicVolume: number
  soundTrack: Array<Sound>
  currentSoundtrack?: Sound
  coefficient: { cx: number; cy: number }
  center: { ox: number; oy: number }
  constructor(canvas: HTMLCanvasElement, width = 2000, height = 1000) {
    this.instance = canvas.getContext('2d') as CanvasRenderingContext2D
    this.canvas = canvas
    this.canvas.width = width
    this.canvas.height = height
    this.soundVolume = 0.1
    this.musicVolume = 0.5
    this.soundTrack = [new Sound(soundtrack1)]
    this.center = { ox: width / 2, oy: height / 2 }
    this.coefficient = { cx: 1, cy: 1 }
  }

  startSoundTrack = (sound?: Sound) => {
    const randomSoundIndex = Math.floor(Math.random() * this.soundTrack.length)
    this.currentSoundtrack?.stop()
    const nextSoundTrack = sound ?? this.soundTrack[randomSoundIndex]
    this.currentSoundtrack = nextSoundTrack
      .play(this.soundVolume * this.musicVolume)
      .rewind()
      .next(this.startSoundTrack)
  }

  pauseSoundtrack = () => {
    this.currentSoundtrack?.pause()
  }

  unpauseSoundtrack = () => {
    this.currentSoundtrack?.unpause()
  }

  stopSoundtrack = () => {
    this.currentSoundtrack?.stop()
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

  translateContext = (
    x: number,
    y: number,
    angle: number,
    pivotX: number,
    pivotY: number,
    width = 0,
    height = 0
  ) => {
    const context = this.instance
    const { ox, oy } = this.center
    const offsetX = pivotX * width
    const offsetY = pivotY * height

    context.translate(Math.round(x + ox), Math.round(y + oy))
    context.rotate(angle * Math.PI)
    context.translate(Math.round(-offsetX), Math.round(-offsetY))
  }

  drawText = (
    text: string,
    x = 0,
    y = 0,
    options: {
      fontSize?: number
      maxWidth?: number
      angle?: number
      pivotX?: number
      pivotY?: number
      opacity?: number
      color?: string
    } = {}
  ) => {
    const context = this.instance
    const fontSize = options.fontSize ?? 40
    const maxWidth = options.maxWidth ?? context.canvas.width
    const pivotX = options.pivotX ?? 0.5
    const pivotY = options.pivotY ?? 0.5
    const angle = options.angle ?? 0
    const opacity = options.opacity ?? 1
    const color =
      options.color && /^#[0-9A-F]{6}$/i.test(options.color)
        ? options.color
        : '#ffffff'

    context.save()

    this.translateContext(x, y, angle, pivotX, pivotY, 0, 0)

    context.font = `${fontSize}px serif`
    context.globalAlpha = opacity
    context.fillStyle = color
    context.textAlign = 'center'

    context.fillText(text, 0, 0, maxWidth)

    context.restore()
  }

  drawRectangle = (
    x: number,
    y: number,
    options: {
      width?: number
      height?: number
      angle?: number
      pivotX?: number
      pivotY?: number
      opacity?: number
      color?: string
      type?: 'stroke' | 'fill'
    }
  ) => {
    const context = this.instance

    const width = options.width ?? 0
    const height = options.height ?? options.width ?? 0
    const pivotX = options.pivotX ?? 0.5
    const pivotY = options.pivotY ?? 0.5
    const angle = options.angle ?? 0
    const opacity = options.opacity ?? 1
    const type = options.type ?? 'fill'
    const color =
      options.color && /^#[0-9A-F]{6}$/i.test(options.color)
        ? options.color
        : '#000000'

    context.save()

    this.translateContext(x, y, angle, pivotX, pivotY, width, height)

    context.globalAlpha = opacity
    context.fillStyle = color

    if (type === 'stroke') {
      context.strokeRect(0, 0, Math.round(width), Math.round(height))
      context.restore()
      return
    }

    context.fillRect(0, 0, Math.round(width), Math.round(height))
    context.restore()
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
      opacity?: number
    }
  ) => {
    const context = this.instance

    const imageWidth = options.width ?? image.width
    const imageHeight = options.height ?? options.width ?? image.height
    const pivotX = options.pivotX ?? 0.5
    const pivotY = options.pivotY ?? 0.5
    const angle = options.angle ?? 0
    const opacity = options.opacity ?? 1

    context.save()

    this.translateContext(x, y, angle, pivotX, pivotY, imageWidth, imageHeight)

    context.globalAlpha = opacity

    context.drawImage(
      image,
      0,
      0,
      Math.round(imageWidth),
      Math.round(imageHeight)
    )

    context.restore()
  }

  fillFrame = (color: string) => {
    this.instance.fillStyle = color
    this.instance.fillRect(
      0,
      0,
      this.instance.canvas.width,
      this.instance.canvas.height
    )
  }

  clearFrame = () => {
    this.instance.clearRect(
      0,
      0,
      this.instance.canvas.width,
      this.instance.canvas.height
    )
  }
}

export default ContextController
