import styled from "styled-components";

export const PrimaryLink = styled.a`
  color: white;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
  margin: 0 5px;
  transition: background-color 0.7s ease;

  :hover {
    background-color: black;
  }
`;

//color: ${(props) => props.theme.color.primary};
