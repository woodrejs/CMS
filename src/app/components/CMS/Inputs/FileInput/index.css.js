import styled from "styled-components";

export const StyledLabel = styled.label`
  padding: 3px 50px 3px 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;

  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    );
  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 15px 1px, 1px 15px;
`;
export const StyledInput = styled.input`
  display: none;
`;
export const StyledTitle = styled.div`
  font-size: 14px;
  text-transform: capitalize;
  line-height: 14px;
`;
export const StyledIcon = styled.img`
  height: 2.5em;
  width: 2.5em;
`;
