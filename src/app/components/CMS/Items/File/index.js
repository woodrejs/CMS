import React, { useRef } from "react";
import styled from "styled-components";
import deleteIcon from "../../../../assets/icons/close_light.svg";
import ConfirmPopup from "../../Popups/ConfirmPopup";

const StyledFolder = styled.div`
  position: relative;
  cursor: pointer;
`;
const StyledBody = styled.div`
  background: ${({ theme }) => theme.colors.third};
  border-radius: 3px;
  height: 180px;
  width: 180px;
  overflow: hidden;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const StyledTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0.8em;
`;
const StyledIconDelete = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
`;

const File = ({ name, type, imgSrc }) => {
  const ref = useRef(null);
  const handleOpenPopup = () => ref.current.open();

  return (
    <StyledFolder>
      <StyledBody>
        {type === "item" && <StyledImg src={imgSrc} alt="thmbImg" />}
      </StyledBody>
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
