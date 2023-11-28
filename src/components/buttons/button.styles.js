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
  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;
  //transition: opacity linear 200ms;

  &:hover {
    background-color: var(--primary_color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
  }

  @keyframes moveInBottom {
    0% {
      transform: translateY(30px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const EditAvatarBtn = styled(PrimaryButton)`
  background-color: var(--primary_color) !important;
  border-radius: 50px;
  width: 45px !important;
  font-weight: bold;
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
