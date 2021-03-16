import React, { FC } from 'react'
import { withHeaderAndFooter, withAuth } from '@hocs'
import { ProfileTemplate } from '@components/templates'
import { PageMeta } from '@components/atoms'

const Profile: FC = () => (
  <>
    <PageMeta title="Profile" />
    <ProfileTemplate />
  </>
)

export default withAuth(withHeaderAndFooter(Profile))
