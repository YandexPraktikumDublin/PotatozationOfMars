import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { AuthTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Auth: FC = () => (
  <>
    <PageMeta title="Authentication" />
    <AuthTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Auth))
