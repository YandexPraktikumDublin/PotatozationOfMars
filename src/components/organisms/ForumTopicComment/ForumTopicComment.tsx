import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { IComment } from '@models'
import { formatDate } from '@utils/misc'
import { useToggle } from '@hooks'
import {
  ForumTopicChildComment,
  ForumTopicCommentForm
} from '@components/organisms'
import { ForumTopicCommentActions } from '@components/molecules'

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
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="">
              {comment?.enjoyer?.name} at {formattedDate}
            </span>

            <button
              title="Add reaction"
              className="underline"
              onClick={toggleForm}
            >
              {isShowForm ? 'Cancel' : 'Reply'}
            </button>
          </div>
          <div className="mb-3 text-lg">{comment.content}</div>
          <ForumTopicCommentActions comment={comment} />
        </div>

        {isShowForm && (
          <div className="mb-4 ml-4">
            <ForumTopicCommentForm
              topicId={comment.topicId}
              parentId={comment.id}
              hierarchyLevel={1}
              submitCallback={toggleForm}
            />
          </div>
        )}

        {comment.children?.map((childComment) => (
          <ForumTopicChildComment
            key={childComment.id}
            childComment={childComment}
          />
        ))}
      </>
    )
  }
)

ForumTopicComment.displayName = 'ForumTopicComment'

export default ForumTopicComment
