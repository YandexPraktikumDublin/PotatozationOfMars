import React from 'react'
import { ErrorTemplate } from '@components/templates'

const Error500 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <ErrorTemplate title="500" />
    </div>
  )
}

export default Error500
