import React, { FC, memo, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PageMeta, BackButton } from '@components/atoms'
import { FormTopicMessage, ForumTopicComment } from '@components/molecules'
import { Title, TopicMessageForm } from '@components/organisms'
import { getTopicSelector } from '@store/topic/fetchTopic/selectors'
import { PATHS } from '@config'
import { fetchTopicRequest } from '@store/topic/fetchTopic/actions'

type TForumTopicProps = {}

const ForumTopic: FC<TForumTopicProps> = memo(() => {
  const history = useHistory()
  const { id: topicId } = useParams<{ id: string }>()

  const dispatch = useDispatch()
  const topic = useSelector(getTopicSelector)

  useEffect(() => {
    dispatch(fetchTopicRequest({ id: parseInt(topicId) }))
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
        {topic?.comments?.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}
      </div>

      <TopicMessageForm />
    </div>
  )
})

ForumTopic.displayName = 'ForumTopic'

export default ForumTopic
