import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '@store/user/fetchUser/actions'
import {
  getUserErrorSelector,
  getUserSelector
} from '@store/user/fetchUser/selectors'
import { Redirect, useLocation } from 'react-router'
import { PATHS } from '@config'
import { getAxiosInstance } from '@api'
import { getEnjoyerSelector } from '@store/enjoyer/fetchEnjoyer/selectors'
import { fetchEnjoyerRequest } from '@store/enjoyer/fetchEnjoyer/actions'
import { getEnjoyerSettingsSelector } from '@store/enjoyerSettings/fetchEnjoyerSettings/selectors'
import { fetchEnjoyerSettingsRequest } from '@store/enjoyerSettings/fetchEnjoyerSettings/actions'
import { getThemesSelector } from '@store/themes/fetchThemes/selectors'
import { fetchThemesRequest } from '@store/themes/fetchThemes/actions'
import { setStyleVariable } from '@utils/misc'

export default function withAuth<T>(Component: React.FC<T>) {
  return (props: any) => {
    const location = useLocation()

    const dispatch = useDispatch()

    const user = useSelector(getUserSelector)
    const errorUser = useSelector(getUserErrorSelector)

    const themes = useSelector(getThemesSelector)
    const enjoyer = useSelector(getEnjoyerSelector)
    const enjoyerSettings = useSelector(getEnjoyerSettingsSelector)

    const isAuthOrSignup =
      location.pathname === PATHS.AUTH || location.pathname === PATHS.SIGNUP

    const isPublicPage =
      location.pathname === PATHS.BASE || location.pathname === PATHS.GAME

    const selectedTheme = useMemo(
      () => themes?.find((theme) => theme.id === enjoyerSettings?.themeId),
      [themes, enjoyerSettings?.themeId]
    )

    useEffect(() => {
      const code = new URLSearchParams(location.search)?.get('code')

      if (!user && code) {
        const redirectUri = window ? window.location.origin : null

        getAxiosInstance()
          .post('oauth/yandex', { code, redirect_uri: redirectUri })
          .then(() => dispatch(fetchUserRequest()))
          .catch()
      }
    }, [])

    useEffect(() => {
      if (!enjoyer) {
        dispatch(fetchEnjoyerRequest())
      }

      if (!user) {
        dispatch(fetchUserRequest())
      }

      if (themes?.length === 0) {
        dispatch(fetchThemesRequest())
      }

      if (!enjoyerSettings) {
        dispatch(fetchEnjoyerSettingsRequest())
      }
    }, [])

    useEffect(() => {
      if (selectedTheme) {
        const primaryColor = selectedTheme.preset?.primaryColor ?? ''
        setStyleVariable('--primaryColor', primaryColor)
      }
    }, [selectedTheme])

    if (user && enjoyer && isAuthOrSignup) {
      return <Redirect to={PATHS.BASE} />
    }

    if (errorUser && !isPublicPage && !isAuthOrSignup) {
      return <Redirect to={PATHS.AUTH} />
    }

    return <Component {...props} />
  }
}
