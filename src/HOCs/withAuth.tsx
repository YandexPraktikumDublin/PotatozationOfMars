import React from 'react'
import { useSelector } from 'react-redux'
import {
  getUserErrorSelector,
  getUserPendingSelector,
  getUserSelector
} from '@store/user/fetchUser/selectors'
import { Redirect, useLocation } from 'react-router'
import { PATHS } from '@config'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const location = useLocation()

    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)
    const errorUser = useSelector(getUserErrorSelector)

    const isAuthOrSignup =
      location.pathname === PATHS.AUTH || location.pathname === PATHS.SIGNUP

    if (pendingUser) {
      return null // TODO: add loader
    }

    if (user && isAuthOrSignup) {
      return <Redirect to={PATHS.BASE} />
    }

    if (errorUser && !isAuthOrSignup) {
      return <Redirect to={PATHS.AUTH} />
    }

    return <Component {...props} />
  }
}
