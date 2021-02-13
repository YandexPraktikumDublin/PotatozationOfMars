import React, { FC, memo, useState } from 'react'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseFileInput } from '@components/organisms'
import * as Yup from 'yup'
import { updateAvatar } from '@api'

type TChangeAvatarFormProps = {}

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().required('Required')
})

const initialValues = {
  avatar: ''
}

const ChangeAvatarForm: FC<TChangeAvatarFormProps> = memo(() => {
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = (values: any) => {
    try {
      setFormError('')
      const form = new FormData()
      form.append('avatar', values.avatar)
      console.log(values)
      updateAvatar(form)
    } catch (error) {
      setFormError(error?.message ?? DEFAULT_ERROR_MESSAGE)
    }
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Change avatar"
      formError={formError}
    >
      <BaseFileInput type="file" name="avatar" placeholder="Avatar" />
    </BaseForm>
  )
})

ChangeAvatarForm.displayName = 'ChangeAvatarForm'

export default ChangeAvatarForm
