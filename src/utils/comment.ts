import { IComment, IReaction } from '@models'

export const addNewCommentToCommentsArray = (
  comments: IComment[],
  newComment: IComment
): IComment[] => {
  if (!newComment?.hierarchyLevel) {
    return [...comments, newComment]
  }

  return comments.map((item) =>
    item.id === newComment?.parentId
      ? {
          ...item,
          children: [...(item?.children ?? []), newComment]
        }
      : item
  )
}

export const addNewReactionToCommentsArray = (
  comments: IComment[],
  reaction: IReaction
): IComment[] => {
  if (reaction?.hierarchyLevel === 0) {
    return comments.map((comment) =>
      comment.id === reaction?.commentId
        ? {
            ...comment,
            reactions: [...(comment?.reactions ?? []), reaction]
          }
        : comment
    )
  }

  return comments.map((comment) => ({
    ...comment,
    children:
      comment?.children?.map((childComment) =>
        childComment.id === reaction?.commentId
          ? {
              ...childComment,
              reactions: [...(childComment?.reactions ?? []), reaction]
            }
          : childComment
      ) ?? []
  }))
}

export const removeReactionFromCommentsArray = (
  comments: IComment[],
  reaction: IReaction
): IComment[] => {
  if (reaction?.hierarchyLevel === 0) {
    return comments.map((comment) =>
      comment.id === reaction?.commentId
        ? {
            ...comment,
            reactions: comment?.reactions?.filter(
              (item) => item.id !== reaction.id
            )
          }
        : comment
    )
  }

  return comments.map((comment) => ({
    ...comment,
    children: comment.children?.map((childComment) => ({
      ...childComment,
      reactions: childComment?.reactions?.filter(
        (item) => item.id !== reaction.id
      )
    }))
  }))
}
