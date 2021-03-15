import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import { getUserSelector } from '@store/user/fetchUser/selectors'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)

    useEffect(() => {
      if (!user) dispatch(fetchUserRequest())
    }, [])

    return <Component {...props} />
  }
}
