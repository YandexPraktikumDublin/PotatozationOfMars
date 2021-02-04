import React from 'react'
import { withPage } from '../HOCs/withPage'
import { Error404Template } from '../components/templates/Error404Template'

const Error404 = () => {
  return <Error404Template testContent="" />
}

export default withPage(Error404)
