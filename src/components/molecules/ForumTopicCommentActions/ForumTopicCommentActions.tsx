import React, {
  FC,
  lazy,
  memo,
  MouseEvent,
  Suspense,
  useMemo,
  useRef
} from 'react'
import { useDispatch } from 'react-redux'
import { IEmojiData } from 'emoji-picker-react'
import groupBy from 'lodash/groupBy'
import classNames from 'classnames'
import { IComment } from '@models'
import { useOnClickOutside, useToggle } from '@hooks'
import { ForumTopicCommentReaction } from '@components/atoms'
import { createReactionRequest } from '@store/reaction/createReaction/actions'
import { deleteReactionRequest } from '@store/reaction/deleteReaction/actions'

type TForumTopicCommentActionsProps = {
  comment: IComment
}

const EmojiPicker = lazy(() => import('emoji-picker-react'))

const emojiPickerStyle = { boxShadow: 'none' }

const ForumTopicCommentActions: FC<TForumTopicCommentActionsProps> = memo(
  ({ comment }: TForumTopicCommentActionsProps) => {
    const emojiPickerWrapperRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch()

    const [isShowEmojiPicker, toggleEmojiPicker] = useToggle(false)

    useOnClickOutside(emojiPickerWrapperRef, toggleEmojiPicker)

    const groupedReactions = useMemo(
      () =>
        Object.entries(groupBy(comment?.reactions, (item) => item?.content)),
      [comment?.reactions]
    )

    const onEmojiClick = (event: MouseEvent, emojiObject: IEmojiData) => {
      toggleEmojiPicker()

      if (comment.id) {
        dispatch(
          createReactionRequest({
            content: emojiObject.emoji,
            commentId: comment.id
          })
        )
      }
    }

    const handleReactionClick = (content: string) => {
      const currentReaction = comment?.reactions?.find(
        (reaction) =>
          reaction.content === content && reaction.userId === comment.userId
      )

      if (currentReaction?.id && comment.id) {
        dispatch(deleteReactionRequest({ reaction: currentReaction }))
      }

      if (!currentReaction?.id && comment.id) {
        dispatch(
          createReactionRequest({ content: content, commentId: comment.id })
        )
      }
    }

    return (
      <div className="flex flex-wrap items-center">
        <div className="relative mb-1">
          <button
            title="Add reaction"
            className={classNames(
              'inline-flex justify-center items-center w-[1.5rem] h-[1.5rem] text-xs rounded-full border text-sm mr-2',
              'border-primary color-primary',
              'dark:border-white dark:color-white'
            )}
            onClick={toggleEmojiPicker}
          >
            +
          </button>

          {isShowEmojiPicker && (
            <Suspense
              fallback={<span className="mr-2 text-xs">Loading...</span>}
            >
              <div
                ref={emojiPickerWrapperRef}
                className="absolute top-0 left-0 z-10"
              >
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  groupVisibility={{
                    flags: false
                  }}
                  pickerStyle={emojiPickerStyle}
                  disableAutoFocus
                  disableSearchBar
                  disableSkinTonePicker
                />
              </div>
            </Suspense>
          )}
        </div>

        {groupedReactions?.map(([content, reactions]) => (
          <ForumTopicCommentReaction
            key={content}
            content={content}
            reactions={reactions}
            handleClick={handleReactionClick}
          />
        ))}
      </div>
    )
  }
)

ForumTopicCommentActions.displayName = 'ForumTopicCommentActions'

export default ForumTopicCommentActions
