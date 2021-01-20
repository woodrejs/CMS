import styled from "styled-components";

export const StyledCart = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 400px;
  padding: 3.5em 2.5em;
  position: relative;
`;
export const StyledBtnBox = styled.div`
  height: 2em;
  margin-top: 5em;
  display: flex;
  align-items: center;
`;
export const StyledIcon = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;
