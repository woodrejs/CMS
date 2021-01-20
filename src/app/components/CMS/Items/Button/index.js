import React from "react";
import { StyledBtn } from "./index.css";

const Button = ({ text, size = 5, type = "primary", click }) => {
  return <StyledBtn children={text} size={size} type={type} onClick={click} />;
};
export default Button;
