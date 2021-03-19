import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import {
  getUserErrorSelector,
  getUserPendingSelector,
  getUserSelector
} from '@store/user/fetchUser/selectors'
import { Redirect, useLocation } from 'react-router'
import { PATHS } from '@config'
import { getAxiosInstance } from '@api'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const location = useLocation()

    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)
    const errorUser = useSelector(getUserErrorSelector)

    const code = /code=([^&]+)/.exec(location.search)?.[1]

    const isAuthOrSignup =
      location.pathname === PATHS.AUTH || location.pathname === PATHS.SIGNUP

    useEffect(() => {
      if (!user) {
        if (code) {
          getAxiosInstance()
            .post('oauth/yandex', { code })
            .then(() => dispatch(fetchUserRequest()))
            .catch()
        } else {
          dispatch(fetchUserRequest())
        }
      }
    }, [])

    if (pendingUser) {
      return null
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
