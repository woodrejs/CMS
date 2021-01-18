import React from "react";
import styled from "styled-components";
import addIcon from "../../../../assets/icons/add.svg";

const StyledArea = styled.section`
  height: 180px;
  width: 180px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      ${({ theme }) => theme.colors.third} 70%,
      rgba(255, 255, 255, 0) 0%
    );
  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 15px 1px, 1px 15px;
`;
const StyledIcon = styled.img`
  height: 45px;
  width: 45px;
`;
const StyledTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  width: 6ch;
  font-size: 13px;
  margin: 1em 0;
`;

const FileField = ({ name, children, click }) => {
  return (
    <StyledArea>
      <StyledTitle children="dodaj" />
      <StyledIcon src={addIcon} alt="add_icon" />
      <StyledTitle children={name} />
    </StyledArea>
  );
};
export default FileField;
