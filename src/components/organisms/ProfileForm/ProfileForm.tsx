import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput } from '@components/organisms'
import { IUser } from '@types'
import { changeProfile } from '@api'

type TProfileFormProps = {
  formValues: IUser
}

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
    .required('Required')
})

const ProfileForm: FC<TProfileFormProps> = memo(({ formValues }) => {
  const [formError, setFormError] = useState<string>('')
  console.log(formValues)

  const handleSubmit = (values: FormikValues) => {
    try {
      setFormError('')
      console.log(values)
      values.first_name = values.firstName
      values.second_name = values.secondName
      delete values.firstName
      delete values.secondName
      changeProfile(values)
    } catch (error) {
      setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
    }
  }

  return (
    <BaseForm
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Save"
      formError={formError}
    >
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseInput type="text" name="login" placeholder="Login" />
      <BaseInput type="text" name="firstName" placeholder="First name" />
      <BaseInput type="text" name="secondName" placeholder="Last name" />
      <BaseInput type="tel" name="phone" placeholder="Phone" />
    </BaseForm>
  )
})

ProfileForm.displayName = 'ProfileForm'

export default ProfileForm
