import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TWindowProps = {}

const Window: FC<TWindowProps> = memo((props) => {
  return (
    <div
      className={classNames(
        'text-center border border-primary rounded-3xl p-6 bg-white bg-opacity-40',
        'dark:text-white dark:border-white dark:bg-primary'
      )}
    >
      {props.children}
    </div>
  )
})

Window.displayName = 'Window'

export default Window
