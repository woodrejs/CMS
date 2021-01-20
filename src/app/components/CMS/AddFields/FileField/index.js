import React, { useRef } from "react";
import { StyledArea, StyledIcon, StyledTitle } from "./index.css";
import addIcon from "../../../../assets/icons/add.svg";
import AddPopup from "../../Popups/AddPopup";

const FileField = ({ name, type }) => {
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <StyledArea>
      <StyledTitle children="dodaj" />
      <StyledIcon src={addIcon} alt="add_icon" onClick={handleOpenPopup} />
      <StyledTitle children={name} />
      <AddPopup ref={ref} type={type} />
    </StyledArea>
  );
};
export default FileField;
