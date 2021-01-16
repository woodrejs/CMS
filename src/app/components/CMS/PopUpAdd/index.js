import React from "react";
import styled from "styled-components";
import CloseDark from "../../../assets/icons/close_dark.svg";

const StyledPopUp = styled.div`
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
const StyledBtn = styled.button`
  padding: 1.2em 3.8em;
  font-size: ${({ size }) => size * 2.5}px;
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.secoundary};

  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;
`;
const StyledIcon = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
`;

const PopUpAdd = ({ children }) => {
  return (
    <StyledPopUp>
      <StyledIcon src={CloseDark} alt="close_icon" />
      {children}

      <StyledBtnBox>
        <StyledBtn children="zapisz" size={5} />
      </StyledBtnBox>
    </StyledPopUp>
  );
};
export default PopUpAdd;
