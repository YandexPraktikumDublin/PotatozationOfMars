import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput } from '@components/organisms'
import {
  getUserSelector,
  getUserErrorSelector
} from '@store/user/fetchUser/selectors'
import { updateUserRequest } from '@store/user/updateUser/actions'

type TProfileFormProps = {
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
  ({ successCallback }: TProfileFormProps) => {
    const dispatch = useDispatch()

    const user = useSelector(getUserSelector)
    const profileError = useSelector(getUserErrorSelector) ?? ''

    const handleSubmit = async (values: FormikValues) => {
      dispatch(
        updateUserRequest({
          email: values.email,
          login: values.login,
          first_name: values.firstName,
          second_name: values.secondName,
          display_name: values.displayName,
          phone: values.phone
        })
      )
      successCallback()
    }

    return (
      <BaseForm
        initialValues={user ?? {}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        buttonText="Save"
        formError={profileError}
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
