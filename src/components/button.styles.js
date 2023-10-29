import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: ${(props) => props.display};
  color: black;
  font-size: 1.1em;
  border: 0;
  border-radius: 50px;
  padding: 5px 20px;
  width: 179px;
  background-color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  transition: opacity linear 200ms;

  :hover {
    opacity: 0.9;
  }
`;

export const ButtonExpand = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;

  &.span-btn {
    width: 12rem;
    height: auto;

    & .circle {
      color: ${(props) => props.theme.color.manager};
      font-size: 1.45em;
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      border: solid 3px ${(props) => props.theme.color.manager};
      border-radius: 1.625rem;

      & img {
        position: absolute;
        left: 0;
      }
    }

    & .button-text {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      left: 15px;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: white;
      line-height: 1.6;
      text-align: center;
    }
  }

  &:hover .circle {
    width: 100%;
  }
`;

/*
export const BaseButton = styled.button`
  color: black;
  border: 0;
  border-radius: 50px;
  padding: 10px 20px;
  width: 179px;
  cursor: pointer;
  transition:  opacity linear 200ms;

  :hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #FFED79;
`;

export const CustomerButton = styled(BaseButton)`
  background-color: #2FD2F3;
`;

export const VenueManagerButton = styled(BaseButton)`
  background-color: #2FD2F3;
`;

export const ToppMainButton = styled(BaseButton)`
  background-color: #2FD2F3;
`;
*/
