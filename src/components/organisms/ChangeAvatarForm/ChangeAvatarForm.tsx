import React, { FC, memo, useState } from 'react'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput } from '@components/organisms'
import * as Yup from 'yup'

type TChangeAvatarFormProps = {}

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().required('Required')
})

const initialValues = {
  avatar: ''
}

const ChangeAvatarForm: FC<TChangeAvatarFormProps> = memo(() => {
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
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Change avatar"
      formError={formError}
    >
      <BaseInput type="file" name="avatar" placeholder="Avatar" />
    </BaseForm>
  )
})

ChangeAvatarForm.displayName = 'ChangeAvatarForm'

export default ChangeAvatarForm
