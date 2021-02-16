import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TBackButtonProps = {
  onClick: () => void
  className?: string
}

const BackButton: FC<TBackButtonProps> = memo(
  ({ onClick, className = '' }: TBackButtonProps) => (
    <button className={className} onClick={onClick}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          className={classNames('fill-primary', 'dark:fill-white')}
          d="M19.377 9.44H2.042l5.186-5.166a.622.622 0 10-.881-.881L.18 9.559a.63.63 0 000 .881l6.167 6.167a.622.622 0 10.88-.88l-5.185-5.041h17.335a.623.623 0 000-1.246z"
        />
      </svg>
    </button>
  )
)

BackButton.displayName = 'BackButton'

export default BackButton
