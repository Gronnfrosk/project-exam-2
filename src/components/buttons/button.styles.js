import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: ${(props) => props.display};
  color: black;
  background-color: var(--primary_color);
  font-size: 1.1em;
  border: 0;
  border-radius: 50px;
  padding: 5px 20px;
  width: 179px;
  cursor: pointer;
  transition: opacity linear 200ms;

  :hover {
    opacity: 0.9;
  }
`;

export const EditAvatar = styled(PrimaryButton)`
  border-radius: 50px;
  width: 45px;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const EditVenueBtn = styled.button`
  background-color: var(--secondary_color);
  border: 2px solid var(--secondary_color);
  border-radius: 8px;
  font-size: 1.3rem;
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
`;

export const DeleteVenueBtn = styled.button`
  background-color: white;
  border: 2px solid var(--third_color);
  border-radius: 8px;
  font-size: 1.1rem;
  width: 33px;
  height: 33px;
`;
