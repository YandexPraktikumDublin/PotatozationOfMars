import React, { FC, memo, useCallback, useEffect } from 'react'
import { musk, bubble } from '@images'
import { useWindowSize } from '@hooks'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TWelcomeMessageProps = {}

const portraitText =
  'Hi! Welcome to the Potatization of Mars. Oh, wait, you can`t see me! Turn the screen :)'
const landscapeText =
  'You think I launched Tesla into space as a joke? No way, it`s a secret potatozation of Mars project. Click any button to help me.'

const WelcomeMessage: FC<TWelcomeMessageProps> = memo(() => {
  const history = useHistory()
  const windowSize = useWindowSize()

  const isNotMobile = windowSize.width > 768
  const isPortraitOrientation = windowSize.height > windowSize.width

  const startGame = useCallback(() => {
    history.push(PATHS.GAME)
  }, [history])

  useEffect(() => {
    document.addEventListener('keypress', startGame)

    return () => {
      document.removeEventListener('keypress', startGame)
    }
  }, [])

  return (
    <div
      className="fixed bottom-0 max-w-full w-[44rem] h-[30.625rem] right-[3.5625rem]"
      style={{ maxHeight: 'calc(100vh - 4.5rem)' }}
      onTouchStart={startGame}
    >
      <div
        className="flex absolute top-0 z-10 px-14 text-center bg-no-repeat bg-contain w-[25rem] h-[18.75rem] md:left-0 left-[3.5625rem]"
        style={{ backgroundImage: `url(${bubble})` }}
      >
        <div className="m-auto font-bold">
          {isPortraitOrientation ? portraitText : landscapeText}
        </div>
      </div>

      <img
        src={musk}
        className={classNames('absolute bottom-0 z-auto h-full w-auto', {
          'transform translate-x-1/2': isPortraitOrientation
        })}
        alt="Elon Musk"
        style={{
          right: !isPortraitOrientation || isNotMobile ? '0' : '-3.5625rem'
        }}
      />
    </div>
  )
})

WelcomeMessage.displayName = 'WelcomeMessage'

export default WelcomeMessage
