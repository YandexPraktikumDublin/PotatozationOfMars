import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { StartTemplate } from '@components/templates'

const Start: React.FC = () => {
  return <StartTemplate />
}

export default withHeaderAndFooter(Start)
