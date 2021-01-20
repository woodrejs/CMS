import styled from "styled-components";
import DropArrow from "../../../../assets/icons/drop_arrow.svg";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7em;
  font-weight: bold;
  font-size: 14px;
  text-transform: capitalize;
`;
export const StyledSelect = styled.select`
  height: 40px;
  width: 100%;
  padding: 0.2em 1em;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.fifth};
  appearance: none;
  background-image: url(${DropArrow});
  background-repeat: no-repeat, repeat;
  background-position: right 1px top 50%, 0 0;
  cursor: pointer;
`;
export const StyledOption = styled.option`
  height: 40px;
  width: 100%;
`;
