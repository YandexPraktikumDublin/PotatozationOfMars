import { IServerUser } from '@types'
import { SERVER_URL } from '@config'
import { profile } from '@images'

export const normalizeUser = (user: IServerUser) => ({
  id: user.id,
  firstName: user?.first_name ?? '',
  secondName: user?.second_name ?? '',
  displayName: user?.display_name
    ? user?.display_name
    : `${user?.first_name ?? ''} ${user?.second_name ?? ''}`,
  login: user?.login ?? '',
  email: user?.email ?? '',
  phone: user?.phone ?? '',
  avatar: user?.avatar ? `${SERVER_URL}/${user?.avatar}` : profile
})
