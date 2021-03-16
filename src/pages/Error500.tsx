import React, { FC } from 'react'
import { ErrorTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Error500: FC = () => (
  <div className="flex justify-center items-center min-h-screen px-3">
    <PageMeta title="Server error" />
    <ErrorTemplate title="500" />
  </div>
)

export default Error500
