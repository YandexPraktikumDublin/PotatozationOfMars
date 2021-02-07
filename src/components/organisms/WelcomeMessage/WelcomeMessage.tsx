import React, { FC, memo, useState, useEffect } from 'react'
// import { musk, text } from '@images'

type TWelcomeMessageProps = {}

const WelcomeMessage: FC<TWelcomeMessageProps> = memo(() => {
  const portraitText = `Hi! Welcome to the Potatization 
    of Mars. Oh, wait, you can't see me! Turn the screen :)`
  const landscapeText = `You think I launched Tesla into 
    space as a joke? No way, it's a secret potatozation 
    of Mars project. Click any button to help me.`
  const [text, setText] = useState('')

  const resizeHandler = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      setText(portraitText)
    }
    if (window.matchMedia('(orientation: landscape)').matches) {
      setText(landscapeText)
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
    <p className="m-auto w-72 text-center text-3xl portrait:text-2xl sm:text-xs md:text-sm lg:text-2xl md:w-36 sm:w-36">
      {text}
    </p>
  )
})

WelcomeMessage.displayName = 'WelcomeMessage'

export default WelcomeMessage
