import React, { FC, memo } from 'react'
import { ActionsListItem, AddButton } from '@components/atoms'
import { List } from '@components/molecules'
import { Title } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TForumProps = {}

const forumTopics = [
  {
    id: 1,
    title: 'New Games',
    numberOfMessages: 10
  },
  {
    id: 2,
    title: 'Game Designers',
    numberOfMessages: 23
  }
]

const Forum: FC<TForumProps> = memo(() => {
  const history = useHistory()

  const handleAddTopicButtonClick = () => {}

  return (
    <div className="relative">
      <Title>Forum</Title>

      <AddButton
        onClick={handleAddTopicButtonClick}
        className="absolute top-0 right-0"
      />

      <List className="mb-12">
        {forumTopics.map((topic) => (
          <ActionsListItem
            key={topic.id}
            name={topic.title}
            value={topic.numberOfMessages}
            onClick={() => history.push(`${PATHS.FORUM}topics/${topic.id}`)}
          />
        ))}
      </List>
    </div>
  )
})

Forum.displayName = 'Forum'

export default Forum
