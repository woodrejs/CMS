import styled from "styled-components";

export const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7em;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;
export const StyledTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  padding: 0.2em 1em;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
`;
