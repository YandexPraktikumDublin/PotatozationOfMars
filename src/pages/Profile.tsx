import React, { FC } from 'react'
import { withHeaderAndFooter } from '@hocs'
import { ProfileTemplate } from '@components/templates'

const Profile: FC = () => <ProfileTemplate />

export default withHeaderAndFooter(Profile)
