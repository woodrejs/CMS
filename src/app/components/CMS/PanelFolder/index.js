import React from "react";
import styled from "styled-components";
import AddArea from "../AddArea";
import Folder from "../Folder";
import Button from "../Button";

const StyledPanel = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
`;
const StyledTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em 5em 1em;
`;
const StyledTitle = styled.h2`
  max-width: 40vw;
  text-transform: uppercase;

  word-wrap: break-word;
  font-size: 13px;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    max-width: 60vw;
  }
`;
const StyledContentArea = styled.div`
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  padding: 1em;
  > * {
    margin: 0 1em 2em 0;
  }

  @media screen and (min-width: 768px) {
    justify-content: unset;
  }
`;

const PanelFolder = ({ className }) => {
  return (
    <StyledPanel className={className}>
      <StyledTopBox>
        <StyledTitle children="folder name" />
        <Button />
      </StyledTopBox>

      <StyledContentArea>
        <AddArea />
        <AddArea />
        <Folder />
      </StyledContentArea>
    </StyledPanel>
  );
};
export default PanelFolder;
