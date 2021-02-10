import React, { FC, memo, ReactNode, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type TModalBackdropProps = {
  children: ReactNode
}

const ModalBackdrop: FC<TModalBackdropProps> = memo(
  ({ children }: TModalBackdropProps) => {
    const [container] = useState(document.createElement('div'))
    container.classList.add('fixed', 'z-40', 'inset-0', 'overflow-y-auto')

    useEffect(() => {
      document.body.appendChild(container)

      return () => {
        document.body.removeChild(container)
      }
    }, [])

    return createPortal(
      <>
        <div className="relative z-50 w-full h-full flex justify-center items-center px-3">
          {children}
        </div>
        <div className="fixed inset-0 bg-black opacity-80" />
      </>,
      container
    )
  }
)

ModalBackdrop.displayName = 'ModalBackdrop'

export default ModalBackdrop
