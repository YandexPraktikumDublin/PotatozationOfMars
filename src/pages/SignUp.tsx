import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'

const SignUp = () => {
  return <SignUpTemplate />
}

export default withHeaderAndFooter(SignUp)
