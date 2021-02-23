import React, { FC, memo } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrorSelector } from '@store/auth/selectors'
import { authRequest } from '@store/auth/actions'

type TAuthFormProps = {}

const validationSchema = Yup.object().shape({
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
  const dispatch = useDispatch()

  const authError = useSelector(getAuthErrorSelector) ?? ''

  const handleSubmit = (values: FormikValues) => {
    dispatch(
      authRequest({
        login: values.login,
        password: values.password
      })
    )
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Log in"
      formError={authError}
    >
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput
        autoComplete="on"
        type="password"
        name="password"
        placeholder="Password"
      />
    </BaseForm>
  )
})

AuthForm.displayName = 'AuthForm'

export default AuthForm
