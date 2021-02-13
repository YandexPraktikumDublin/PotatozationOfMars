import React, { FC, memo, ReactNode, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

type TModalBackdropProps = {
  children: ReactNode
}

const ModalBackdrop: FC<TModalBackdropProps> = memo(
  ({ children }: TModalBackdropProps) => {
    const container = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
      container.classList.add('fixed', 'z-40', 'inset-0', 'overflow-y-auto')
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
