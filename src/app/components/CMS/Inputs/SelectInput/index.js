import React from "react";
import styled from "styled-components";
import DropArrow from "../../../../assets/icons/drop_arrow.svg";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7em;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;
const StyledSelect = styled.select`
  height: 40px;
  width: 100%;
  padding: 0.2em 1em;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
  appearance: none;
  background-image: url(${DropArrow});
  background-repeat: no-repeat, repeat;
  background-position: right 1px top 50%, 0 0;
  cursor: pointer;
`;
const StyledOption = styled.option`
  height: 40px;
  width: 100%;
`;

const SelectInput = ({ types, change, name }) => {
  return (
    <StyledBox>
      <StyledLabel htmlFor="inputSelect" children={name} />
      <StyledSelect
        name={name}
        id="inputSelect"
        onChange={(e) => change(e, name)}
      >
        {types.map(({ id, name }) => (
          <StyledOption key={id} value={name} children={name} />
        ))}
      </StyledSelect>
    </StyledBox>
  );
};
export default SelectInput;
