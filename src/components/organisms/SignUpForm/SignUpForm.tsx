import React, { FC, memo, useState } from 'react'
import { BaseForm, BaseInput } from '@components/organisms'
import * as Yup from 'yup'
import { signup } from '@api'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE, PATHS } from '@config'
import { useHistory } from 'react-router-dom'

type TSignUpFormProps = {}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  secondName: Yup.string()
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
  secondName: '',
  phone: '',
  password: ''
}

const SignUpForm: FC<TSignUpFormProps> = memo(() => {
  const history = useHistory()
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = async (values: FormikValues) => {
    try {
      setFormError('')

      await signup({
        email: values.email,
        login: values.login,
        first_name: values.firstName,
        second_name: values.secondName,
        phone: values.phone,
        password: values.phone
      })

      history.push(PATHS.BASE)
    } catch (error) {
      setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
    }
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      formError={formError}
    >
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="text" name="firstName" placeholder="First name" />
      <BaseInput type="text" name="secondName" placeholder="Last name" />
      <BaseInput type="tel" name="phone" placeholder="Phone" />
      <BaseInput
        autoComplete="on"
        type="password"
        name="password"
        placeholder="Password"
      />
    </BaseForm>
  )
})

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
