import React, { FC, memo } from 'react'

export type TForumTemplateProps = {
  testContent: string
}

export const ForumTemplate: FC<TForumTemplateProps> = memo(
  ({ testContent }: TForumTemplateProps) => <></>
)

ForumTemplate.displayName = 'ForumTemplate'

export default ForumTemplate
