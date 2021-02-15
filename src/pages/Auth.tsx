import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { AuthTemplate } from '@components/templates'

const Auth: FC = () => <AuthTemplate />

export default withHeaderAndFooter(Auth)
