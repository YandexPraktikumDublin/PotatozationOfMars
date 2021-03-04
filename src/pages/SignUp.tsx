import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'

const SignUp: FC = () => <SignUpTemplate />

export default withAuth(withHeaderAndFooter(SignUp))
