import styled from 'styled-components';

export const FiltersWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButtonStyled = styled.button`
  border-radius: 20px;
  background: ${props => props.selected ? 'rgba(244, 239, 227, 0.8)' : '#fff'};
  border: 0;
  height: 32px;
  padding: 0 20px;
  color: #424761;
  font-size: 14px;
  font-weight: bold;
  margin: 0 8px;
`;