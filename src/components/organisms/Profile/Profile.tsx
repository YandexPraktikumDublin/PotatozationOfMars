import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '@store/user/fetchUser/selectors'
import {
  ActionsListItem,
  NameValueListItem,
  BackButton,
  EditButton
} from '@components/atoms'
import { List, ProfileHeader } from '@components/molecules'
import { ProfileForm, ProfilePasswordForm } from '@components/organisms'
import { logoutRequest } from '@store/logout/actions'
import { useToggle } from '@hooks'

type TProfileProps = {}

const Profile: FC<TProfileProps> = memo(() => {
  const dispatch = useDispatch()

  const user = useSelector(getUserSelector)

  const [isShowProfileForm, toggleProfileForm] = useToggle(false)
  const [isShowPasswordForm, togglePasswordForm] = useToggle(false)

  const isShownForms = isShowProfileForm || isShowPasswordForm

  const handleLogoutButtonClick = () => {
    dispatch(logoutRequest())
  }

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

      {!isShownForms && (
        <EditButton
          onClick={toggleProfileForm}
          className="absolute top-0 right-0"
        />
      )}

      <ProfileHeader className="mb-6" />

      {!isShownForms && (
        <>
          <List className="mb-12">
            <NameValueListItem name="Email" value={user?.email} />
            <NameValueListItem name="Login" value={user?.login} />
            <NameValueListItem name="First name" value={user?.firstName} />
            <NameValueListItem name="Last name" value={user?.secondName} />
            <NameValueListItem name="Display name" value={user?.displayName} />
            <NameValueListItem name="Phone" value={user?.phone} />
            <NameValueListItem name="Password" value="********" />
          </List>

          <List>
            <ActionsListItem
              name="Change password"
              onClick={togglePasswordForm}
            />
            <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
          </List>
        </>
      )}

      {isShowProfileForm && <ProfileForm successCallback={toggleProfileForm} />}

      {isShowPasswordForm && (
        <ProfilePasswordForm successCallback={togglePasswordForm} />
      )}
    </div>
  )
})

Profile.displayName = 'Profile'

export default Profile
