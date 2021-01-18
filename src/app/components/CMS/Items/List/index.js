import React from "react";
import styled from "styled-components";
import Hamburger from "../../../../assets/icons/hamburger.svg";
import Close_icon from "../../../../assets/icons/close_light.svg";

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
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secoundary};
  padding-left: 0.4em;
  font-size: 17px;
  cursor: pointer;
  overflow: hidden;
  height: 17px;
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

      <StyledListItem>
        dsadsa
        <StyledList>
          <StyledListItem>dsadsa</StyledListItem>
          <StyledListItem>
            dsadsa
            <StyledList>
              <StyledListItem>dsadsa</StyledListItem>
              <StyledListItem>dsadsa</StyledListItem>
              <StyledListItem>
                dsadsa
                <StyledListItem>
                  dsadsa
                  <StyledList>
                    <StyledListItem>dsadsa</StyledListItem>
                    <StyledListItem>
                      dsadsa
                      <StyledList>
                        <StyledListItem>dsadsa</StyledListItem>
                        <StyledListItem>dsadsa</StyledListItem>
                        <StyledListItem>
                          dsadsa
                          <StyledListItem>
                            dsadsa
                            <StyledList>
                              <StyledListItem>dsadsa</StyledListItem>
                              <StyledListItem>
                                dsadsa
                                <StyledList>
                                  <StyledListItem>dsadsa</StyledListItem>
                                  <StyledListItem>dsadsa</StyledListItem>
                                  <StyledListItem>dsadsa</StyledListItem>
                                </StyledList>
                              </StyledListItem>
                              <StyledListItem>dsadsa</StyledListItem>
                            </StyledList>
                          </StyledListItem>
                        </StyledListItem>
                      </StyledList>
                    </StyledListItem>
                    <StyledListItem>dsadsa</StyledListItem>
                  </StyledList>
                </StyledListItem>
              </StyledListItem>
            </StyledList>
          </StyledListItem>
          <StyledListItem>dsadsa</StyledListItem>
        </StyledList>
      </StyledListItem>
      <StyledListItem>
        dsadsa
        <StyledList>
          <StyledListItem>dsadsa</StyledListItem>
          <StyledListItem>
            dsadsa
            <StyledList>
              <StyledListItem>dsadsa</StyledListItem>
              <StyledListItem>dsadsa</StyledListItem>
              <StyledListItem>dsadsa</StyledListItem>
            </StyledList>
          </StyledListItem>
          <StyledListItem>dsadsa</StyledListItem>
        </StyledList>
      </StyledListItem>
    </StyledListBox>
  );
};
export default List;
