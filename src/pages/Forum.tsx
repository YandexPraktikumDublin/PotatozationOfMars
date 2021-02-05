import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ForumTemplate } from '../components/templates/ForumTemplate'

const Forum = () => {
  return <ForumTemplate />
}

export default withHeaderAndFooter(Forum)
