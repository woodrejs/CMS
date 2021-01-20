import React from "react";
import { StyledContentArea } from "./index.css";
import TemplatePanel from "../TemplatePanel";
import FileField from "../../AddFields/FileField";
import File from "../../Items/File";

//have to add check if folder contain folder or items
//types when select input used [{ id, name }]

const MainPanel = ({ data }) => {
  const getDataFromDB = () => {
    // comment: data from base fn
  };
  return (
    <TemplatePanel>
      <StyledContentArea>
        <FileField name="folder" type="panelItem" />
        {data.map(({ type, name, id, src }) => {
          switch (type) {
            case "folder":
              return <File key={id} name={name} id={id} />;
            case "itemsFolder":
              return <File key={id} name={name} id={id} />;
            case "item":
              return <File key={id} name={name} id={id} src={src} />;
            default:
              break;
          }
        })}
      </StyledContentArea>
    </TemplatePanel>
  );
};
export default MainPanel;

/*
const types = [
  { id: uuidv4(), name: "folder" },
  { id: uuidv4(), name: "item" },
];
*/
