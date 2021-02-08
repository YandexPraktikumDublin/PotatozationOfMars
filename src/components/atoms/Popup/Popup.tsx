import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TPopupProps = {}

const Popup: FC<TPopupProps> = memo((props) => {
  return (
    <div
      className={classNames(
        'm-auto text-center border-2 border-primary rounded-3xl p-6 bg-white bg-opacity-40',
        'dark:text-white dark:border-white dark:bg-gray dark:bg-opacity-40'
      )}
    >
      {props.children}
    </div>
  )
})

Popup.displayName = 'Popup'

export default Popup
