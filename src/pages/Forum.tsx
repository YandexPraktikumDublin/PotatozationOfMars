import React from 'react';
import { withPage } from '../HOCs/withPage';
import { ForumTemplate } from '../components/templates/ForumTemplate';

const Forum = () => {
  return (
    <ForumTemplate testContent='test'/>
  )
}

export default withPage(Forum, {});