import React from 'react';

import Header from '../Header';
import BottomTabNavigator from '../BottomTabNavigator';

import { Container, MainContent } from './styles';

export default function Layout({ children, title, path }) {
  return (
    <Container>
      <Header title={title}/>
      <MainContent>{children}</MainContent>
      <BottomTabNavigator path={path} />
    </Container>
  );
}
