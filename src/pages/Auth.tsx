import React, { FC } from 'react'
import { withAuthCheck, withHeaderAndFooter } from '@hocs'
import { AuthTemplate } from '@components/templates'

const Auth: FC = () => <AuthTemplate />

export default withAuthCheck(withHeaderAndFooter(Auth))
