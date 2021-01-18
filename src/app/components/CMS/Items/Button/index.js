import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 1.2em 3.8em;
  font-size: ${({ size }) => size * 2.5}px;
  background: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.third;
      case "secoundary":
        return theme.colors.secoundary;
      case "extra":
        return theme.colors.fourth;
      default:
        return theme.colors.third;
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.secoundary;
      case "secoundary":
        return theme.colors.fourth;
      case "extra":
        return theme.colors.secoundary;
      default:
        return theme.colors.secoundary;
    }
  }};

  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;
`;

const Button = ({ text, size, type, click }) => {
  return <StyledBtn children={text} size={size} type={type} onClick={click} />;
};
export default Button;
