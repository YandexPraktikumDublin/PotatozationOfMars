import React, { FC, memo, useState } from 'react'
import classNames from 'classnames'
import {
  ActionsListItem,
  NameValueListItem,
  ProfileBoardEditButton
} from '@components/atoms'
import { List, ProfileBoardHeader } from '@components/molecules'
import { ProfileForm } from '@components/organisms'

type TProfileBoardProps = {}

const ProfileBoard: FC<TProfileBoardProps> = memo(() => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false)

  const handleLogoutButtonClick = () => {}

  return (
    <div className={classNames('relative text-primary', 'dark:text-white')}>
      {!isShowForm && (
        <ProfileBoardEditButton onClick={() => setIsShowForm(true)} />
      )}

      <ProfileBoardHeader className="mb-6" />

      {!isShowForm && (
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
            <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
          </List>
        </>
      )}

      {isShowForm && <ProfileForm />}
    </div>
  )
})

ProfileBoard.displayName = 'ProfileBoard'

export default ProfileBoard
