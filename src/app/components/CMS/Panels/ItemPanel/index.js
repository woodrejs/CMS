import React from "react";
import { StyledTextsArea, StyledFilesArea } from "./index.css";
import TemplatePanel from "../TemplatePanel";
import TextField from "../../AddFields/TextField";
import FileField from "../../AddFields/FileField";
import Thumbnail from "../../Items/Thumbnail";

//create store
const ItemPanel = ({ data }) => {
  const getDataFromDB = () => {
    // comment: data from base fn
  };
  const files = data.files;
  return (
    <TemplatePanel>
      <StyledTextsArea>
        {/* comment: here You add AddText fields */}
        <TextField name="title" value={data.title} type="text" />
        <TextField name="subTxt" value={data.subTxt} type="textarea" />
      </StyledTextsArea>
      <StyledFilesArea>
        <FileField type="file" name="zdjecie" />
        {files.map(({ s, id }) => (
          <Thumbnail src={s} key={id} />
        ))}
      </StyledFilesArea>
    </TemplatePanel>
  );
};
export default ItemPanel;
