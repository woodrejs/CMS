import styled from "styled-components";

export const StyledContentArea = styled.div`
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  padding: 1em;
  > * {
    margin: 0 1em 2em 0;
  }

  @media screen and (min-width: 768px) {
    justify-content: unset;
  }
`;
