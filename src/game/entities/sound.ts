class Sound {
  sound: HTMLAudioElement
  initialVolume: number
  isPlaying: boolean
  constructor(
    src: string,
    options?: {
      initialVolume?: number
    }
  ) {
    this.sound = new Audio(src)
    this.initialVolume = options?.initialVolume ?? 0.3
    this.isPlaying = false
  }

  setVolume = (volume: number) => {
    this.sound.volume =
      this.initialVolume > 1 ? volume : volume * this.initialVolume
    return this
  }

  play = (volume: number = 0.1) => {
    this.setVolume(volume)
    this.isPlaying = true
    this.sound.currentTime = 0
    this.sound.play().catch(() => {
      this.isPlaying = false
    })
    return this
  }

  pause = () => {
    if (!this.isPlaying) return this
    this.sound.pause()
    this.isPlaying = false
    return this
  }

  unpause = () => {
    if (this.isPlaying) return this
    this.isPlaying = true
    this.sound.play().catch(() => {
      this.isPlaying = false
    })
    return this
  }

  stop = () => {
    this.sound.pause()
    this.sound.currentTime = 0
    return this
  }

  next = (callback: (...arr: Array<any>) => void, ...arr: Array<any>) => {
    this.sound.onended = () => {
      callback(arr)
    }
    return this
  }
}

export default Sound
