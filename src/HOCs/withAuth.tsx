import React from 'react'
import { Redirect } from 'react-router-dom'
import { PATHS } from '@config'

export default function withAuth<T>(Component: React.FC<T>) {
  const isAuthorized = true

  return (props: any) =>
    isAuthorized ? <Component {...props} /> : <Redirect to={PATHS.AUTH} />
}
