import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #fff;
  grid-area: header;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  box-shadow: 0px 5px 20px #00000014;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-right: -59px;
  color: #424761;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled(Link)`
  background: transparent;
  border: 0;
  font-size: 18px;
  margin-right: 16px;
  color: #424761;
  line-height: 0;
`;

export const ProfileButton = styled.button`
  background: transparent;
  color: #424761;
  font-size: 22px;
  border: 0;
  border-radius: 50%;
`;