import React from 'react';
import { withPage } from '../HOCs/withPage';
import { ProfileTemplate } from '../components/templates/ProfileTemplate';

const Profile = () => {
  return (
    <ProfileTemplate testContent='test'/>
  )
}

export default withPage(Profile, {});