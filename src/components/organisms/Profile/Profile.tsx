import React, { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserSelector } from '@store/user/fetchUser/selectors'
import { getEnjoyerSettingsSelector } from '@store/enjoyerSettings/fetchEnjoyerSettings/selectors'
import { BackButton, EditButton } from '@components/atoms'
import { ProfileHeader } from '@components/molecules'
import {
  ProfileForm,
  ProfileBody,
  ProfilePasswordForm,
  ProfileThemeForm
} from '@components/organisms'
import { useToggle } from '@hooks'

type TProfileProps = {}

const Profile: FC<TProfileProps> = memo(() => {
  const user = useSelector(getUserSelector)
  const enjoyerSettings = useSelector(getEnjoyerSettingsSelector)

  const [isShowProfileForm, toggleProfileForm] = useToggle(false)
  const [isShowPasswordForm, togglePasswordForm] = useToggle(false)
  const [isShowThemeForm, toggleThemedForm] = useToggle(false)

  const isShownForms =
    isShowProfileForm || isShowPasswordForm || isShowThemeForm

  useEffect(() => {
    if (isShowProfileForm) {
      toggleProfileForm()
    }

    if (isShowPasswordForm) {
      togglePasswordForm()
    }
  }, [user])

  useEffect(() => {
    if (isShowThemeForm) {
      toggleThemedForm()
    }
  }, [enjoyerSettings])

  return (
    <div className="relative">
      {isShowProfileForm && (
        <BackButton
          onClick={toggleProfileForm}
          className="absolute top-0 left-0"
        />
      )}

      {isShowPasswordForm && (
        <BackButton
          onClick={togglePasswordForm}
          className="absolute top-0 left-0"
        />
      )}

      {isShowThemeForm && (
        <BackButton
          onClick={toggleThemedForm}
          className="absolute top-0 left-0"
        />
      )}

      {!isShownForms && (
        <EditButton
          onClick={toggleProfileForm}
          className="absolute top-0 right-0"
        />
      )}

      <ProfileHeader className="mb-6" />

      {!isShownForms && (
        <ProfileBody
          togglePasswordForm={togglePasswordForm}
          toggleThemeForm={toggleThemedForm}
        />
      )}

      {isShowProfileForm && <ProfileForm />}

      {isShowPasswordForm && <ProfilePasswordForm />}

      {isShowThemeForm && <ProfileThemeForm />}
    </div>
  )
})

Profile.displayName = 'Profile'

export default Profile
