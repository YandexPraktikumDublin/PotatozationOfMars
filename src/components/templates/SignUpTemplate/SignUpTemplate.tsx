import React, { FC, memo } from 'react'
import { FormLink } from '@components/atoms'
import { PATHS } from '@config'
import { Window, Title, SignUpForm } from '@components/organisms'

type TSignUpTemplateProps = {
  title: string
}

const SignUpTemplate: FC<TSignUpTemplateProps> = memo(
  ({ title }: TSignUpTemplateProps) => (
    <div className="w-full max-w-xs">
      <Window>
        <Title>{title}</Title>
        <SignUpForm />
        <FormLink path={PATHS.AUTH} className="inline-block mt-4">
          Already have an account?
        </FormLink>
      </Window>
    </div>
  )
)

SignUpTemplate.displayName = 'SignUpTemplate'

export default SignUpTemplate
