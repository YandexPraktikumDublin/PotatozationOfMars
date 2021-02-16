import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ForumTemplate } from '@components/templates'

const Forum: FC = () => <ForumTemplate />

export default withHeaderAndFooter(Forum)
