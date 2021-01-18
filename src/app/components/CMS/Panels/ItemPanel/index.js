import React from "react";
import styled from "styled-components";
import TemplatePanel from "../TemplatePanel";
import TextField from "../../AddFields/TextField";
import FileField from "../../AddFields/FileField";
import Thumbnail from "../../Items/Thumbnail";

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
    margin: 0 1em 1em 0;
  }

  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 800px) {
    grid-area: 2/2/4/3;
    justify-content: flex-end;
  }
`;

//create store
const ItemPanel = () => {
  return (
    <TemplatePanel>
      <StyledTextsArea>
        {/* comment: here You add AddText fields */}
        <TextField />
        <TextField />
        <TextField />
        <TextField />
      </StyledTextsArea>
      <StyledFilesArea>
        {/* comment: here You add AddText AddFile & Thumbnails */}
        <FileField />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </StyledFilesArea>
    </TemplatePanel>
  );
};
export default ItemPanel;
