import React, { FC, memo, useState } from 'react'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput } from '@components/organisms'
import { changePassword } from '@api'
import * as Yup from 'yup'

type TProfilePasswordFormProps = {}

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().min(8, 'Too Short!').required('Required'),
  newPassword: Yup.string().min(8, 'Too Short!').required('Required')
})

const initialValues = {
  oldPassword: '',
  newPassword: ''
}

const ProfilePasswordForm: FC<TProfilePasswordFormProps> = memo(() => {
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = (values: FormikValues) => {
    try {
      setFormError('')
      changePassword(values)
      console.log(values)
    } catch (error) {
      setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
    }
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Change password"
      formError={formError}
    >
      <BaseInput
        type="password"
        name="oldPassword"
        placeholder="Old password"
        autoComplete="on"
      />
      <BaseInput
        type="password"
        name="newPassword"
        placeholder="New password"
        autoComplete="on"
      />
    </BaseForm>
  )
})

ProfilePasswordForm.displayName = 'ProfilePasswordForm'

export default ProfilePasswordForm
