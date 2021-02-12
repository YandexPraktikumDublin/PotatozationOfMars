import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ErrorTemplate } from '@components/templates'

const Error500 = () => {
  return <ErrorTemplate title="500" />
}

export default withHeaderAndFooter(Error500)
