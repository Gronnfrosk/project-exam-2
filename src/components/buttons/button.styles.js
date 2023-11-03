import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: ${(props) => props.display};
  color: black;
  font-size: 1.1em;
  border: 0;
  border-radius: 50px;
  padding: 5px 20px;
  width: 179px;
  background-color: var(--primaryBtn_color);
  cursor: pointer;
  transition: opacity linear 200ms;

  :hover {
    opacity: 0.9;
  }
`;

export const EditAvatar = styled(PrimaryButton)`
  border-radius: 50px 50px 50px 50px;
  width: 45px;
  font-weight: bold;
  font-size: 1.1rem;
`;
