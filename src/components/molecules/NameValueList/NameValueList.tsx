import React, { FC, memo, ReactNode } from 'react'

type TNameValueListProps = {
  children: ReactNode
}

const NameValueList: FC<TNameValueListProps> = memo(
  ({ children }: TNameValueListProps) => <ul>{children}</ul>
)

NameValueList.displayName = 'NameValueList'

export default NameValueList
