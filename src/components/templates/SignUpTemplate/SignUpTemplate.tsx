import React, { FC, memo } from 'react'
import { FormLink } from '@components/atoms'
import { PATHS } from '@config'
import { Window, Title, SignUpForm } from '@components/organisms'

type TSignUpTemplateProps = {
  title: string
}

const SignUpTemplate: FC<TSignUpTemplateProps> = memo(
  ({ title }: TSignUpTemplateProps) => {
    return (
      <div className="flex-grow max-w-xs">
        <Window>
          <Title>{title}</Title>
          <SignUpForm />
          <FormLink text="Already have an account?" path={PATHS.AUTH} />
        </Window>
      </div>
    )
  }
)

SignUpTemplate.displayName = 'SignUpTemplate'

export default SignUpTemplate
