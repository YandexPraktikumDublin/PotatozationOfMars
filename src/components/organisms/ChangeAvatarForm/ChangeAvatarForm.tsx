import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserErrorSelector } from '@store/user/fetchUser/selectors'
import { BaseForm, BaseFileInput } from '@components/organisms'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { updateAvatarRequest } from '@store/user/updateAvatar/actions'

type TChangeAvatarFormProps = {}

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().required('Required')
})

const initialValues = {
  avatar: ''
}

const ChangeAvatarForm: FC<TChangeAvatarFormProps> = memo(() => {
  const dispatch = useDispatch()
  const avatarError = useSelector(getUserErrorSelector)

  const handleSubmit = (values: FormikValues) => {
    const formData = new FormData()
    formData.append('avatar', values.avatar)

    dispatch(updateAvatarRequest({ formData }))
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Change avatar"
      formError={avatarError ?? ''}
    >
      <BaseFileInput name="avatar" />
    </BaseForm>
  )
})

ChangeAvatarForm.displayName = 'ChangeAvatarForm'

export default ChangeAvatarForm
