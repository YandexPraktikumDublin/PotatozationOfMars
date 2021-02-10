import React, { FC, memo } from 'react'
import { BaseForm, BaseInput } from '@components/organisms'
import * as Yup from 'yup'
import { FormikValues } from 'formik'

type TSignUpFormProps = {}

const signupValidationSchema = Yup.object().shape({
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

const SignUpForm: FC<TSignUpFormProps> = memo(() => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values)
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={signupValidationSchema}
      onSubmit={handleSubmit}
      textButton="Sign up"
    >
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="text" name="firstName" placeholder="First name" />
      <BaseInput type="text" name="lastName" placeholder="Last name" />
      <BaseInput type="phone" name="phone" placeholder="Phone" />
      <BaseInput type="password" name="password" placeholder="Password" />
    </BaseForm>
  )
})

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
