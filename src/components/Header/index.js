import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { 
  Container,
  TitleWrapper,
  Title,
  ActionsWrapper,
  SearchButton,
  ProfileButton
} from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <ActionsWrapper>
        <SearchButton to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
        <ProfileButton>
          <FontAwesomeIcon icon={faUserCircle} />
        </ProfileButton>
      </ActionsWrapper>
    </Container>
  );
}
