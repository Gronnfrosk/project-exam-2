import styled from "styled-components";
import { AvatarIcon } from "../../assets/icons/icons";


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

export function ButtonExpandNavbar(){
  return (
    <ButtonExpand className="span-btn">
      <span className="circle" aria-hidden="true">
        <div
          style={{
            width: "42px",
          }}
        >
          < AvatarIcon />
          <img
            src=""
            alt="Profile avatar"
            onError={(event) => (event.target.style.display = "none")}
            style={{
              width: "42px",
              height: "auto",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "50px",
            }}
          />
        </div>
      </span>
      <span className="button-text d-none">Login or register</span>
      <span className="button-text ">John Doe </span>
    </ButtonExpand>
  )
}