import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TAddButtonProps = {
  onClick: () => void
  className?: string
}

const AddButton: FC<TAddButtonProps> = memo(
  ({ onClick, className = '' }: TAddButtonProps) => (
    <button className={className} onClick={onClick}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          className={classNames('fill-primary', 'dark:fill-white')}
          d="M10 .43C4.723.43.43 4.723.43 10s4.293 9.57 9.57 9.57 9.57-4.293 9.57-9.57S15.277.43 10 .43zm0 17.547c-4.398 0-7.977-3.579-7.977-7.977S5.602 2.023 10 2.023 17.977 5.602 17.977 10 14.398 17.977 10 17.977z"
        />
        <path
          className={classNames('fill-primary', 'dark:fill-white')}
          d="M13.969 9.203h-3.172V6.031A.795.795 0 0010 5.234a.795.795 0 00-.797.797v3.172H6.031a.795.795 0 00-.797.797c0 .441.356.797.797.797h3.172v3.172c0 .441.356.797.797.797a.795.795 0 00.797-.797v-3.172h3.172a.795.795 0 00.797-.797.795.795 0 00-.797-.797z"
        />
      </svg>
    </button>
  )
)

AddButton.displayName = 'AddButton'

export default AddButton
