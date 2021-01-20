import React, { useState } from "react";
import { StyledCart, StyledBtnBox, StyledIcon } from "./index.css";
import CloseDark from "../../../../assets/icons/close_dark.svg";
import Button from "../../Items/Button";
import Popup from "reactjs-popup";
import TextareaInput from "../../Inputs/TextareaInput";
import TextInput from "../../Inputs/TextInput";
import FileInput from "../../Inputs/FileInput";
import SelectInput from "../../Inputs/SelectInput";
import { v4 as uuidv4 } from "uuid";
import { useCounter } from "../../../../utils/sweetState";

const types = [
  { id: uuidv4(), name: "folder" },
  { id: uuidv4(), name: "item" },
];

const AddPopup = React.forwardRef(({ type }, ref) => {
  const [inputsData, setInputsData] = useState({});
  const [_, { toogleAddPopupIsOpen }] = useCounter();

  const handleInput = (e, name, size) => {
    setInputsData({ ...inputsData, [size ? size : name]: e.target.value });
  };
  const handleClose = () => ref.current.close();
  const handleClick = () => {
    // comment: add to base fn here
    // id from url plus name

    setInputsData({});
    handleClose();
    toogleAddPopupIsOpen();
  };

  const createInputs = () => {
    switch (type) {
      case "textarea":
        return <TextareaInput name="nazwa pliku" change={handleInput} />;
      case "text":
        return <TextInput name="nazwa pliku" change={handleInput} />;
      case "panelItem":
        return (
          <>
            <TextInput name="nazwa pliku" change={handleInput} />
            <SelectInput name="typ" types={types} change={handleInput} />
          </>
        );
      case "file":
        return (
          <>
            <FileInput name="photo" change={handleInput} size="s" />
            <FileInput name="photo" change={handleInput} size="m" />
            <FileInput name="photo" change={handleInput} size="l" />
          </>
        );

      default:
        return <TextInput name="nazwa pliku" change={handleInput} />;
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
