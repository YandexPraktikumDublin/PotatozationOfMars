import React, { FC, memo } from 'react'
import { ForumTopic, Window } from '@components/organisms'

type TForumTopicTemplateProps = {}

const ForumTopicTemplate: FC<TForumTopicTemplateProps> = memo(() => (
  <div className="w-full max-w-2xl">
    <Window isFullHeight>
      <ForumTopic />
    </Window>
  </div>
))

ForumTopicTemplate.displayName = 'ForumTopicTemplate'

export default ForumTopicTemplate
