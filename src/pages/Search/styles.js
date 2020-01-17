import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8vh 92vh;
  grid-template-areas: "header header"
                      "main main"
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  background: #fff;
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: 16px;
  background: #e5e3dd;
  height: 35px;
  border-radius: 15px;
  border: 0;
  padding: 0 14px;
  font-size: 15px;
`;

export const CancelButton = styled(Link)`
  color: #424761;
  font-size: 14px;
  font-weight: bold;
`;

export const MainContent = styled.main`
  background: #e5e3dd;
  grid-area: main;
  padding: 10px 20px 20px;
  overflow-y: scroll; 
  position: relative;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled.button`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 32px);
`;

export const SearchMessage = styled.h1`
  color: rgba(66, 71, 97, 0.7);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

