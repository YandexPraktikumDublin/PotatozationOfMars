import React, { FC, memo } from 'react'
import { FormLink } from '@components/atoms'
import * as Yup from 'yup'
import { PATHS } from '@config'
import { Window, BaseForm, BaseInput, Title } from '@components/organisms'

type TSignUpTemplateProps = {
  title: string
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required')
})

const initialValues = {
  email: '',
  login: '',
  firstName: '',
  lastName: '',
  phone: '',
  password: ''
}

const SignUpTemplate: FC<TSignUpTemplateProps> = memo(
  ({ title }: TSignUpTemplateProps) => {
    return (
      <div className="flex-grow max-w-xs">
        <Window>
          <Title>{title}</Title>
          <BaseForm
            validate={SignupSchema}
            initialValues={initialValues}
            textButton="Sign up"
          >
            <BaseInput type="email" name="email" placeholder="Email" />
            <BaseInput type="text" name="login" placeholder="Login" />
            <BaseInput type="text" name="firstName" placeholder="First name" />
            <BaseInput type="text" name="lastName" placeholder="Last name" />
            <BaseInput type="phone" name="phone" placeholder="Phone" />
            <BaseInput type="password" name="password" placeholder="Password" />
          </BaseForm>
          <FormLink text="Already have an account?" path={PATHS.AUTH} />
        </Window>
      </div>
    )
  }
)

SignUpTemplate.displayName = 'SignUpTemplate'

export default SignUpTemplate
