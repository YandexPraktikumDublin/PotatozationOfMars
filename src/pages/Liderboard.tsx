import React from 'react';
import { withPage } from '../HOCs/withPage';
import { LiderboardTemplate } from '../components/templates/LiderboardTemplate';

const Liderboard = () => {
  return (
    <LiderboardTemplate testContent='test'/>
  )
}

export default withPage(Liderboard, {});