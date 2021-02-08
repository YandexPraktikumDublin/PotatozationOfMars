import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'
import { PATHS } from '@config'

const SignUp = () => {
  return (
    <SignUpTemplate
      title="Sign up"
      text="Already have an account?"
      path={PATHS.AUTH}
    />
  )
}

export default withHeaderAndFooter(SignUp)
