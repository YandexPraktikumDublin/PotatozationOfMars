import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { FormikValues } from 'formik'
import { BaseForm, BaseTextarea } from '@components/organisms'
import { getCommentErrorSelector } from '@store/comment/fetchComment/selectors'
import { createCommentRequest } from '@store/comment/createComment/actions'

type TTopicCommentFormProps = {
  topicId: number
  hierarchyLevel?: number
}

const validationSchema = Yup.object().shape({
  content: Yup.string().min(2, 'Too Short!').required('Required')
})

const initialValues = {
  content: ''
}

const TopicCommentForm: FC<TTopicCommentFormProps> = memo(
  ({ topicId, hierarchyLevel = 0 }: TTopicCommentFormProps) => {
    const dispatch = useDispatch()

    const createCommentError = useSelector(getCommentErrorSelector) ?? ''

    const handleSubmit = async (values: FormikValues) => {
      dispatch(
        createCommentRequest({
          content: values.content,
          topicId,
          hierarchyLevel
        })
      )
    }

    return (
      <BaseForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        buttonText="Send"
        formError={createCommentError}
      >
        <BaseTextarea name="content" placeholder="Message" />
      </BaseForm>
    )
  }
)

TopicCommentForm.displayName = 'TopicCommentForm'

export default TopicCommentForm
