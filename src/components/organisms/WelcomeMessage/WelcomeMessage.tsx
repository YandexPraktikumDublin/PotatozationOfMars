import React, { FC, memo } from 'react'
import { musk, text } from '@images'

type TWelcomeMessageProps = {}

const WelcomeMessage: FC<TWelcomeMessageProps> = memo(() => (
  <div className="flex">
    <img className="" src={text} alt="Hi" />
    <img className="" src={musk} alt="Elon Musk" />
  </div>
))

WelcomeMessage.displayName = 'WelcomeMessage'

export default WelcomeMessage
