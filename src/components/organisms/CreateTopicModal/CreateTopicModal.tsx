import React, { FC, memo } from 'react'
import { CreateTopicForm, Modal, Title } from '@components/organisms'

type TCreateTopicModalProps = {
  toggleModal: () => void
}

const CreateTopicModal: FC<TCreateTopicModalProps> = memo(
  ({ toggleModal }: TCreateTopicModalProps) => (
    <Modal toggleModal={toggleModal}>
      <Title>New topic</Title>
      <CreateTopicForm />
    </Modal>
  )
)

CreateTopicModal.displayName = 'CreateTopicModal'

export default CreateTopicModal
