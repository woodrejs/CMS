import React from "react";
import { StyledLabel, StyledInput, StyledTitle, StyledIcon } from "./index.css";
import AddIcon from "../../../../assets/icons/add_icon.svg";
import TickIcon from "../../../../assets/icons/tick_icon.svg";

const FileInput = ({ name, change, size }) => {
  return (
    <StyledLabel>
      <StyledIcon src={AddIcon} />
      <StyledTitle children={name} />
      <StyledInput type="file" onChange={(e) => change(e, name, size)} />
    </StyledLabel>
  );
};
export default FileInput;
