import React from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ProfileTemplate } from '@components/templates'

const Profile = () => {
  return <ProfileTemplate />
}

export default withHeaderAndFooter(Profile)
