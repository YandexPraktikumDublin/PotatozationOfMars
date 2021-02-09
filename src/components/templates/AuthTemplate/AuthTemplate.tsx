import React, { FC, memo } from 'react'
import { FormLink } from '@components/atoms'
import { PATHS } from '@config'
import { Window, Title, AuthForm } from '@components/organisms'

type TAuthTemplateProps = {
  title: string
}

const AuthTemplate: FC<TAuthTemplateProps> = memo(
  ({ title }: TAuthTemplateProps) => (
    <div className="w-full max-w-xs">
      <Window>
        <Title>{title}</Title>
        <AuthForm />
        <FormLink path={PATHS.SIGNUP} className="inline-block mt-4">
          Sign up
        </FormLink>
      </Window>
    </div>
  )
)

AuthTemplate.displayName = 'AuthTemplate'

export default AuthTemplate
