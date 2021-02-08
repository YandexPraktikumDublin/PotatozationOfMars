import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

type TFormLinkProps = {
  children: string
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
