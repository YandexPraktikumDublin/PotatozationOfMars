import React, { FC, memo } from 'react'
import { FormLink } from '@components/atoms'
import { PATHS } from '@config'
import { Window, Title, AuthForm } from '@components/organisms'

type TAuthTemplateProps = {}

const AuthTemplate: FC<TAuthTemplateProps> = memo(() => (
  <div className="w-full max-w-xs">
    <Window>
      <Title>Log in</Title>
      <AuthForm />
      <FormLink path={PATHS.SIGNUP} className="inline-block">
        Sign up
      </FormLink>
    </Window>
  </div>
))

AuthTemplate.displayName = 'AuthTemplate'

export default AuthTemplate
