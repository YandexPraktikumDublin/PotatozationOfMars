import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TActionsListItemProps = {
  name: string
  value?: string | number
  onClick: () => void
}

const ActionsListItem: FC<TActionsListItemProps> = memo(
  ({ name, value, onClick }: TActionsListItemProps) => (
    <li
      className={classNames(
        'border-b border-primary mb-4 last:mb-0',
        'dark:border-white'
      )}
    >
      <button
        className="flex justify-between w-full text-left"
        onClick={onClick}
      >
        <span>{name}</span>
        <span>{value}</span>
      </button>
    </li>
  )
)

ActionsListItem.displayName = 'ActionsListItem'

export default ActionsListItem
