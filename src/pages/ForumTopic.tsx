import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { ForumTopicTemplate } from '@components/templates'

const ForumTopic: FC = () => <ForumTopicTemplate />

export default withAuth(withHeaderAndFooter(ForumTopic))
