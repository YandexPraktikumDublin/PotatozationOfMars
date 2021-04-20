import React, { FC, memo } from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { FormikValues } from 'formik'
import { BaseForm, BaseInput, BaseTextarea } from '@components/organisms'
import { createFeedbackRequest } from '@store/feedback/createFeedback/actions'
import { getFeedbackErrorSelector } from '@store/feedback/createFeedback/selectors'

type TFeedbackFormProps = {}

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  content: Yup.string().min(2, 'Too Short!').required('Required')
})

const initialValues = {
  name: '',
  email: '',
  content: ''
}

const FeedbackForm: FC<TFeedbackFormProps> = memo(() => {
  const dispatch = useDispatch()
  const feedbackError = useSelector(getFeedbackErrorSelector) ?? ''

  const handleSubmit = (values: FormikValues) => {
    dispatch(
      createFeedbackRequest({
        name: values.name,
        email: values.email,
        content: values.content
      })
    )
  }

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      buttonText="Create"
      formError={feedbackError}
    >
      <BaseInput type="text" name="name" placeholder="Name" />
      <BaseInput type="email" name="email" placeholder="Email" />
      <BaseTextarea name="content" placeholder="Content" />
    </BaseForm>
  )
})

FeedbackForm.displayName = 'FeedbackForm'

export default FeedbackForm
