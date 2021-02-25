import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import { getUserSelector } from '@store/user/fetchUser/selectors'
import { Redirect } from 'react-router'
import { PATHS } from '@config'

export default function withAuthCheck<T>(Component: React.FC<T>) {
  return (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)

    useEffect(() => {
      dispatch(fetchUserRequest())
    }, [])

    return user ? <Redirect to={PATHS.BASE} /> : <Component {...props} />
  }
}
