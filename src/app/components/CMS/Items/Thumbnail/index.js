import React, { useRef } from "react";
import styled from "styled-components";
import deleteIcon from "../../../../assets/icons/close_light.svg";
import ConfirmPopup from "../../Popups/ConfirmPopup";

const StyledThumb = styled.div`
  background: red;
  height: 180px;
  width: 180px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;
const StyledIconDelete = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
  cursor: pointer;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const StyledMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.fourth};
  opacity: 0.7;
`;

const Thumbnail = ({ imgSrc }) => {
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <StyledThumb>
      <StyledMask />

      <StyledImg src={imgSrc} alt="thumbnail_img" />
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
