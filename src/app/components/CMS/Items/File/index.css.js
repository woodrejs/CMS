import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFolder = styled(Link)`
  position: relative;
  cursor: pointer;
`;
export const StyledBody = styled.div`
  background: ${({ theme }) => theme.colors.third};
  border-radius: 3px;
  height: 180px;
  width: 180px;
  overflow: hidden;
`;
export const StyledImg = styled.img`
  width: 100%;
`;
export const StyledTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0.8em;
`;
export const StyledIconDelete = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
`;
