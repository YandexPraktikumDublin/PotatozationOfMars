import React, { FC, memo } from 'react'

export type TAuthTemplateProps = {
  testContent: string
}

export const AuthTemplate: FC<TAuthTemplateProps> = memo(
  ({ testContent }: TAuthTemplateProps) => <></>
)

AuthTemplate.displayName = 'AuthTemplate'
