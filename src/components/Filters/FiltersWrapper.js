import React from 'react';

import { FiltersWrapperStyled } from './styles';

export default function FiltersWrapper({ children }) {
  return (
    <FiltersWrapperStyled>{children}</FiltersWrapperStyled>
  );
}
