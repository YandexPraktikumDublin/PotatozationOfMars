import { IComment } from '@models'

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
