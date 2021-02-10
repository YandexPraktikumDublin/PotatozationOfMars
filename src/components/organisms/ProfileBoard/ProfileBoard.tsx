import React, { FC, memo, useState } from 'react'
import classNames from 'classnames'
import {
  ActionsListItem,
  NameValueListItem,
  ProfileBoardBackButton,
  ProfileBoardEditButton
} from '@components/atoms'
import { List, ProfileBoardHeader } from '@components/molecules'
import { ProfileForm, ProfilePasswordForm } from '@components/organisms'

type TProfileBoardProps = {}

const ProfileBoard: FC<TProfileBoardProps> = memo(() => {
  const [isShowProfileForm, setIsShowProfileForm] = useState<boolean>(false)
  const [
    isShowProfilePasswordForm,
    setIsShowProfilePasswordForm
  ] = useState<boolean>(false)

  const isShownForms = isShowProfileForm || isShowProfilePasswordForm

  const handleBackButtonClick = () => {
    setIsShowProfileForm(false)
    setIsShowProfilePasswordForm(false)
  }

  const handleLogoutButtonClick = () => {}

  return (
    <div className={classNames('relative text-primary', 'dark:text-white')}>
      {!isShownForms && (
        <ProfileBoardEditButton onClick={() => setIsShowProfileForm(true)} />
      )}

      {isShownForms && (
        <ProfileBoardBackButton onClick={handleBackButtonClick} />
      )}

      <ProfileBoardHeader className="mb-6" />

      {!isShownForms && (
        <>
          <List className="mb-12">
            <NameValueListItem name="Email" value="ivan@yandex.ru" />
            <NameValueListItem name="Login" value="IvanIvanov" />
            <NameValueListItem name="First name" value="Ivan" />
            <NameValueListItem name="Last name" value="Ivanov" />
            <NameValueListItem name="Phone number" value="+790000000000" />
            <NameValueListItem name="Password" value="••••••" />
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

      {isShowProfileForm && <ProfileForm />}

      {isShowProfilePasswordForm && <ProfilePasswordForm />}
    </div>
  )
})

ProfileBoard.displayName = 'ProfileBoard'

export default ProfileBoard
