import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Button from "../..//Items/Button";

const StyledCart = styled.div`
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

const ConfirmPopup = React.forwardRef(({}, ref) => {
  const handleClose = () => ref.current.close();
  const handleClick = () => {
    // comment delete fn here
    handleClose();
  };
  return (
    <Popup modal ref={ref}>
      <StyledCart>
        <StyledText children="Czy napewno chcesz usunąć?" />
        <StyledBtnBox>
          <Button text="tak" click={handleClick} />
          <Button text="nie" type="extra" click={handleClose} />
        </StyledBtnBox>
      </StyledCart>
    </Popup>
  );
});

export default ConfirmPopup;
