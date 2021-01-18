import React from "react";
import styled from "styled-components";

const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7em;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;
const StyledTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  padding: 0.2em 1em;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
`;

const TextareaInput = ({ name, change }) => {
  return (
    <StyledBox>
      <StyledLabel children={name} />
      <StyledTextarea rows="4" cols="50" onChange={(e) => change(e, name)} />
    </StyledBox>
  );
};
export default TextareaInput;
