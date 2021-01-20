import styled from "styled-components";

export const StyledArea = styled.div`
  min-width: 200px;
  max-width: 450px;
  padding: 3px;

  display: flex;
  align-items: center;

  border-radius: 4px;
  background: ${({ added, theme }) =>
    added
      ? theme.colors.fifth
      : `linear-gradient(
    to right,
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    to right,
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  )`};

  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 15px 1px, 1px 15px;
`;
export const StyledIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;
export const StyledTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 13px;
  width: 100%;
  padding: 0 0.5em;
`;
export const StyledHeader = styled.h4`
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;
