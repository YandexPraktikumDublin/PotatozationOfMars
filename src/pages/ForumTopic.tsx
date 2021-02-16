import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ForumTopicTemplate } from '@components/templates'

const ForumTopic: FC = () => <ForumTopicTemplate />

export default withHeaderAndFooter(ForumTopic)
