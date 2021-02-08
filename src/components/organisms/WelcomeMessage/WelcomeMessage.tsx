import React, { FC, memo, useState, useEffect } from 'react'
import classNames from 'classnames'

type TWelcomeMessageProps = {}

const WelcomeMessage: FC<TWelcomeMessageProps> = memo(() => {
  const [isPortrait, setIsPortrait] = useState(true)
  const portraitText = `Hi! Welcome to the Potatization 
    of Mars. Oh, wait, you can't see me! Turn the screen :)`
  const landscapeText = `You think I launched Tesla into 
    space as a joke? No way, it's a secret potatozation 
    of Mars project. Click any button to help me.`

  const resizeHandler = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      setIsPortrait(true)
    }
    if (window.matchMedia('(orientation: landscape)').matches) {
      setIsPortrait(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <p
      className={classNames(
        'm-auto w-64 text-center',
        isPortrait
          ? `text-3xl sm:w-30 sm:text-xxs portrait:text-base`
          : `text-2xl
        lg:w-80 lg:text-xl
        md:w-40 md:text-xs
        middle:w-40 middle:text-xxs 
        sm:w-32 sm:text-xxs`
      )}
    >
      {isPortrait ? portraitText : landscapeText}
    </p>
  )
})

WelcomeMessage.displayName = 'WelcomeMessage'

export default WelcomeMessage
