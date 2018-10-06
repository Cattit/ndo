import React from 'react';
import Layout from '../../components/Layout';
import Tests from './Tests';

const title = 'Tests';

function action() {
  return {
    chunks: ['tests'],
    title,
    component: (
      <Layout>
        <Tests title={title} />
      </Layout>
    ),
  };
}

export default action;
