import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { ITopic } from '@models'
import { formatDate } from '@utils/misc'

type TForumTopicMessageProps = {
  topic: ITopic
}

const ForumTopicMessage: FC<TForumTopicMessageProps> = memo(
  ({ topic }: TForumTopicMessageProps) => {
    const formattedDate = useMemo(() => formatDate(topic.createdAt), [
      topic.createdAt
    ])

    return (
      <div
        className={classNames(
          'text-left border border-primary rounded-2xl p-4 mb-10',
          'dark:border-white'
        )}
      >
        <div className="mb-4">{topic.content}</div>
        <div className="text-sm">
          {topic?.user?.name} at {formattedDate}
        </div>
      </div>
    )
  }
)

ForumTopicMessage.displayName = 'ForumTopicMessage'

export default ForumTopicMessage
