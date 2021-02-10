import React, { FC, memo } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput } from '@components/organisms'

type TAuthFormProps = {}

const authValidationSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required')
})

const initialValues = {
  login: '',
  password: ''
}

const AuthForm: FC<TAuthFormProps> = memo(() => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values)
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={authValidationSchema}
      onSubmit={handleSubmit}
      textButton="Log in"
    >
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="password" name="password" placeholder="Password" />
    </BaseForm>
  )
})

AuthForm.displayName = 'AuthForm'

export default AuthForm
