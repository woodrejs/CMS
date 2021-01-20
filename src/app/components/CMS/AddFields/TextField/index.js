import React, { useRef, useState } from "react";
import { StyledArea, StyledIcon, StyledTitle, StyledHeader } from "./index.css";
import addIcon from "../../../../assets/icons/add.svg";
import tickIcon from "../../../../assets/icons/tick_icon.svg";
import AddPopup from "../../Popups/AddPopup";

// comment: text name come from db
const TextField = ({ name, type, value }) => {
  console.log(value);
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <>
      <StyledHeader children={name} />
      <StyledArea added={value ? true : false}>
        <StyledIcon
          src={value ? tickIcon : addIcon}
          alt="add_icon"
          onClick={handleOpenPopup}
        />
        <StyledTitle children={value} />
      </StyledArea>
      <AddPopup ref={ref} type={type} />
    </>
  );
};
export default TextField;
