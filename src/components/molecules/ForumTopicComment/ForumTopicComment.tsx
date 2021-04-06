import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { IComment } from '@models'

type TForumTopicCommentProps = {
  comment: IComment
}

const ForumTopicComment: FC<TForumTopicCommentProps> = memo(
  ({ comment }: TForumTopicCommentProps) => (
    <div
      className={classNames(
        'text-left border border-primary rounded-2xl p-4 mb-4 last:mb-0',
        'dark:border-white'
      )}
    >
      <div className="mb-4">{comment.content}</div>
      <div className="text-xs">
        {comment?.user?.name} {comment?.createdAt}
      </div>
    </div>
  )
)

ForumTopicComment.displayName = 'ForumTopicComment'

export default ForumTopicComment
