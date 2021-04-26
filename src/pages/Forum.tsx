import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { ForumTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Forum: FC = () => (
  <>
    <PageMeta title="Forum" />
    <ForumTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Forum))
