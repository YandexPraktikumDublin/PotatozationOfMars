import React, { FC, memo } from 'react'
import { BaseForm, BaseInput } from '@components/organisms'
import * as Yup from 'yup'
import { onSubmitAuth } from './AuthController'

type TAuthFormProps = {}

const AuthSchema = Yup.object().shape({
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
  return (
    <BaseForm
      schema={AuthSchema}
      initialValues={initialValues}
      onSubmit={onSubmitAuth}
      textButton="Log in"
    >
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="password" name="password" placeholder="Password" />
    </BaseForm>
  )
})

AuthForm.displayName = 'AuthForm'

export default AuthForm
