import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ErrorTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Error404: FC = () => (
  <>
    <PageMeta title="Not found" />
    <ErrorTemplate title="404" />
  </>
)

export default withHeaderAndFooter(Error404)
