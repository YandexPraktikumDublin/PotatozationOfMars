import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { AuthTemplate } from '@components/templates'

const Auth: React.FC = () => {
  return <AuthTemplate title="Log in" />
}

export default withHeaderAndFooter(Auth)
