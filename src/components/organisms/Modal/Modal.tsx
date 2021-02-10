import React, { FC, memo, ReactNode } from 'react'
import { CloseButton } from '@components/atoms'
import { ModalBackdrop } from '@components/organisms'

type TModalProps = {
  children: ReactNode
  toggleModal: () => void
}

const Modal: FC<TModalProps> = memo(
  ({ children, toggleModal }: TModalProps) => (
    <ModalBackdrop>
      <div className="relative bg-white rounded-lg shadow-2xl w-full m-auto overflow-hidden animate-flip-in-x">
        <CloseButton onClick={toggleModal} className="absolute top-6 right-6" />
        {children}
      </div>
    </ModalBackdrop>
  )
)

Modal.displayName = 'Modal'

export default Modal
