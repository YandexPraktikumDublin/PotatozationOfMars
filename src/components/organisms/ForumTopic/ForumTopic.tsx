import React, { FC, memo, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PageMeta, BackButton } from '@components/atoms'
import { FormTopicMessage, ForumTopicComment } from '@components/molecules'
import { Title, TopicCommentForm } from '@components/organisms'
import { getTopicSelector } from '@store/topic/fetchTopic/selectors'
import { PATHS } from '@config'
import { fetchTopicRequest } from '@store/topic/fetchTopic/actions'
import { getCommentsSelector } from '@store/comments/fetchComments/selectors'
import { fetchCommentsRequest } from '@store/comments/fetchComments/actions'

type TForumTopicProps = {}

const ForumTopic: FC<TForumTopicProps> = memo(() => {
  const history = useHistory()

  const { id: topicIdString } = useParams<{ id: string }>()
  const topicId = parseInt(topicIdString)

  const dispatch = useDispatch()

  const topic = useSelector(getTopicSelector)
  const comments = useSelector(getCommentsSelector)

  useEffect(() => {
    dispatch(fetchTopicRequest({ id: topicId }))
    dispatch(fetchCommentsRequest({ topicId }))
  }, [])

  const handleBackButtonClick = () => {
    history.push(PATHS.FORUM)
  }

  if (!topic) return null

  return (
    <div className="relative">
      <PageMeta title="New Games" />
      <Title>{topic.subject}</Title>

      <BackButton
        onClick={handleBackButtonClick}
        className="absolute top-0 left-0"
      />

      <FormTopicMessage topic={topic} />

      <div className="mb-4">
        {comments?.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}
      </div>

      <TopicCommentForm topicId={topicId} />
    </div>
  )
})

ForumTopic.displayName = 'ForumTopic'

export default ForumTopic
