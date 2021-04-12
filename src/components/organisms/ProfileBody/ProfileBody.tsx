import React, { FC, memo, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsListItem, NameValueListItem } from '@components/atoms'
import { List } from '@components/molecules'
import { getUserSelector } from '@store/user/fetchUser/selectors'
import { logoutRequest } from '@store/logout/actions'
import { getUserSettingsSelector } from '@store/userSettings/fetchUserSettings/selectors'
import { getThemesSelector } from '@store/themes/fetchThemes/selectors'

type TProfileBodyProps = {
  togglePasswordForm: () => void
  toggleThemeForm: () => void
}

const ProfileBody: FC<TProfileBodyProps> = memo(
  ({ togglePasswordForm, toggleThemeForm }: TProfileBodyProps) => {
    const dispatch = useDispatch()

    const user = useSelector(getUserSelector)
    const userSettings = useSelector(getUserSettingsSelector)
    const themes = useSelector(getThemesSelector)

    const selectedTheme = useMemo(
      () => themes?.find((theme) => theme.id === userSettings?.themeId),
      [themes, userSettings?.themeId]
    )

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
          <NameValueListItem
            name="Selected theme"
            value={selectedTheme?.name}
          />
        </List>

        <List>
          <ActionsListItem
            name="Change password"
            onClick={togglePasswordForm}
          />
          <ActionsListItem name="Change theme" onClick={toggleThemeForm} />
          <ActionsListItem name="Log out" onClick={handleLogoutButtonClick} />
        </List>
      </>
    )
  }
)

ProfileBody.displayName = 'ProfileBody'

export default ProfileBody
