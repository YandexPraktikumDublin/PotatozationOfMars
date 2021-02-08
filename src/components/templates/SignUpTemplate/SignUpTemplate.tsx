import React, { FC, memo } from 'react'
import { Popup, FormLink } from '@components/atoms'
import { BaseForm, BaseInput, Title } from '@components/organisms'

type TSignUpTemplateProps = {
  title: string
  text: string
  path: string
}

const SignUpTemplate: FC<TSignUpTemplateProps> = memo(
  ({ title, text, path }: TSignUpTemplateProps) => {
    return (
      <div className="flex-grow max-w-xs">
        <Popup>
          <Title title={title} />
          <BaseForm>
            <BaseInput type="email" name="email" placeholder="Email" />
            <BaseInput type="text" name="login" placeholder="Login" />
            <BaseInput type="text" name="firstName" placeholder="First name" />
            <BaseInput type="text" name="lastName" placeholder="Last name" />
            <BaseInput type="phone" name="phone" placeholder="Phone" />
            <BaseInput type="password" name="password" placeholder="Password" />
          </BaseForm>
          <FormLink text={text} path={path} />
        </Popup>
      </div>
    )
  }
)

SignUpTemplate.displayName = 'SignUpTemplate'

export default SignUpTemplate
