import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ErrorTemplate } from '@components/templates'

const Error404 = () => {
  return <ErrorTemplate title="404" />
}

export default withHeaderAndFooter(Error404)
