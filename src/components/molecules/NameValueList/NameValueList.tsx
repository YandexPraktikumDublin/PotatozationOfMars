import React, { FC, memo, ReactNode } from 'react'

type TNameValueListProps = {
  children: ReactNode
  className?: string
}

const NameValueList: FC<TNameValueListProps> = memo(
  ({ children, className }: TNameValueListProps) => (
    <ul className={className}>{children}</ul>
  )
)

NameValueList.displayName = 'NameValueList'

export default NameValueList
