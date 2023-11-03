import styled from "styled-components";

export const PrimaryLink = styled.a`
  color: ${(props) => props.theme.color.white};
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
  margin: 0 5px;

  :hover {
    cursor: pointer;
  }
`;
