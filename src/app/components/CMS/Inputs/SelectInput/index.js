import React from "react";
import {
  StyledBox,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./index.css";

const SelectInput = ({ types, change, name }) => {
  return (
    <StyledBox>
      <StyledLabel htmlFor="inputSelect" children={name} />
      <StyledSelect
        name={name}
        id="inputSelect"
        onChange={(e) => change(e, name)}
      >
        {types.map(({ id, name }) => (
          <StyledOption key={id} value={name} children={name} />
        ))}
      </StyledSelect>
    </StyledBox>
  );
};
export default SelectInput;
