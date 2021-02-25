import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormikValues } from 'formik'
import * as Yup from 'yup'
import { BaseForm, BaseInput } from '@components/organisms'
import { getUserErrorSelector } from '@store/user/fetchUser/selectors'
import { updatePasswordRequest } from '@store/user/updatePassword/actions'

type TProfilePasswordFormProps = {
  successCallback: () => void
}

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().min(8, 'Too Short!').required('Required'),
  newPassword: Yup.string().min(8, 'Too Short!').required('Required')
})

const initialValues = {
  oldPassword: '',
  newPassword: ''
}

const ProfilePasswordForm: FC<TProfilePasswordFormProps> = memo(
  ({ successCallback }: TProfilePasswordFormProps) => {
    const dispatch = useDispatch()
    const passwordError = useSelector(getUserErrorSelector) ?? ''
    const handleSubmit = async (values: FormikValues) => {
      dispatch(
        updatePasswordRequest({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword
        })
      )

      successCallback()
    }

    return (
      <BaseForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        buttonText="Change password"
        formError={passwordError}
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
  }
)

ProfilePasswordForm.displayName = 'ProfilePasswordForm'

export default ProfilePasswordForm
