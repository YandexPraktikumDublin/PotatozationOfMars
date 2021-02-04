import React, { FC, memo } from 'react'

export type TSignUpTemplateProps = {
  testContent: string
}

export const SignUpTemplate: FC<TSignUpTemplateProps> = memo(
  ({ testContent }: TSignUpTemplateProps) => <></>
)

SignUpTemplate.displayName = 'SignUpTemplate'

export default SignUpTemplate
