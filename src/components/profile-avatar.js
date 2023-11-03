import styled from "styled-components";
import { AvatarIcon } from "../assets/icons/icons";
import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";

export const AvatarDisplay = styled.div`
  &.span-btn {
    & .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      color: var(--body_color);
      position: relative;
      border: solid 3px var(--body_color);
      border-radius: 50px;

      & svg {
        font-size: 2.5rem;
        color: var(--body_color);
      }

      & img {
        position: absolute;
        left: 0;
        top: 0;
        border: solid 3px var(--body_color);
        top: -3px;
        left: -3px;
        width: "80px";
      }
    }
  }
`;

export function AvatarImg() {
  return (
    <AvatarDisplay className="span-btn my-3">
      <span className="circle" aria-hidden="true">
        <div>
          <AvatarIcon />
          <img
            src={mainTop}
            alt="Profile avatar"
            onError={(event) => (event.target.style.display = "none")}
            style={{
              width: "80px",
              height: "auto",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "50px",
            }}
          />
        </div>
      </span>
    </AvatarDisplay>
  );
}
