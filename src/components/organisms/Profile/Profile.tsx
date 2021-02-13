import React, { FC, memo, useEffect, useState } from 'react'
import {
  ActionsListItem,
  NameValueListItem,
  BackButton,
  EditButton
} from '@components/atoms'
import { getUserData, logout } from '@api'
import { List, ProfileHeader } from '@components/molecules'
import { ProfileForm, ProfilePasswordForm } from '@components/organisms'
import { IUser } from '@types'
import { initialValues } from '@consts'

type TProfileProps = {}

const Profile: FC<TProfileProps> = memo(() => {
  const [isShowProfileForm, setIsShowProfileForm] = useState<boolean>(false)
  const [userData, setUserData] = useState<IUser>(initialValues)
  const [
    isShowProfilePasswordForm,
    setIsShowProfilePasswordForm
  ] = useState<boolean>(false)

  const isShownForms = isShowProfileForm || isShowProfilePasswordForm

  const handleBackButtonClick = () => {
    setIsShowProfileForm(false)
    setIsShowProfilePasswordForm(false)
  }

  const handleLogoutButtonClick = () => logout()

  useEffect(() => {
    getUserData().then((res) => {
      console.log(res)
      const result = res.data
      result.display_name = ''
      result.firstName = result.first_name
      result.secondName = result.second_name
      delete result.first_name
      delete result.second_name
      setUserData(result)
    })
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
        firstName={userData.firstName}
        secondName={userData.secondName}
        avatar={userData.avatar}
        className="mb-6"
      />

      {!isShownForms && (
        <>
          <List className="mb-12">
            <NameValueListItem name="Email" value={userData.email} />
            <NameValueListItem name="Login" value={userData.login} />
            <NameValueListItem name="First name" value={userData.firstName} />
            <NameValueListItem name="Last name" value={userData.secondName} />
            <NameValueListItem name="Phone number" value={userData.phone} />
            <NameValueListItem name="Password" value="********" />
          </List>

          <List>
            <ActionsListItem
              name="Change password"
              onClick={() => setIsShowProfilePasswordForm(true)}
            />
            <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
          </List>
        </>
      )}

      {isShowProfileForm && <ProfileForm formValues={userData} />}

      {isShowProfilePasswordForm && <ProfilePasswordForm />}
    </div>
  )
})

Profile.displayName = 'Profile'

export default Profile
