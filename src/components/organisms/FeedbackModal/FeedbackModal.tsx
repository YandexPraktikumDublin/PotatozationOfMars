import React, { FC, memo } from 'react'
import { FeedbackForm, Modal, Title } from '@components/organisms'

type TFeedbackModalProps = {
  toggleModal: () => void
}

const FeedbackModal: FC<TFeedbackModalProps> = memo(
  ({ toggleModal }: TFeedbackModalProps) => (
    <Modal toggleModal={toggleModal}>
      <Title>Feedback</Title>
      <FeedbackForm />
    </Modal>
  )
)

FeedbackModal.displayName = 'FeedbackModal'

export default FeedbackModal
