import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput } from '@components/organisms'

type TProfileFormProps = {}

const profileValidationSchema = Yup.object().shape({
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
    .required('Required')
})

const initialValues = {
  email: '',
  login: '',
  firstName: '',
  lastName: '',
  phone: ''
}

const ProfileForm: FC<TProfileFormProps> = memo(() => {
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
      validationSchema={profileValidationSchema}
      onSubmit={handleSubmit}
      buttonText="Save"
      formError={formError}
    >
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="text" name="firstName" placeholder="First name" />
      <BaseInput type="text" name="lastName" placeholder="Last name" />
      <BaseInput type="tel" name="phone" placeholder="Phone" />
    </BaseForm>
  )
})

ProfileForm.displayName = 'ProfileForm'

export default ProfileForm
