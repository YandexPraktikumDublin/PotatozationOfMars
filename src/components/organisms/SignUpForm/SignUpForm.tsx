import React, { FC, memo } from 'react'
import { BaseForm, BaseInput } from '@components/organisms'
import * as Yup from 'yup'
import { onSubmitSignUp } from './SignUpController'

type TSignUpFormProps = {}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  second_name: Yup.string()
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
  first_name: '',
  second_name: '',
  phone: '',
  password: ''
}

const SignUpForm: FC<TSignUpFormProps> = memo(() => {
  return (
    <BaseForm
      schema={SignupSchema}
      initialValues={initialValues}
      onSubmit={onSubmitSignUp}
      textButton="Sign up"
    >
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="text" name="first_name" placeholder="First name" />
      <BaseInput type="text" name="second_name" placeholder="Last name" />
      <BaseInput type="phone" name="phone" placeholder="Phone" />
      <BaseInput type="password" name="password" placeholder="Password" />
    </BaseForm>
  )
})

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
