import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import {
  getUserPendingSelector,
  getUserSelector
} from '@store/user/fetchUser/selectors'
import { Redirect } from 'react-router'
import { PATHS } from '@config'

export default function withAuthCheck<T>(Component: React.FC<T>) {
  return (props: any) => {
    const [isInitialized, setIsInitialized] = useState<boolean>(false)

    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)

    useEffect(() => {
      setIsInitialized(true)
      dispatch(fetchUserRequest())
    }, [])

    if (!isInitialized || pendingUser) {
      return null // TODO: add loader
    }

    if (isInitialized && user) {
      return <Redirect to={PATHS.BASE} />
    }

    return <Component {...props} />
  }
}
