import React from "react";
import { StyledBox, StyledLabel, StyledTextarea } from "./index.css";

const TextareaInput = ({ name, change }) => {
  return (
    <StyledBox>
      <StyledLabel children={name} />
      <StyledTextarea rows="4" cols="50" onChange={(e) => change(e, name)} />
    </StyledBox>
  );
};
export default TextareaInput;
