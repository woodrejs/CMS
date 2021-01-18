import React from "react";
import styled from "styled-components";
import Button from "../../Items/Button";

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
const StyledBotBox = styled.div`
  padding: 1em;
  grid-area: 2/1/4/3;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const TemplatePanel = ({ children }) => {
  const handleclick = () => {};
  return (
    <StyledPanel>
      <StyledTopBox>
        <StyledTitle children=" SUBFOLDER" />
        <Button text="do góry" size={4} click={handleclick} />
      </StyledTopBox>
      <StyledBotBox>{children}</StyledBotBox>
    </StyledPanel>
  );
};
export default TemplatePanel;
