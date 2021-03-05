export interface IServerUser {
  id: number
  /* eslint-disable camelcase */
  first_name?: string
  second_name?: string
  display_name?: string
  /* eslint-enable camelcase */
  login?: string
  email?: string
  phone?: string
  avatar?: string
}
