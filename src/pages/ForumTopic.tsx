import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ForumTopicTemplate } from '@components/templates'

const ForumTopic = () => {
  return <ForumTopicTemplate />
}

export default withHeaderAndFooter(ForumTopic)
