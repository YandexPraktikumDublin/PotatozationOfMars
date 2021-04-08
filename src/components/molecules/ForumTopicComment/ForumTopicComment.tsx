import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { IComment } from '@models'
import { formatDate } from '@utils/misc'

type TForumTopicCommentProps = {
  comment: IComment
}

const ForumTopicComment: FC<TForumTopicCommentProps> = memo(
  ({ comment }: TForumTopicCommentProps) => {
    const formattedDate = useMemo(() => formatDate(comment.createdAt), [
      comment.createdAt
    ])

    return (
      <div
        className={classNames(
          'text-left border border-primary rounded-2xl p-4 mb-4 last:mb-0',
          'dark:border-white'
        )}
      >
        <div className="mb-4">{comment.content}</div>
        <div className="text-xs">
          {comment?.user?.name} at {formattedDate}
        </div>
      </div>
    )
  }
)

ForumTopicComment.displayName = 'ForumTopicComment'

export default ForumTopicComment
