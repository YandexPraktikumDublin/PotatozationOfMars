import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { NameValueList } from '@components/molecules'
import { NameValueListItem } from '@components/atoms'

type TProfileBoardProps = {}

const ProfileBoard: FC<TProfileBoardProps> = memo(() => (
  <div className={classNames('text-primary', 'dark:text-white')}>
    <NameValueList className="mb-12">
      <NameValueListItem name="Email" value="ivan@yandex.ru" />
      <NameValueListItem name="Login" value="IvanIvanov" />
      <NameValueListItem name="First name" value="Ivan" />
      <NameValueListItem name="Last name" value="Ivanov" />
      <NameValueListItem name="Phone number" value="+790000000000" />
      <NameValueListItem name="Password" value="••••••" />
    </NameValueList>
  </div>
))

ProfileBoard.displayName = 'ProfileBoard'

export default ProfileBoard
