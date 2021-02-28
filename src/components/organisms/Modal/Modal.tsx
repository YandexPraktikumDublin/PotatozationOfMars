import React, { FC, memo, ReactNode } from 'react'
import { CloseButton } from '@components/atoms'
import { ModalBackdrop } from '@components/organisms'
import classNames from 'classnames'

type TModalProps = {
  children: ReactNode
  toggleModal: () => void
}

const Modal: FC<TModalProps> = memo(
  ({ children, toggleModal }: TModalProps) => (
    <ModalBackdrop>
      <div
        className={classNames(
          'flex flex-col w-full max-w-md relative text-center border border-primary rounded-3xl p-6 bg-white',
          'dark:text-white dark:border-white dark:bg-primary'
        )}
      >
        <CloseButton
          onClick={toggleModal}
          className="absolute top-4 right-4 z-10"
        />
        {children}
      </div>
    </ModalBackdrop>
  )
)

Modal.displayName = 'Modal'

export default Modal
