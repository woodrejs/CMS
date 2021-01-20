import React, { useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import { StyledCart, StyledIconMain, StyledHeader } from "./index.css";
import tickIcon from "../../../../assets/icons/tick_confirm.svg";
import bucketIcon from "../../../../assets/icons/bucket.svg";
import { useCounter } from "../../../../utils/sweetState";

const InfoPopup = ({ type }) => {
  const ref = useRef(null);
  const check = (a, b) => (type === "delete" ? a : b);
  const [
    { deletePopupIsOpen, addPopupIsOpen },
    { toogleDeletePopupIsOpen, toogleAddPopupIsOpen },
  ] = useCounter();
  const isOpen = check(deletePopupIsOpen, addPopupIsOpen);

  useEffect(() => (isOpen ? ref.current.open() : ref.current.close()), [
    isOpen,
  ]);

  return (
    <Popup
      modal
      ref={ref}
      onClose={check(toogleDeletePopupIsOpen, toogleAddPopupIsOpen)}
    >
      <StyledCart>
        <StyledIconMain src={check(bucketIcon, tickIcon)} alt="infoIcon" />
        <StyledHeader children={check("usunięto", "dodano")} />
      </StyledCart>
    </Popup>
  );
};
export default InfoPopup;
