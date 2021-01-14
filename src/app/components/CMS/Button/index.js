import React from "react";
import styled from "styled-components";

// ${({ size }) => size};
const StyledBtn = styled.button`
  padding: 1.2em 3.8em;
  font-size: ${({ size }) => size * 2.5}px;
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.secoundary};

  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;
`;

const Button = ({ text, size }) => {
  return <StyledBtn children={text} size={size} />;
};
export default Button;
/*
height: ${({ size }) => size * 9}px;
  width: ${({ size }) => size * 30}px;
  */
