import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const SignUp: FC = () => (
  <>
    <PageMeta title="Sign up" />
    <SignUpTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(SignUp))
