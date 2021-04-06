import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseInput, BaseTextarea } from '@components/organisms'

type TCreateTopicFormProps = {}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
})

const initialValues = {
  title: ''
}

const CreateTopicForm: FC<TCreateTopicFormProps> = memo(() => {
  const [formError, setFormError] = useState<string>('')

  const handleSubmit = async (values: FormikValues) => {
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
      buttonText="Create"
      formError={formError}
    >
      <BaseInput type="text" name="subject" placeholder="Subject" />
      <BaseTextarea name="content" placeholder="Content" />
    </BaseForm>
  )
})

CreateTopicForm.displayName = 'CreateTopicForm'

export default CreateTopicForm
