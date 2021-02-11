import React, { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { DEFAULT_ERROR_MESSAGE } from '@config'
import { BaseForm, BaseTextarea, BaseInput } from '@components/organisms'

type TTopicMessageFormProps = {}

const validationSchema = Yup.object().shape({
  message: Yup.string().min(2, 'Too Short!').required('Required')
})

const initialValues = {
  message: ''
}

const TopicMessageForm: FC<TTopicMessageFormProps> = memo(() => {
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
      buttonText="Send"
      formError={formError}
    >
      <BaseTextarea name="message" placeholder="Message" />
      <BaseInput type="hidden" name="topicId" placeholder="Topic id" />
    </BaseForm>
  )
})

TopicMessageForm.displayName = 'TopicMessageForm'

export default TopicMessageForm
