import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TPopupProps = {}

const Popup: FC<TPopupProps> = memo((props) => {
  return (
    <div
      className={classNames(
        'm-auto min-w-320 min-h-296 border-2 border-gray-200 rounded-3xl p-8 bg-white bg-opacity-40',
        'dark:text-white dark:border-white dark:bg-gray dark:bg-opacity-40'
      )}
    >
      {props.children}
    </div>
  )
})

Popup.displayName = 'Popup'

export default Popup
