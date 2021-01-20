import styled from "styled-components";

export const StyledThumb = styled.div`
  background: red;
  height: 180px;
  width: 180px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;
export const StyledIconDelete = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
  cursor: pointer;
`;
export const StyledImg = styled.img`
  width: 100%;
`;
export const StyledMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.fourth};
  opacity: 0.7;
`;
