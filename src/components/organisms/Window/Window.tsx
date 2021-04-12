import React, { FC, memo, ReactNode, useMemo } from 'react'
import classNames from 'classnames'

type TWindowProps = {
  children: ReactNode
  isFullHeight?: boolean
}

const Window: FC<TWindowProps> = memo(
  ({ children, isFullHeight = false }: TWindowProps) => {
    const wrapperStyle = useMemo(
      () => ({ maxHeight: isFullHeight ? 'calc(100vh - 7rem)' : 'none' }),
      [isFullHeight]
    )

    return (
      <div
        className={classNames(
          'relative text-center border border-primary rounded-3xl py-6 pl-6',
          'dark:text-white dark:border-white',
          {
            'h-screen overflow-hidden': isFullHeight
          }
        )}
        style={wrapperStyle}
      >
        <div className="absolute inset-0 z-0 bg-white rounded-3xl opacity-40 dark:bg-primary" />
        <div className="overflow-y-auto relative pr-6 h-full">{children}</div>
      </div>
    )
  }
)

Window.displayName = 'Window'

export default Window
