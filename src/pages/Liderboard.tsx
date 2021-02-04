import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { LiderboardTemplate } from '@components/templates'

const Liderboard = () => {
  return <LiderboardTemplate />
}

export default withHeaderAndFooter(Liderboard)
