import { IServerUser } from '@types'

export const normalizeUserKeys = (user: IServerUser) => ({
  id: user.id,
  firstName: user?.first_name ?? '',
  secondName: user?.second_name ?? '',
  displayName: user?.display_name ?? '',
  login: user?.login ?? '',
  email: user?.email ?? '',
  phone: user?.phone ?? '',
  avatar: user?.avatar ?? ''
})
