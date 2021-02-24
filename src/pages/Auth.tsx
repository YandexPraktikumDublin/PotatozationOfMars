import React, { FC } from 'react'
import { withAuthCheck } from '@hocs'
import { AuthTemplate } from '@components/templates'

const Auth: FC = () => (
  <div className="relative flex flex-col min-h-screen">
    <main className="flex flex-grow justify-center items-center px-3">
      <AuthTemplate />
    </main>
  </div>
)

export default withAuthCheck(Auth)
