import React, { FC, memo, MouseEvent } from 'react'
import classNames from 'classnames'

type TCloseButtonProps = {
  onClick: (event: MouseEvent<HTMLElement>) => void
  className?: string
}

const CloseButton: FC<TCloseButtonProps> = memo(
  ({ onClick, className }: TCloseButtonProps) => (
    <button className={className} onClick={onClick}>
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path
          className={classNames('fill-primary', 'dark:fill-white')}
          d="M21 21L1 1M21 1L1 21"
          strokeWidth="2"
        />
      </svg>
    </button>
  )
)

CloseButton.displayName = 'CloseButton'

export default CloseButton
