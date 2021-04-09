import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { IComment } from '@models'
import { formatDate } from '@utils/misc'
import { useToggle } from '@hooks'
import { TopicCommentForm } from '@components/organisms'

type TForumTopicCommentProps = {
  comment: IComment
}

const ForumTopicComment: FC<TForumTopicCommentProps> = memo(
  ({ comment }: TForumTopicCommentProps) => {
    const [isShowForm, toggleForm] = useToggle(false)

    const formattedDate = useMemo(() => formatDate(comment.createdAt), [
      comment.createdAt
    ])

    return (
      <>
        <div
          className={classNames(
            'text-left border border-primary rounded-2xl p-4 mb-4 last:mb-0',
            'dark:border-white'
          )}
        >
          <div className="mb-2 text-xs">
            {comment?.user?.name} at {formattedDate}
          </div>
          <div className="mb-2">{comment.content}</div>
          <button className="text-xs underline" onClick={toggleForm}>
            {isShowForm ? 'Cancel' : 'Reply'}
          </button>
        </div>

        {isShowForm && (
          <div className="ml-4 mb-4">
            <TopicCommentForm
              topicId={comment.topicId}
              parentId={comment.id}
              hierarchyLevel={1}
            />
          </div>
        )}
      </>
    )
  }
)

ForumTopicComment.displayName = 'ForumTopicComment'

export default ForumTopicComment
