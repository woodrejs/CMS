import React from "react";
import styled from "styled-components";
import DropArrow from "../../../assets/icons/drop_arrow.svg";

const StyledSelect = styled.select`
  height: 40px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
  appearance: none;
  background-image: url(${DropArrow});
  background-repeat: no-repeat, repeat;
  background-position: right 1px top 50%, 0 0;
  cursor: pointer;
  margin-top: 2em;
`;
const StyledOption = styled.option`
  height: 40px;
  width: 100%;
`;

const InputSelect = () => {
  return (
    <StyledSelect name="" id="">
      <StyledOption value="">1</StyledOption>
      <StyledOption value="">2</StyledOption>
      <StyledOption value="">3</StyledOption>
      <StyledOption value="">4</StyledOption>
    </StyledSelect>
  );
};
export default InputSelect;
