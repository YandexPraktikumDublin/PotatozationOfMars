import React, { FC } from 'react'
import { withAuth, withHeaderAndFooter } from '@hocs'
import { AuthTemplate } from '@components/templates'

const Auth: FC = () => <AuthTemplate />

export default withAuth(withHeaderAndFooter(Auth))
