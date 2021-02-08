import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'

type TFormLinkProps = {
  text: string
  path: string
}

const FormLink: FC<TFormLinkProps> = memo(({ text, path }: TFormLinkProps) => {
  return (
    <Link className="underline" to={path}>
      {text}
    </Link>
  )
})

FormLink.displayName = 'FormLink'

export default FormLink
