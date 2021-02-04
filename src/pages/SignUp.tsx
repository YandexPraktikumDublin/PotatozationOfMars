import React from 'react'
import { withPage } from '../HOCs/withPage'
import { SignUpTemplate } from '../components/templates/SignUpTemplate'

const SignUp = () => {
  return <SignUpTemplate testContent="test" />
}

export default withPage(SignUp, {})
