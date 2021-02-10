import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput } from '@components/organisms'
import { DEFAULT_ERROR_MESSAGE } from '@config'

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
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = (values: FormikValues) => {
    try {
      setFormError('')
      console.log(values)
    } catch (error) {
      setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
    }
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={authValidationSchema}
      onSubmit={handleSubmit}
      buttonText="Log in"
      formError={formError}
    >
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="password" name="password" placeholder="Password" />
    </BaseForm>
  )
})

AuthForm.displayName = 'AuthForm'

export default AuthForm
