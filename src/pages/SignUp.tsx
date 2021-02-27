import React, { FC } from 'react'
import { withAuthCheck, withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'

const SignUp: FC = () => <SignUpTemplate />

export default withAuthCheck(withHeaderAndFooter(SignUp))
