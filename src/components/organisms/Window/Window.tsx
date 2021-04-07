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
          'text-center border border-primary rounded-3xl py-6 pl-6 bg-white bg-opacity-40',
          'dark:text-white dark:border-white dark:bg-primary dark:bg-opacity-40',
          {
            'h-screen overflow-hidden': isFullHeight
          }
        )}
        style={wrapperStyle}
      >
        <div className="overflow-y-auto pr-6 h-full">{children}</div>
      </div>
    )
  }
)

Window.displayName = 'Window'

export default Window
