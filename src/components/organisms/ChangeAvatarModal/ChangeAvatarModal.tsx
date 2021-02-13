import React, { FC, memo } from 'react'
import { ChangeAvatarForm, Modal, Title } from '@components/organisms'

type TChangeAvatarModalProps = {
  toggleModal: () => void
  onSuccessAvatarUpdate: () => void
}

const ChangeAvatarModal: FC<TChangeAvatarModalProps> = memo(
  ({ toggleModal, onSuccessAvatarUpdate }: TChangeAvatarModalProps) => (
    <Modal toggleModal={toggleModal}>
      <Title>Upload avatar</Title>
      <ChangeAvatarForm
        successCallback={() => {
          toggleModal()
          onSuccessAvatarUpdate()
        }}
      />
    </Modal>
  )
)

ChangeAvatarModal.displayName = 'ChangeAvatarModal'

export default ChangeAvatarModal
