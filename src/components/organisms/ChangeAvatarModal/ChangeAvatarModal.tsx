import React, { FC, memo } from 'react'
import { ChangeAvatarForm, Modal, Title } from '@components/organisms'

type TChangeAvatarModalProps = {
  toggleModal: () => void
}

const ChangeAvatarModal: FC<TChangeAvatarModalProps> = memo(
  ({ toggleModal }: TChangeAvatarModalProps) => (
    <Modal toggleModal={toggleModal}>
      <Title>Upload avatar</Title>
      <ChangeAvatarForm successCallback={toggleModal} />
    </Modal>
  )
)

ChangeAvatarModal.displayName = 'ChangeAvatarModal'

export default ChangeAvatarModal
