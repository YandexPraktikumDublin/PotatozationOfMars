import React, { useEffect, useMemo } from 'react'
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
import { getUserSettingsSelector } from '@store/userSettings/fetchUserSettings/selectors'
import { fetchUserSettingsRequest } from '@store/userSettings/fetchUserSettings/actions'
import { getThemesSelector } from '@store/themes/fetchThemes/selectors'
import { fetchThemesRequest } from '@store/themes/fetchThemes/actions'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const location = useLocation()

    const dispatch = useDispatch()

    const user = useSelector(getUserSelector)
    const pendingUser = useSelector(getUserPendingSelector)
    const errorUser = useSelector(getUserErrorSelector)

    const themes = useSelector(getThemesSelector)
    const iuser = useSelector(getIUserSelector)
    const userSettings = useSelector(getUserSettingsSelector)

    const isAuthOrSignup =
      location.pathname === PATHS.AUTH || location.pathname === PATHS.SIGNUP

    const selectedTheme = useMemo(
      () => themes?.find((theme) => theme.id === userSettings?.themeId),
      [themes, userSettings?.themeId]
    )

    useEffect(() => {
      const code = new URLSearchParams(location.search)?.get('code')

      if (!user && code) {
        getAxiosInstance()
          .post('oauth/yandex', { code })
          .then(() => dispatch(fetchUserRequest()))
          .catch()
      }
    }, [])

    useEffect(() => {
      if (!user) {
        dispatch(fetchUserRequest())
      }

      if (!iuser) {
        dispatch(fetchIUserRequest())
      }

      if (themes?.length === 0) {
        dispatch(fetchThemesRequest())
      }

      if (!userSettings) {
        dispatch(fetchUserSettingsRequest())
      }
    }, [])

    useEffect(() => {
      if (selectedTheme) {
        document.documentElement.style.setProperty(
          '--primaryColor',
          selectedTheme.preset?.primaryColor ?? ''
        )
      }
    }, [selectedTheme])

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
