import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  background: #fff;
  grid-area: bottom;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px;
  height: 100%;
`
export const Tab = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-top: 4px;
  color: #424761;
  opacity: ${props => props.selected ? 1 : 0.7}
`