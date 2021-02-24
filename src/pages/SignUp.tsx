import React, { FC } from 'react'
import { withAuthCheck } from '@hocs'
import { SignUpTemplate } from '@components/templates'

const SignUp: FC = () => (
  <div className="relative flex flex-col min-h-screen">
    <main className="flex flex-grow justify-center items-center px-3">
      <SignUpTemplate />
    </main>
  </div>
)

export default withAuthCheck(SignUp)
