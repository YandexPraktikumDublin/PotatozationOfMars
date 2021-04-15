import React, { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { formatDate } from '@utils/misc'
import { IComment } from '@models'
import { ForumTopicCommentActions } from '@components/molecules'

type TForumTopicChildCommentProps = {
  childComment: IComment
}

const ForumTopicChildComment: FC<TForumTopicChildCommentProps> = memo(
  ({ childComment }: TForumTopicChildCommentProps) => {
    const formattedDate = useMemo(() => formatDate(childComment.createdAt), [
      childComment.createdAt
    ])

    return (
      <div
        className={classNames(
          'text-left border border-primary rounded-2xl p-4 mb-4 ml-4 last:mb-0',
          'dark:border-white'
        )}
      >
        <div className="flex justify-between mb-2 text-xs">
          {childComment?.enjoyer?.name} at {formattedDate}
        </div>
        <div className="mb-2">{childComment.content}</div>
        <ForumTopicCommentActions comment={childComment} />
      </div>
    )
  }
)

ForumTopicChildComment.displayName = 'ForumTopicChildComment'

export default ForumTopicChildComment
