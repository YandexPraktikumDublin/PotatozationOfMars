import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TActionsListItemProps = {
  name: string
  onClick: () => void
}

const ActionsListItem: FC<TActionsListItemProps> = memo(
  ({ name, onClick }: TActionsListItemProps) => (
    <li
      className={classNames(
        'border-b border-primary mb-4 last:mb-0',
        'dark:border-white'
      )}
    >
      <button className="w-full text-left" onClick={onClick}>
        {name}
      </button>
    </li>
  )
)

ActionsListItem.displayName = 'ActionsListItem'

export default ActionsListItem
