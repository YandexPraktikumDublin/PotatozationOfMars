import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TNameValueListItemProps = {
  name: string
  value?: string | number
}

const NameValueListItem: FC<TNameValueListItemProps> = memo(
  ({ name, value }: TNameValueListItemProps) => (
    <li
      className={classNames(
        'flex justify-between border-b border-primary mb-4 last:mb-0',
        'dark:border-white'
      )}
    >
      <span>{name}</span>
      <span>{value}</span>
    </li>
  )
)

NameValueListItem.displayName = 'NameValueListItem'

export default NameValueListItem
