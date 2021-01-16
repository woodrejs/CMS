import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledPopUp = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  width: 80vw;
  max-width: 400px;
  padding: 3.5em 2.5em;
  position: relative;
`;
const StyledText = styled.p`
  min-height: 50px;
  margin-bottom: 1.5em;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
const StyledBtnBox = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    height: 50px;
  }
`;

const PopUpConfirm = () => {
  return (
    <StyledPopUp>
      <StyledText>Czy napewno chcesz usunąć?</StyledText>
      <StyledBtnBox>
        <Button text="tak" size={5} type="primary" />
        <Button text="nie" size={5} type="extra" />
      </StyledBtnBox>
    </StyledPopUp>
  );
};
export default PopUpConfirm;
