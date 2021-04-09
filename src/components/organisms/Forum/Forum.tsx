import React, { FC, memo, useEffect, useState } from 'react'
import { ActionsListItem, AddButton } from '@components/atoms'
import { List } from '@components/molecules'
import { CreateTopicModal, Title } from '@components/organisms'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicsSelector } from '@store/topics/fetchTopics/selectors'
import { fetchTopicsRequest } from '@store/topics/fetchTopics/actions'
import { formatDate } from '@utils/misc'

type TForumProps = {}

const Forum: FC<TForumProps> = memo(() => {
  const history = useHistory()
  const dispatch = useDispatch()

  const topics = useSelector(getTopicsSelector)

  useEffect(() => {
    dispatch(fetchTopicsRequest())
  }, [])

  const [
    isShownCreateTopicModal,
    setIsShownCreateTopicModal
  ] = useState<boolean>(false)

  const toggleModal = () => {
    setIsShownCreateTopicModal((value) => !value)
  }

  return (
    <div className="relative">
      <Title>Forum</Title>

      <AddButton onClick={toggleModal} className="absolute top-0 right-0" />

      <List className="mb-12">
        {topics?.map((topic) => (
          <ActionsListItem
            key={topic.id}
            name={topic.subject}
            value={formatDate(topic.updatedAt)}
            onClick={() => history.push(`${PATHS.FORUM}/topics/${topic.id}`)}
          />
        ))}
      </List>

      {isShownCreateTopicModal && (
        <CreateTopicModal toggleModal={toggleModal} />
      )}
    </div>
  )
})

Forum.displayName = 'Forum'

export default Forum
