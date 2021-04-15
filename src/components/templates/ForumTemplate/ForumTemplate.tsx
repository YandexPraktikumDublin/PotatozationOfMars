import React, { FC, memo } from 'react'
import { Window, Forum } from '@components/organisms'

type TForumTemplateProps = {}

const ForumTemplate: FC<TForumTemplateProps> = memo(() => (
  <div className="w-full max-w-2xl">
    <Window isFullHeight>
      <Forum />
    </Window>
  </div>
))

ForumTemplate.displayName = 'ForumTemplate'

export default ForumTemplate
