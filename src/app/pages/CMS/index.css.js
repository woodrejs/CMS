import styled from "styled-components";

export const StyledBck = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.fourth} 50%,
    ${({ theme }) => theme.colors.secoundary} 50%
  );
  display: flex;
  justify-content: center;
`;
export const StyledCMS = styled.div`
  width: 100%;
  max-width: 1366px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh auto;

  @media screen and (orientation: landscape) {
    grid-template-rows: 15vh auto;
  }
`;
export const StyledListBox = styled.div`
  background: ${({ theme }) => theme.colors.fourth};
  grid-area: 1/1/2/13;
  z-index: 2;
  overflow: hidden;
  @media screen and (min-width: 800px) {
    grid-area: 1/1/3/3;
  }
`;
export const StyledPanelsBox = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  grid-area: 2/1/3/13;
  padding: 1em 1em 0 1em;

  @media screen and (min-width: 800px) {
    grid-area: 1/3/3/13;
    padding: 2em 2em 0 2em;
  }
`;
