import React, { FC, memo, MouseEvent } from 'react'
import classNames from 'classnames'

type TCloseButtonProps = {
  onClick: (event: MouseEvent<HTMLElement>) => void
  className?: string
}

const CloseButton: FC<TCloseButtonProps> = memo(
  ({ onClick, className }: TCloseButtonProps) => (
    <button className={className} onClick={onClick}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.456 10.014l8.22-8.175a.99.99 0 000-1.41 1.013 1.013 0 00-1.425 0l-8.213 8.167L1.749.306a1.006 1.006 0 00-1.424 0 1.013 1.013 0 000 1.43l8.282 8.283-8.312 8.267a.991.991 0 000 1.41c.393.39 1.031.39 1.424 0l8.306-8.26 8.256 8.257a1.006 1.006 0 001.424 0 1.013 1.013 0 000-1.428l-8.25-8.251z"
          className={classNames('fill-primary', 'dark:fill-white')}
        />
      </svg>
    </button>
  )
)

CloseButton.displayName = 'CloseButton'

export default CloseButton
