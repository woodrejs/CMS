import React from "react";
import List from "../../components/CMS/Items/List";
import InfoPopup from "../../components/CMS/Popups/InfoPopup";
import MainPanel from "../../components/CMS/Panels/MainPanel";
import ItemPanel from "../../components/CMS/Panels/ItemPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  StyledBck,
  StyledCMS,
  StyledListBox,
  StyledPanelsBox,
} from "./index.css";

const fantomState = [
  {
    name: "kategorie",
    id: uuidv4(),
    type: "folder",
    items: [],
    folders: [
      {
        name: "kategoria1",
        id: uuidv4(),
        type: "itemsFolder",
        items: [],
        folders: [],
      },
      {
        name: "kategoria2",
        id: uuidv4(),
        type: "itemsFolder",
        items: [],
        folders: [],
      },
    ],
  },
  {
    name: "galeria",
    id: uuidv4(),
    type: "itemsFolder",
    items: [
      {
        name: "photo1",
        id: uuidv4(),
        type: "item",
        files: [{}],
      },
      {
        name: "photo2",
        id: uuidv4(),
        type: "item",
        title: "subText..",
        subTxt: "",
        files: [
          { src: { id: uuidv4(), s: "#", m: "#", l: "#" } },
          { src: { id: uuidv4(), s: "#", m: "#", l: "#" } },
          { src: { id: uuidv4(), s: "#", m: "#", l: "#" } },
          { src: { id: uuidv4(), s: "#", m: "#", l: "#" } },
        ],
      },
    ],
    folders: [],
  },
];

const CMS = () => {
  return (
    <Router>
      <StyledBck>
        <StyledCMS>
          <StyledListBox>
            <List />
          </StyledListBox>
          <StyledPanelsBox>
            {/* router with panels */}

            <Switch>
              <Route
                component={() => <MainPanel data={fantomState} />}
                path="/admin/folder"
              />
              <Route
                component={() => <ItemPanel data={fantomState[1].items[1]} />}
                path="/admin/item"
              />
              <Route />
            </Switch>
          </StyledPanelsBox>
        </StyledCMS>
        {/* Popups */}
        <InfoPopup type="delete" />
        <InfoPopup type="add" />
      </StyledBck>
    </Router>
  );
};

export default CMS;
