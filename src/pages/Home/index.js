import React from 'react';

import Layout from '../../components/Layout';
import Remider from '../../components/Reminder';
import Story from '../../components/Story';

import { Welcome, Notification } from './styles';

export default function Home({ location }) {
  const { pathname } = location;

  return (
    <Layout title='Iqara Islam' path={pathname}>
      <Welcome>Olá, <strong>GoBacklog</strong>!</Welcome>
      <Notification>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Notification>
      <Story />
      <Story />
      <Story />
      <Story />
      <Remider />
      <Remider />
      <Remider />
    </Layout>
  );
}
