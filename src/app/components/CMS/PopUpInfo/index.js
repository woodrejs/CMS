import React from "react";
import styled from "styled-components";
import Tick_confirm from "../../../assets/icons/tick_confirm.svg";
import Close_icon from "../../../assets/icons/close_dark.svg";
// align-items: space-around;

const StyledPopUp = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 200px;
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const StyledIconMain = styled.img`
  height: 80px;
  margin: 1em 0;
`;
const StyledIconClose = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;
const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`;

const PopUpInfo = () => {
  return (
    <StyledPopUp>
      <StyledIconClose src={Close_icon} alt="close_icon" />
      <StyledIconMain src={Tick_confirm} alt="confirm_icon" />
      <StyledHeader children="dodano" />
    </StyledPopUp>
  );
};
export default PopUpInfo;
