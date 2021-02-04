import React from 'react'
import { withPage } from '../HOCs/withPage'
import { Error500Template } from '../components/templates/Error500Template'

const Error500 = () => {
  return <Error500Template testContent="test" />
}

export default withPage(Error500, {})
