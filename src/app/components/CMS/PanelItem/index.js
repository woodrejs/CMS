import React from "react";
import styled from "styled-components";
import AddField from "../AddField";
import AddArea from "../AddArea";
import Thumbnail from "../Thumbnail";
import Button from "../Button";

const StyledPanel = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;

  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 6fr 4fr;
`;
const StyledTopBox = styled.div`
  grid-area: 1/1/2/3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
const StyledTextsArea = styled.div`
  grid-area: 2/1/3/3;
  padding: 1em;

  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  > * {
    margin-bottom: 2em;
  }

  @media screen and (min-width: 800px) {
    grid-area: 2/1/4/2;
  }
`;
const StyledFilesArea = styled.div`
  grid-area: 3/1/4/3;
  padding: 1em;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;

  > * {
    margin: 0 1em 2em 0;
  }

  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 800px) {
    grid-area: 2/2/4/3;
    justify-content: flex-end;
  }
`;

const PanelItem = () => {
  return (
    <StyledPanel>
      <StyledTopBox>
        <StyledTitle children=" SUBFOLDER" />
        <Button text="wroc" size={4} />
      </StyledTopBox>

      <StyledTextsArea>
        <AddField />
      </StyledTextsArea>
      <StyledFilesArea>
        <AddArea />
        <Thumbnail />
      </StyledFilesArea>
    </StyledPanel>
  );
};
export default PanelItem;

/*

const StyledFilesArea = styled.div`
  grid-area: 3/1/4/3;
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  > * {
    margin: 0 1em 2em 1em;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 800px) {
    grid-area: 2/2/4/3;
  }
`;

*/
