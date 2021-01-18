import React from "react";
import styled from "styled-components";
import List from "../../components/CMS/Items/List";

import MainPanel from "../../components/CMS/Panels/MainPanel";
import ItemPanel from "../../components/CMS/Panels/ItemPanel";

//cms
const StyledBck = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.fourth} 50%,
    ${({ theme }) => theme.colors.secoundary} 50%
  );
  display: flex;
  justify-content: center;
`;
const StyledCMS = styled.div`
  width: 100%;
  max-width: 1366px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh auto;

  @media screen and (orientation: landscape) {
    grid-template-rows: 15vh auto;
  }
`;
//list
const StyledListBox = styled.div`
  background: ${({ theme }) => theme.colors.fourth};
  grid-area: 1/1/2/13;
  z-index: 2;
  overflow: hidden;
  @media screen and (min-width: 800px) {
    grid-area: 1/1/3/3;
  }
`;
//panel
const StyledPanelsBox = styled.div`
  background: ${({ theme }) => theme.colors.secoundary};
  grid-area: 2/1/3/13;
  padding: 1em 1em 0 1em;

  @media screen and (min-width: 800px) {
    grid-area: 1/3/3/13;
    padding: 2em 2em 0 2em;
  }
`;

const CMS = () => {
  return (
    <StyledBck>
      <StyledCMS>
        <StyledListBox>
          <List />
        </StyledListBox>
        <StyledPanelsBox>
          <ItemPanel />
          {/* router with panels */}
        </StyledPanelsBox>
      </StyledCMS>
    </StyledBck>
  );
};

export default CMS;

/*
  CMS:
    + Panels
      - MainPanel
      - PanelTemplate
      - ...Panel 
    + Inputs
      - TextInput
      - FileInput
      - TextareaInput
      - SelectInput
    + Popups
      - PopupTemplate
      - ConfirmPopup
      - InfoPopup
      - ...Popup
    + AddFields
      - TextAddField
      - TextFileField
    + Items
      - Thumbnail
      - Button
      - File
      - List
*/
