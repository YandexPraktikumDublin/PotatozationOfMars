import React, { FC, memo, ReactNode } from 'react'

type TListProps = {
  children: ReactNode
  className?: string
}

const List: FC<TListProps> = memo(({ children, className }: TListProps) => (
  <ul className={className}>{children}</ul>
))

List.displayName = 'List'

export default List
