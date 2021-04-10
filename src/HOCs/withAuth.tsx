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
import { getIUserSelector } from '@store/iuser/fetchIUser/selectors'
import { fetchIUserRequest } from '@store/iuser/fetchIUser/actions'
import { createIUserRequest } from '@store/iuser/createIUser/actions'
import { generatePassword } from '@utils/misc'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const location = useLocation()

    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)
    const errorUser = useSelector(getUserErrorSelector)
    const iuser = useSelector(getIUserSelector)

    const isAuthOrSignup =
      location.pathname === PATHS.AUTH || location.pathname === PATHS.SIGNUP

    useEffect(() => {
      const code = new URLSearchParams(location.search)?.get('code')

      if (!user && code) {
        getAxiosInstance()
          .post('oauth/yandex', { code })
          .then(() => {
            dispatch(fetchUserRequest())
          })
          .catch()

        return
      }

      if (!user) {
        dispatch(fetchUserRequest())
      }

      if (!iuser) {
        dispatch(fetchIUserRequest())
      }
    }, [])

    useEffect(() => {
      if (user && !iuser) {
        dispatch(
          createIUserRequest({
            login: user.login,
            name: `${user.firstName} ${user.secondName}`,
            password: generatePassword()
          })
        )
      }
    }, [user])

    if (pendingUser) {
      return null
    }

    if (user && iuser && isAuthOrSignup) {
      return <Redirect to={PATHS.BASE} />
    }

    if (errorUser && !isAuthOrSignup) {
      return <Redirect to={PATHS.AUTH} />
    }

    return <Component {...props} />
  }
}
