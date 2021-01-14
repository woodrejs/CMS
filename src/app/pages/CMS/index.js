import React from "react";
import styled from "styled-components";
//import PopUpText from "../../components/CMS/PopUpText";
//import InputFile from "../../components/CMS/InputFile";
//import InputText from "../../components/CMS/InputText";
//import InputSelect from "../../components/CMS/InputSelect";

const StyledCMS = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CMS = () => {
  return <StyledCMS></StyledCMS>;
};

export default CMS;
