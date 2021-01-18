import React from "react";
import styled from "styled-components";
import CloseDark from "../../../../assets/icons/close_dark.svg";
import Button from "../../Button";

const StyledCart = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 400px;
  padding: 3.5em 2.5em;
  position: relative;
`;
const StyledBtnBox = styled.div`
  height: 2em;
  margin-top: 5em;
  display: flex;
  align-items: center;
`;
const StyledIcon = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;

const TemplatePopup = ({ children, click }) => {
  return (
    <StyledCart>
      <StyledIcon src={CloseDark} alt="close_icon" onClick={close} />
      {children}
      <StyledBtnBox>
        <Button size={5} text="dodaj" click={() => click(close)} />
      </StyledBtnBox>
    </StyledCart>
  );
};
export default TemplatePopup;
