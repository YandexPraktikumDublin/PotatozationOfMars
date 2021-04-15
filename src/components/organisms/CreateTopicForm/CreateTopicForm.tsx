import React, { FC, memo } from 'react'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput, BaseTextarea } from '@components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicErrorSelector } from '@store/topic/fetchTopic/selectors'
import { createTopicRequest } from '@store/topic/createTopic/actions'

type TCreateTopicFormProps = {}

const validationSchema = Yup.object().shape({
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  content: Yup.string().min(2, 'Too Short!').required('Required')
})

const initialValues = {
  subject: '',
  content: ''
}

const CreateTopicForm: FC<TCreateTopicFormProps> = memo(() => {
  const dispatch = useDispatch()

  const createTopicError = useSelector(getTopicErrorSelector) ?? ''

  const handleSubmit = async (values: FormikValues) => {
    dispatch(
      createTopicRequest({ subject: values.subject, content: values.content })
    )
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Create"
      formError={createTopicError}
    >
      <BaseInput type="text" name="subject" placeholder="Subject" />
      <BaseTextarea name="content" placeholder="Content" />
    </BaseForm>
  )
})

CreateTopicForm.displayName = 'CreateTopicForm'

export default CreateTopicForm
