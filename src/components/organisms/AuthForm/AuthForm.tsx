import React, { FC, memo } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput, Button } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrorSelector } from '@store/auth/selectors'
import { authRequest } from '@store/auth/actions'
import { getAxiosInstance } from '@api'
import { hardRedirectTo } from '@utils/misc'
import { YANDEX_OAUTH_REDIRECT_URL } from '@config'

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

  const handleOAuth = () => {
    const redirectUri = window ? window.location.origin : null
    getAxiosInstance()
      .get('/oauth/yandex/service-id')
      .then((response) => {
        if (response.data.service_id && redirectUri) {
          hardRedirectTo(
            `${YANDEX_OAUTH_REDIRECT_URL}?response_type=code&client_id=${response.data.service_id}&redirect_uri=${redirectUri}`
          )
        }
      })
      .catch()
  }

  return (
    <>
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
      <Button onClick={handleOAuth}>Log in with Yandex</Button>
    </>
  )
})

AuthForm.displayName = 'AuthForm'

export default AuthForm
