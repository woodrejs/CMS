import React from "react";
import { StyledCart, StyledText, StyledBtnBox } from "./index.css";
import Popup from "reactjs-popup";
import Button from "../..//Items/Button";
import { useCounter } from "../../../../utils/sweetState";

const ConfirmPopup = React.forwardRef(({}, ref) => {
  const [_, { toogleDeletePopupIsOpen }] = useCounter();
  const handleClose = () => ref.current.close();
  const handleClick = () => {
    // comment delete fn here
    toogleDeletePopupIsOpen();
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
