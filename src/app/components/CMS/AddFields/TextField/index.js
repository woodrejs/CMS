import React from "react";
import styled from "styled-components";
import addIcon from "../../../../assets/icons/add.svg";
import Tick_icon from "../../../../assets/icons/tick_icon.svg";

const StyledArea = styled.div`
  min-width: 200px;
  max-width: 450px;
  padding: 3px;

  display: flex;
  align-items: center;

  border-radius: 4px;
  background: ${({ added, theme }) =>
    added
      ? theme.colors.fifth
      : `linear-gradient(
    to right,
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    to right,
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  ),
  linear-gradient(
    ${theme.colors.third} 70%,
    rgba(255, 255, 255, 0) 0%
  )`};

  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 15px 1px, 1px 15px;
`;
const StyledIcon = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;
const StyledTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 13px;
  width: 100%;
  padding: 0 0.5em;
`;
const StyledHeader = styled.h4`
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;

const TextField = ({ name, children, click }) => {
  return (
    <div>
      <StyledHeader>{name}</StyledHeader>
      <StyledArea added={false}>
        <StyledIcon src={addIcon} alt="add_icon" />
        <StyledTitle children={`dodaj ${name}`} />
      </StyledArea>
    </div>
  );
};
export default TextField;
