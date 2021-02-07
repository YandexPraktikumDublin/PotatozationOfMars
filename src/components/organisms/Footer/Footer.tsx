import React, { FC, memo } from 'react'
import { Navigation } from '@components/organisms'
import { NavigationButton } from '@components/molecules'
import { feedback } from '@images'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => {
  const feedbackButtonClick = () => {}

  return (
    <footer className="relative mt-auto mb-0 p-4">
      <Navigation>
        <NavigationButton
          title="Feedback"
          onClick={feedbackButtonClick}
          imageSrc={feedback}
        />
      </Navigation>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
