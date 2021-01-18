import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
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
const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 0.2em 1em;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
`;

const TextInput = ({ change, name }) => {
  return (
    <StyledBox>
      <StyledLabel children={name} />
      <StyledInput type="text" onChange={(e) => change(e, name)} />
    </StyledBox>
  );
};
export default TextInput;
