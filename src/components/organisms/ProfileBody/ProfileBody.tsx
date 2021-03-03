import React, { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsListItem, NameValueListItem } from '@components/atoms'
import { List } from '@components/molecules'
import { getUserSelector } from '@store/user/fetchUser/selectors'
import { logoutRequest } from '@store/logout/actions'

type TProfileBodyProps = {
  togglePasswordForm: () => void
}

const ProfileBody: FC<TProfileBodyProps> = memo(
  ({ togglePasswordForm }: TProfileBodyProps) => {
    const dispatch = useDispatch()

    const user = useSelector(getUserSelector)

    const handleLogoutButtonClick = () => {
      dispatch(logoutRequest())
    }

    return (
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
    )
  }
)

ProfileBody.displayName = 'ProfileBody'

export default ProfileBody
