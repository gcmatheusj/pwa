import React from 'react';

import Layout from '../../components/Layout';
import { FiltersWrapper, FilterButton, } from '../../components/Filters'

// import { Container } from './styles';

export default function Saved({ location }) {
  const { pathname } = location;

  return (
    <Layout title='Lembretes Salvos' path={pathname}>
      <FiltersWrapper>
        <FilterButton>Ideias</FilterButton>
        <FilterButton>Tópicos</FilterButton>
        <FilterButton>Stashes</FilterButton>
      </FiltersWrapper>
    </Layout>
  );
}
