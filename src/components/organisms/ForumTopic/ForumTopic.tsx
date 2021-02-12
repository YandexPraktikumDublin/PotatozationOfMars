import React, { FC, memo } from 'react'
import { useHistory } from 'react-router-dom'
import { BackButton } from '@components/atoms'
import { FormTopicMessage, List } from '@components/molecules'
import { Title, TopicMessageForm } from '@components/organisms'
import { PATHS } from '@config'

type TForumTopicProps = {}

const topicMessages = [
  {
    id: 1,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
           ea commodo consequat.`,
    userName: 'Ivan Ivanov',
    date: '01.12.20'
  }
]

const ForumTopic: FC<TForumTopicProps> = memo(() => {
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.push(PATHS.FORUM)
  }

  return (
    <div className="relative">
      <Title>New Games</Title>

      <BackButton
        onClick={handleBackButtonClick}
        className="absolute top-0 left-0"
      />

      <List className="mb-4">
        {topicMessages.map((message) => (
          <FormTopicMessage
            key={message.id}
            body={message.body}
            userName={message.userName}
            date={message.date}
          />
        ))}
      </List>

      <TopicMessageForm />
    </div>
  )
})

ForumTopic.displayName = 'ForumTopic'

export default ForumTopic
