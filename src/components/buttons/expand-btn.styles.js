import styled from "styled-components";

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
  font-weight: bold;

  &.span-btn {
    width: 12rem;
    height: auto;

    & .circle {
      display: flex;
      align-items: center;
      font-size: 1.45em;
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: relative;
      margin: 0;
      width: 3rem;
      height: 3rem;
      border: solid 3px;
      border-radius: 1.625rem;

      & svg {
        font-size: var(--textLarge_fontSize);
      }

      & div {
        width: 42px;
      }

      & img {
        position: absolute;
        left: 0;
        top: 0;
        width: 42px;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 50px;
      }
    }

    & .button-text {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      font-size: var(--textsmall_fontSize);
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
