import React from 'react';

import { FilterButtonStyled } from './styles';

export default function FilterButton({ children, ...rest }) {
  return (
    <FilterButtonStyled {...rest}>{children}</FilterButtonStyled>
  );
}
