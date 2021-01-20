import React, { useRef } from "react";
import deleteIcon from "../../../../assets/icons/close_light.svg";
import ConfirmPopup from "../../Popups/ConfirmPopup";
import {
  StyledFolder,
  StyledBody,
  StyledImg,
  StyledTitle,
  StyledIconDelete,
} from "./index.css";

const File = ({ name, src, id }) => {
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <StyledFolder to="/admin/folder">
      <StyledBody children={src && <StyledImg src={src} alt="thmbImg" />} />
      <StyledTitle children={name} />
      <StyledIconDelete
        src={deleteIcon}
        alt="deleteIcon"
        onClick={handleOpenPopup}
      />
      <ConfirmPopup ref={ref} />
    </StyledFolder>
  );
};

export default File;
