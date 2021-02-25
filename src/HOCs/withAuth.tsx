import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import {
  getUserPendingSelector,
  getUserSelector
} from '@store/user/fetchUser/selectors'
import { Redirect } from 'react-router'
import { PATHS } from '@config'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)

    useEffect(() => {
      dispatch(fetchUserRequest())
    }, [])

    if (!user && pendingUser) {
      return null
    }

    return user ? <Component {...props} /> : <Redirect to={PATHS.AUTH} />
  }
}
