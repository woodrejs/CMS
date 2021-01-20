import React from "react";
import { StyledBox, StyledLabel, StyledInput } from "./index.css";

const TextInput = ({ change, name }) => {
  return (
    <StyledBox>
      <StyledLabel children={name} />
      <StyledInput type="text" onChange={(e) => change(e, name)} />
    </StyledBox>
  );
};
export default TextInput;
