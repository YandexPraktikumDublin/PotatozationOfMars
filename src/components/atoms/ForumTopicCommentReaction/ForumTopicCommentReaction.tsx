import React, { FC, memo, useMemo, useCallback } from 'react'
import classNames from 'classnames'
import { IReaction } from '@models'

type TForumTopicCommentReactionProps = {
  content: string
  reactions: IReaction[]
  handleClick: (content: string) => void
}

const ForumTopicCommentReaction: FC<TForumTopicCommentReactionProps> = memo(
  ({ content, reactions, handleClick }: TForumTopicCommentReactionProps) => {
    const userNames = useMemo(
      () => reactions?.map((item) => item?.user?.name)?.join(', '),
      [reactions]
    )

    const handleButtonClick = useCallback(() => handleClick(content), [
      content,
      handleClick
    ])

    return (
      <button
        title={userNames}
        onClick={handleButtonClick}
        className={classNames(
          'inline-flex relative py-px px-1 rounded-full border border-primary color-primary text-sm mb-1 mr-2 last:mr-0',
          'dark:border-white dark:color-white'
        )}
      >
        {content}

        <span className="ml-1">{reactions?.length}</span>
      </button>
    )
  }
)

ForumTopicCommentReaction.displayName = 'ForumTopicCommentReaction'

export default ForumTopicCommentReaction
