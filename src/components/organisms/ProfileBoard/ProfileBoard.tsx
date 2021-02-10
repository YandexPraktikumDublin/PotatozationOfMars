import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { ActionsListItem, NameValueListItem } from '@components/atoms'
import { List } from '@components/molecules'

type TProfileBoardProps = {}

const ProfileBoard: FC<TProfileBoardProps> = memo(() => {
  const handleLogoutButtonClick = () => {}

  return (
    <div className={classNames('text-primary', 'dark:text-white')}>
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
