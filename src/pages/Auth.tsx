import React from 'react';
import { withPage } from '../HOCs/withPage';
import { AuthTemplate } from '../components/templates/AuthTemplate';

const Auth:React.FC = () => {
  return (
    <AuthTemplate testContent='test'/>
  )
}

export default withPage(Auth, {});