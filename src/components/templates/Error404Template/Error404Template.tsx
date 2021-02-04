import React, { FC, memo } from 'react'

export type TError404TemplateProps = {
  testContent: string
}

export const Error404Template: FC<TError404TemplateProps> = memo(
  ({ testContent }: TError404TemplateProps) => <></>
)

Error404Template.displayName = 'Error404Template'

export default Error404Template
