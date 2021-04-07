import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type TWindowProps = {
  children: ReactNode
  isFullHeight?: boolean
}

const Window: FC<TWindowProps> = memo(
  ({ children, isFullHeight = false }: TWindowProps) => {
    return (
      <div
        className={classNames(
          'text-center border border-primary rounded-3xl py-6 pl-6 bg-white bg-opacity-40',
          'dark:text-white dark:border-white dark:bg-primary dark:bg-opacity-40',
          {
            'h-screen overflow-hidden': isFullHeight
          }
        )}
        style={{ maxHeight: isFullHeight ? 'calc(100vh - 7rem)' : 'none' }}
      >
        <div className="overflow-y-auto pr-6 h-full">{children}</div>
      </div>
    )
  }
)

Window.displayName = 'Window'

export default Window
