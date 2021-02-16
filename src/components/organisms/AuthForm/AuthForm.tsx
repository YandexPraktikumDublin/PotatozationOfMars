import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { signin } from '@api'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput } from '@components/organisms'
import { DEFAULT_ERROR_MESSAGE, PATHS } from '@config'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = async (values: FormikValues) => {
    try {
      setFormError('')

      await signin(values)

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
      buttonText="Log in"
      formError={formError}
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
