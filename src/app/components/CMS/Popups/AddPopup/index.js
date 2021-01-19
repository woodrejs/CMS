import React, { useState } from "react";
import styled from "styled-components";
import CloseDark from "../../../../assets/icons/close_dark.svg";
import Button from "../../Items/Button";
import Popup from "reactjs-popup";
import TextareaInput from "../../Inputs/TextareaInput";
import TextInput from "../../Inputs/TextInput";
import SelectInput from "../../Inputs/SelectInput";
import { v4 as uuidv4 } from "uuid";

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

const types = [
  { id: uuidv4(), name: "folder" },
  { id: uuidv4(), name: "item" },
];

const AddPopup = React.forwardRef(({ type }, ref) => {
  const [inputsData, setInputsData] = useState();

  const handleClose = () => ref.current.close();
  const handleClick = () => {
    // comment: add to base fn here
    handleClose();
  };
  const handleChange = () => {
    // comment: state update fn
  };
  const createInputs = () => {
    switch (type) {
      case "textarea":
        return <TextareaInput name="nazwa pliku" change={handleChange} />;
      case "text":
        return <TextInput name="nazwa pliku" change={handleChange} />;
      case "panelItem":
        return (
          <>
            <TextInput name="nazwa pliku" change={handleChange} />
            <SelectInput name="typ" types={types} change={handleChange} />
          </>
        );

      default:
        return <TextInput name="nazwa pliku" change={handleChange} />;
    }
  };

  return (
    <Popup ref={ref} modal>
      <StyledCart>
        <StyledIcon src={CloseDark} alt="close_icon" onClick={handleClose} />
        {createInputs()}
        <StyledBtnBox>
          <Button text="dodaj" click={handleClick} />
        </StyledBtnBox>
      </StyledCart>
    </Popup>
  );
});
export default AddPopup;
