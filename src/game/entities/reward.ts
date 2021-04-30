import { crystal10 } from '@images'
import { ContextController, GameClock } from '@game/controllers'
import { Entity, Sound } from '@game/entities'

class Reward extends Entity {
  constructor(killCallback = () => {}, velocity = 2, size = 60) {
    super(killCallback, velocity, size, crystal10, 1)
    this.damage = 0
  }

  init = (
    clock: GameClock,
    context: ContextController,
    options?: { soundURL?: Array<string>; imageURL?: string }
  ) => {
    const { soundURL, imageURL } = options ?? {}
    this.image.src = imageURL ?? this.image.src
    const sounds: Array<Sound> = []
    soundURL?.forEach((sound) => {
      sounds.push(new Sound(sound))
    })
    this.deathAnimation = () => {
      if (sounds.length !== 0) {
        const randomSoundIndex = Math.floor(Math.random() * sounds.length)
        sounds[randomSoundIndex].stop()
        sounds[randomSoundIndex].play(context.soundVolume)
      }
    }
    const { height } = context.getSize()
    const { ox, oy } = context.center
    this.isAlive = true
    const x = 0 - ox
    const y = Math.random() * height - oy
    this.moveTo(x - this.size, y - this.size)
    this.render(clock, this.move)
  }

  protected move = (context: ContextController) => {
    this.velocity.defineByDirection(this.destination, this.position)
    this.position = this.velocity.applyTo(this.position)
    if (this.isAtDestination()) {
      this.killCallback = () => {}
      this.delete()
      return
    }
    context.drawImage(this.image, this.position.x, this.position.y, {
      width: this.size / 2
    })
  }
}

export default Reward
