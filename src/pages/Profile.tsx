import React, { FC } from 'react'
import { withHeaderAndFooter, withAuth } from '@hocs'
import { ProfileTemplate } from '@components/templates'

const Profile: FC = () => <ProfileTemplate />

export default withAuth(withHeaderAndFooter(Profile))
