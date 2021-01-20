import React from "react";
import Button from "../../Items/Button";
import {
  StyledPanel,
  StyledTopBox,
  StyledTitle,
  StyledBotBox,
} from "./index.css";

const TemplatePanel = ({ children }) => {
  const handleclick = () => {};
  return (
    <StyledPanel>
      <StyledTopBox>
        <StyledTitle children=" SUBFOLDER" />
        <Button text="wyloguj" size={4} click={handleclick} />
      </StyledTopBox>
      <StyledBotBox>{children}</StyledBotBox>
    </StyledPanel>
  );
};
export default TemplatePanel;
