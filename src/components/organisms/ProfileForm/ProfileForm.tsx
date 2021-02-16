import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput } from '@components/organisms'
import { IUser } from '@types'
import { changeUserData } from '@api'

type TProfileFormProps = {
  userData?: IUser
  successCallback: () => void
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

const ProfileForm: FC<TProfileFormProps> = memo(
  ({ userData, successCallback }: TProfileFormProps) => {
    const [formError, setFormError] = useState<string>('')

    const handleSubmit = async (values: FormikValues) => {
      try {
        setFormError('')

        await changeUserData({
          email: values.email,
          login: values.login,
          first_name: values.firstName,
          second_name: values.secondName,
          display_name: values.displayName,
          phone: values.phone
        })

        successCallback()
      } catch (error) {
        setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
      }
    }

    return (
      <BaseForm
        initialValues={userData || {}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        buttonText="Save"
        formError={formError}
      >
        <BaseInput type="email" name="email" placeholder="Email" />
        <BaseInput type="text" name="login" placeholder="Login" />
        <BaseInput type="text" name="firstName" placeholder="First name" />
        <BaseInput type="text" name="secondName" placeholder="Last name" />
        <BaseInput type="text" name="displayName" placeholder="Display name" />
        <BaseInput type="tel" name="phone" placeholder="Phone" />
      </BaseForm>
    )
  }
)

ProfileForm.displayName = 'ProfileForm'

export default ProfileForm
