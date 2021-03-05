import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { ForumTemplate } from '@components/templates'

const Forum: FC = () => <ForumTemplate />

export default withAuth(withHeaderAndFooter(Forum))
