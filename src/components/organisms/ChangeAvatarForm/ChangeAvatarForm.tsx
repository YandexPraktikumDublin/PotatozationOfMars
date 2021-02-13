import React, { FC, memo, useState } from 'react'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseFileInput } from '@components/organisms'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { updateUserAvatar } from '@api'

type TChangeAvatarFormProps = {
  successCallback: () => void
}

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().required('Required')
})

const initialValues = {
  avatar: ''
}

const ChangeAvatarForm: FC<TChangeAvatarFormProps> = memo(
  ({ successCallback }: TChangeAvatarFormProps) => {
    const [formError, setFormError] = useState<string>('')

    const handleSubmit = async (values: FormikValues) => {
      try {
        setFormError('')

        const form = new FormData()
        form.append('avatar', values.avatar)

        await updateUserAvatar(form)

        successCallback()
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
        <BaseFileInput name="avatar" />
      </BaseForm>
    )
  }
)

ChangeAvatarForm.displayName = 'ChangeAvatarForm'

export default ChangeAvatarForm
