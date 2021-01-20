import styled from "styled-components";

export const StyledCart = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 400px;
  padding: 3.5em 2.5em;
  position: relative;
`;
export const StyledText = styled.p`
  min-height: 50px;
  margin-bottom: 1.5em;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const StyledBtnBox = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    height: 50px;
  }
`;
