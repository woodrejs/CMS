import styled from "styled-components";

export const StyledCart = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 200px;
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const StyledIconMain = styled.img`
  height: 80px;
  margin: 1em 0;
`;
export const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`;
