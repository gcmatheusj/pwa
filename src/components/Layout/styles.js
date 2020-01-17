import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 7vh 86vh 7vh;
  grid-template-areas: "header header"
                      "main main"
                      "bottom bottom"
`;

export const MainContent = styled.main`
  background: #e5e3dd;
  grid-area: main;
  padding: 20px;
  overflow-y: scroll; 
  position: relative;
`;
