import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/actions'
import { getUserSelector } from '@store/user/selectors'
import { Redirect } from 'react-router'
import { PATHS } from '@config'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)

    useEffect(() => {
      dispatch(fetchUserRequest())
    }, [])

    return user ? <Component {...props} /> : <Redirect to={PATHS.AUTH} />
  }
}
