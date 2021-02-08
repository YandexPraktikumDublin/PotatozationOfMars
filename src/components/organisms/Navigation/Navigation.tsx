import React, { FC, memo, ReactNode } from 'react'

type TNavigationProps = {
  children: ReactNode
}

const Navigation: FC<TNavigationProps> = memo(
  ({ children }: TNavigationProps) => (
    <nav className="flex items-center justify-end gap-x-4">{children}</nav>
  )
)

Navigation.displayName = 'Navigation'

export default Navigation
