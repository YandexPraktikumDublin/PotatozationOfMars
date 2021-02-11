import React, { FC, memo } from 'react'
import { Title } from '@components/organisms'
import { BackButton } from '@components/atoms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TForumTopicProps = {}

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
    </div>
  )
})

ForumTopic.displayName = 'ForumTopic'

export default ForumTopic
