import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TEditButtonProps = {
  onClick: () => void
  className?: string
}

const EditButton: FC<TEditButtonProps> = memo(
  ({ onClick, className = '' }: TEditButtonProps) => (
    <button className={className} onClick={onClick}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <g className={classNames('fill-primary', 'dark:fill-white')}>
          <path d="M12.652 3.072L15.724 0 20 4.275l-3.072 3.073-4.276-4.276zM0 20l5.264-1.514-3.75-3.75L0 20zM6.477 17.799L2.2 13.523l9.501-9.5 4.276 4.275-9.501 9.5z" />
        </g>
      </svg>
    </button>
  )
)

EditButton.displayName = 'EditButton'

export default EditButton
