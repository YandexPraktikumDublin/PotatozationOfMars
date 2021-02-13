import React, { FC, memo, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

type TFormLinkProps = {
  children: ReactNode
  path: string
  className?: string
}

const FormLink: FC<TFormLinkProps> = memo(
  ({ children, path, className = '' }: TFormLinkProps) => {
    return (
      <Link className={classNames('underline', className)} to={path}>
        {children}
      </Link>
    )
  }
)

FormLink.displayName = 'FormLink'

export default FormLink
