import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import TemplatePanel from "../TemplatePanel";
import FileField from "../../AddFields/FileField";
import File from "../../Items/File";

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

//have to add check if folder contain folder or items
//types when select input used [{ id, name }]
const types = [
  { id: uuidv4(), name: "folder" },
  { id: uuidv4(), name: "item" },
];

const MainPanel = () => {
  return (
    <TemplatePanel>
      <StyledContentArea>
        {/* comment: here You add AddFile & File */}
        <FileField />
        <FileField />
        <File />
        <File />
        <File />
        <File />
      </StyledContentArea>
    </TemplatePanel>
  );
};
export default MainPanel;
