import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { StartTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Start: FC = () => (
  <>
    <PageMeta />
    <StartTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Start))
