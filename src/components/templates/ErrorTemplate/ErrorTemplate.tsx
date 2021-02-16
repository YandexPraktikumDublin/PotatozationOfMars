import React, { FC, memo } from 'react'
import { Title } from '@components/organisms'

type TErrorTemplateProps = {
  title: string
}

const ErrorTemplate: FC<TErrorTemplateProps> = memo(({ title }) => (
  <Title>{title}</Title>
))

ErrorTemplate.displayName = 'ErrorTemplate'

export default ErrorTemplate
