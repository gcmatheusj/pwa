import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookmark } from '@fortawesome/free-solid-svg-icons'

import { Container, Navigation, Tab } from './styles';

export default function BottomTabNavigator({ path }) {
  return (
    <Container>
      <Navigation>
        <Tab to="/" selected={path === '/'}>
          <FontAwesomeIcon icon={faHome} style={{ fontSize: 22 }} />
          Home
        </Tab>
        <Tab to="/saved" selected={path === '/saved'}>
        <FontAwesomeIcon icon={faBookmark} style={{ fontSize: 22 }}/>
          Salvos
        </Tab>
      </Navigation>
    </Container>
  );
}
