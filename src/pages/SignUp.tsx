import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { SignUpTemplate } from '@components/templates'

const SignUp: FC = () => <SignUpTemplate />

export default withHeaderAndFooter(SignUp)
