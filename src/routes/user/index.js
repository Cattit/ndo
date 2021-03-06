/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import User from './User';

const title = 'User';

async function action({ fetch, params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `query users($users: [String]) {
        users(ids: $users) { 
          id, 
          email,
          profile { displayName,  gender, picture },
          courses { id, title }
        }
      }`,
      variables: {
        users: [params.idUser],
      },
    }),
  });
  const { data } = await resp.json();
  if (!data && !data.users) throw new Error('Failed to load user profile.');
  return {
    chunks: ['user'],
    title,
    component: (
      <Layout>
        <User title={title} id={data.users[0].id} user={data.users[0]} />
      </Layout>
    ),
  };
}

export default action;
