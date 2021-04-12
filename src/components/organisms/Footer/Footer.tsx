import React, { FC, memo, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { FeedbackModal, Navigation } from '@components/organisms'
import { NavigationButton } from '@components/molecules'
import { useToggle } from '@hooks'
import { getFeedbackSelector } from '@store/feedback/createFeedback/selectors'
import { feedback as feedbackIcon } from '@images'
import { PATHS } from '@config'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => {
  const location = useLocation()

  const [isShownFeedbackModal, toggleFeedbackModal] = useToggle(false)

  const feedback = useSelector(getFeedbackSelector)

  useEffect(() => {
    if (isShownFeedbackModal) {
      toggleFeedbackModal()
    }
  }, [feedback])

  const isShownFeedbackButton =
    location.pathname !== PATHS.BASE && location.pathname !== PATHS.GAME

  return (
    <footer className="mt-auto mb-0 p-4">
      <Navigation>
        {isShownFeedbackButton && (
          <NavigationButton
            title="Feedback"
            onClick={toggleFeedbackModal}
            imageSrc={feedbackIcon}
          />
        )}
      </Navigation>

      {isShownFeedbackModal && (
        <FeedbackModal toggleModal={toggleFeedbackModal} />
      )}
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
