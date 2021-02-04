import React, { FC, memo } from 'react'

export type TError500TemplateProps = {
  testContent: string
}

export const Error500Template: FC<TError500TemplateProps> = memo(
  ({ testContent }: TError500TemplateProps) => <></>
)

Error500Template.displayName = 'Error500Template'

export default Error500Template
