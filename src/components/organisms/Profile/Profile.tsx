import React, { FC, memo, useEffect, useState, useCallback } from 'react'
import {
  ActionsListItem,
  NameValueListItem,
  BackButton,
  EditButton
} from '@components/atoms'
import { List, ProfileHeader } from '@components/molecules'
import { ProfileForm, ProfilePasswordForm } from '@components/organisms'
import { getUserData, logout } from '@api'
import { IUser } from '@types'
import { useHistory } from 'react-router-dom'
import { PATHS } from '@config'

type TProfileProps = {}

const Profile: FC<TProfileProps> = memo(() => {
  const history = useHistory()

  const [isShowProfileForm, setIsShowProfileForm] = useState<boolean>(false)
  const [userData, setUserData] = useState<IUser>()
  const [isShowPasswordForm, setIsShowPasswordForm] = useState<boolean>(false)

  const isShownForms = isShowProfileForm || isShowPasswordForm

  const handleBackButtonClick = () => {
    setIsShowProfileForm(false)
    setIsShowPasswordForm(false)
  }

  const handleLogoutButtonClick = useCallback(() => {
    logout()
      .then(() => history.push(PATHS.AUTH))
      .catch()
  }, [logout, PATHS.AUTH])

  const getUserDataHandler = useCallback(() => {
    getUserData()
      .then((result) => {
        setUserData({
          id: result?.data?.id,
          firstName: result?.data?.first_name,
          secondName: result?.data?.second_name,
          displayName: result?.data?.display_name,
          login: result?.data?.login,
          email: result?.data?.email,
          phone: result?.data?.phone,
          avatar: result?.data?.avatar
        })
      })
      .catch()
  }, [getUserData])

  const handleSuccessUserDataUpdate = useCallback(() => {
    setIsShowProfileForm(false)
    getUserDataHandler()
  }, [getUserDataHandler])

  useEffect(() => {
    getUserDataHandler()
  }, [])

  return (
    <div className="relative">
      {!isShownForms && (
        <EditButton
          onClick={() => setIsShowProfileForm(true)}
          className="absolute top-0 right-0"
        />
      )}

      {isShownForms && (
        <BackButton
          onClick={handleBackButtonClick}
          className="absolute top-0 left-0"
        />
      )}

      <ProfileHeader
        firstName={userData?.firstName}
        secondName={userData?.secondName}
        avatar={userData?.avatar}
        onSuccessAvatarUpdate={() => getUserDataHandler()}
        className="mb-6"
      />

      {!isShownForms && (
        <>
          <List className="mb-12">
            <NameValueListItem name="Email" value={userData?.email} />
            <NameValueListItem name="Login" value={userData?.login} />
            <NameValueListItem name="First name" value={userData?.firstName} />
            <NameValueListItem name="Last name" value={userData?.secondName} />
            <NameValueListItem
              name="Display name"
              value={userData?.displayName}
            />
            <NameValueListItem name="Phone" value={userData?.phone} />
            <NameValueListItem name="Password" value="********" />
          </List>

          <List>
            <ActionsListItem
              name="Change password"
              onClick={() => setIsShowPasswordForm(true)}
            />
            <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
          </List>
        </>
      )}

      {isShowProfileForm && (
        <ProfileForm
          userData={userData}
          successCallback={handleSuccessUserDataUpdate}
        />
      )}

      {isShowPasswordForm && (
        <ProfilePasswordForm
          successCallback={() => setIsShowPasswordForm(false)}
        />
      )}
    </div>
  )
})

Profile.displayName = 'Profile'

export default Profile
