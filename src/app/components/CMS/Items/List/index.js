import React from "react";
import styled from "styled-components";
import Hamburger from "../../../../assets/icons/hamburger.svg";
import Close_icon from "../../../../assets/icons/close_light.svg";
import { Link } from "react-router-dom";

//list
const StyledListBox = styled.div`
  background: ${({ theme }) => theme.colors.fourth};
  padding-top: 18vh;
  width: 100%;
  position: relative;
  padding-bottom: 5em;
  padding-left: 2em;

  @media screen and (min-width: 800px) {
    padding-left: 0;
  }
`;
const StyledList = styled.ul`
  padding-left: 1px;
  cursor: pointer;
`;
const StyledListItem = styled.li`
  list-style: none;
  padding-left: 0.4em;
  cursor: pointer;
  overflow: hidden;
  height: 17px;
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secoundary};
  text-transform: capitalize;
  font-size: 17px;
`;
//hamburger
const StyledHamburgerBox = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (orientation: landscape) {
    height: 15vh;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const StyledHamburger = styled.img`
  height: 1.5em;
  width: 1.5em;
`;

const List = () => {
  return (
    <StyledListBox>
      <StyledHamburgerBox>
        <StyledHamburger src={Hamburger} alt="hamburger_icon" />
      </StyledHamburgerBox>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/admin/item" children="item" />
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/admin/folder" children="folder" />
        </StyledListItem>
      </StyledList>
    </StyledListBox>
  );
};
export default List;
