import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Button from "../../Button";
import InfoPopup from "../InfoPopup";

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

const ConfirmPopup = ({ isOpen, handler }) => {
  const ref = useRef(null);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  const handleInfoPopup = () => setIsInfoPopupOpen(!isInfoPopupOpen);

  const handleDelete = () => {
    //here You add delete fn
    handler();
    handleInfoPopup();
  };

  useEffect(() => (isOpen ? ref.current.open() : ref.current.close()), [
    isOpen,
  ]);

  return (
    <>
      <Popup modal ref={ref}>
        <StyledCart>
          <StyledText>Czy napewno chcesz usunąć?</StyledText>
          <StyledBtnBox>
            <Button text="tak" size={5} type="primary" click={handleDelete} />
            <Button text="nie" size={5} type="extra" click={handler} />
          </StyledBtnBox>
        </StyledCart>
      </Popup>
      <InfoPopup
        isOpen={isInfoPopupOpen}
        type="delete"
        handler={handleInfoPopup}
      />
    </>
  );
};
export default ConfirmPopup;
