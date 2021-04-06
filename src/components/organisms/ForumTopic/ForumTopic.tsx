import React, { FC, memo } from 'react'
import { useHistory } from 'react-router-dom'
import { PageMeta, BackButton } from '@components/atoms'
import { FormTopicMessage, ForumTopicComment } from '@components/molecules'
import { Title, TopicMessageForm } from '@components/organisms'
import { PATHS } from '@config'

type TForumTopicProps = {}

const topic = {
  id: 1,
  subject: 'New Games',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  userId: 1,
  user: {
    id: 1,
    login: 'IvanIvanov',
    name: 'Ivan Ivanov',
    createdAt: '01.12.20',
    updatedAt: '01.12.20'
  },
  createdAt: '01.12.20',
  updatedAt: '01.12.20',
  comments: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userId: 1,
      user: {
        id: 1,
        login: 'IvanIvanov',
        name: 'Ivan Ivanov',
        createdAt: '01.12.20',
        updatedAt: '01.12.20'
      },
      topicId: 1,
      reactions: [
        {
          id: 1,
          content: '😂',
          userId: 1,
          user: {
            id: 1,
            login: 'IvanIvanov',
            name: 'Ivan Ivanov',
            createdAt: '01.12.20',
            updatedAt: '01.12.20'
          },
          commentId: 1,
          createdAt: '01.12.20',
          updatedAt: '01.12.20'
        },
        {
          id: 2,
          content: '😅',
          userId: 1,
          user: {
            id: 1,
            login: 'IvanIvanov',
            name: 'Ivan Ivanov',
            createdAt: '01.12.20',
            updatedAt: '01.12.20'
          },
          commentId: 1,
          createdAt: '01.12.20',
          updatedAt: '01.12.20'
        },
        {
          id: 3,
          content: '😂',
          userId: 2,
          user: {
            id: 2,
            login: 'PetrPetrov',
            name: 'Petr Petrov',
            createdAt: '01.12.20',
            updatedAt: '01.12.20'
          },
          commentId: 1,
          createdAt: '01.12.20',
          updatedAt: '01.12.20'
        }
      ],
      createdAt: '01.12.20',
      updatedAt: '01.12.20'
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userId: 1,
      user: {
        id: 1,
        login: 'IvanIvanov',
        name: 'Ivan Ivanov',
        createdAt: '01.12.20',
        updatedAt: '01.12.20'
      },
      topicId: 1,
      reactions: [
        {
          id: 1,
          content: '😂',
          userId: 1,
          user: {
            id: 1,
            login: 'IvanIvanov',
            name: 'Ivan Ivanov',
            createdAt: '01.12.20',
            updatedAt: '01.12.20'
          },
          commentId: 2,
          createdAt: '01.12.20',
          updatedAt: '01.12.20'
        }
      ],
      createdAt: '01.12.20',
      updatedAt: '01.12.20'
    }
  ]
}

const ForumTopic: FC<TForumTopicProps> = memo(() => {
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.push(PATHS.FORUM)
  }

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
        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}

        {topic.comments.map((comment) => (
          <ForumTopicComment key={comment.id} comment={comment} />
        ))}
      </div>

      <TopicMessageForm />
    </div>
  )
})

ForumTopic.displayName = 'ForumTopic'

export default ForumTopic
