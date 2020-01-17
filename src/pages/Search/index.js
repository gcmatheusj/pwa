import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FiltersWrapper, FilterButton, } from '../../components/Filters'

import { 
  Container,
  SearchHeader, 
  SearchInput,
  CancelButton,
  MainContent,
  Content,
  SearchMessage,
} from './styles';

export default function Search() {
  const [filter, setFilter] = useState('all')

  return (
    <Container>
      <SearchHeader>
        <SearchInput type="text" name="search" placeholder="Pesquisar..."/>
        <CancelButton to="/">Cancelar</CancelButton>
      </SearchHeader>
      <MainContent>
        <FiltersWrapper>
          <FilterButton 
            selected={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            Todos
          </FilterButton>
          <FilterButton
            selected={filter === 'yours'}
            onClick={() => setFilter('yours')}
          >
            Seus
          </FilterButton>
        </FiltersWrapper>
        <Content>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: 84, marginBottom: 20, color: 'rgba(66, 71, 97, 0.5)'}}/>
          <SearchMessage>Qualquer coisa boa começa com uma boa pergunta</SearchMessage>
        </Content>
      </MainContent>
    </Container>
  );
}
