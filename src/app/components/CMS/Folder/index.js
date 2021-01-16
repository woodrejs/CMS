import React from "react";
import styled from "styled-components";
import Close_icon from "../../../assets/icons/close_light.svg";
//tmp
import Closes_icon from "../../../assets/icons/close_dark.svg";

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
const StyledIconClose = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1;
`;
const Folder = () => {
  return (
    <StyledFolder>
      <StyledBody>
        <StyledImg src={Closes_icon} alt="thumb_img" />
      </StyledBody>
      <StyledTitle children="folder name" />
      <StyledIconClose src={Close_icon} alt="close_icon" />
    </StyledFolder>
  );
};

export default Folder;
