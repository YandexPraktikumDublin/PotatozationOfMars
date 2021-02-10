import React, { FC, memo } from 'react'
import classNames from 'classnames'
import {
  ActionsListItem,
  NameValueListItem,
  ProfileBoardEditButton
} from '@components/atoms'
import { List, ProfileBoardHeader } from '@components/molecules'

type TProfileBoardProps = {}

const ProfileBoard: FC<TProfileBoardProps> = memo(() => {
  const handleEditButtonClick = () => {}

  const handleLogoutButtonClick = () => {}

  return (
    <div className={classNames('relative text-primary', 'dark:text-white')}>
      <ProfileBoardEditButton onClick={handleEditButtonClick} />

      <ProfileBoardHeader className="mb-6" />

      <List className="mb-12">
        <NameValueListItem name="Email" value="ivan@yandex.ru" />
        <NameValueListItem name="Login" value="IvanIvanov" />
        <NameValueListItem name="First name" value="Ivan" />
        <NameValueListItem name="Last name" value="Ivanov" />
        <NameValueListItem name="Phone number" value="+790000000000" />
        <NameValueListItem name="Password" value="••••••" />
      </List>

      <List>
        <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
      </List>
    </div>
  )
})

ProfileBoard.displayName = 'ProfileBoard'

export default ProfileBoard
