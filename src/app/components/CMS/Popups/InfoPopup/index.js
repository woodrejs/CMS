import React, { useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import tickIcon from "../../../../assets/icons/tick_confirm.svg";
import bucketIcon from "../../../../assets/icons/bucket.svg";

const StyledCart = styled.div`
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
const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`;

const InfoPopup = ({ isOpen, type, handler }) => {
  const ref = useRef(null);
  const src = type === "delete" ? bucketIcon : tickIcon;
  const children = type === "delete" ? "usunięto" : "dodano";

  useEffect(() => (isOpen ? ref.current.open() : ref.current.close()), [
    isOpen,
  ]);

  return (
    <Popup modal ref={ref}>
      <StyledCart onClick={handler}>
        <StyledIconMain src={src} alt="infoIcon" />
        <StyledHeader children={children} />
      </StyledCart>
    </Popup>
  );
};
export default InfoPopup;
