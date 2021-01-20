import React, { useRef } from "react";
import deleteIcon from "../../../../assets/icons/close_light.svg";
import ConfirmPopup from "../../Popups/ConfirmPopup";
import {
  StyledThumb,
  StyledIconDelete,
  StyledImg,
  StyledMask,
} from "./index.css";

const Thumbnail = ({ src }) => {
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <StyledThumb>
      <StyledMask />

      <StyledImg src={src} alt="thumbnail_img" />
      <StyledIconDelete
        src={deleteIcon}
        alt="delete_icon"
        onClick={handleOpenPopup}
      />
      <ConfirmPopup ref={ref} />
    </StyledThumb>
  );
};
export default Thumbnail;
