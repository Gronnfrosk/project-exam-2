import React from "react";
import { ButtonExpand } from "./expand-btn.styles";
import { AvatarIcon, RightArrow } from "../../assets/icons/icons";

export function ButtonExpandNavbar(props) {
  const {
    userStatus,
    name,
    nav,
    avatar,
    customer,
    manager,
    custom,
    color,
    arrow,
    type,
    onClick,
  } = props;

  //const colorSett = nav ? "var(--body_color)" : customer ? theme.customer.primary : manager ? theme.manager.primary : theme.manager.primary
  const blueBtn = "var(--secondary_color)";
  const orangeBtn = "var(--third_color)";
  const colorBtn =
    color === true
      ? orangeBtn
      : color === false
      ? blueBtn
      : userStatus === false
      ? "var( --secondary_color)"
      : userStatus === true
      ? "var(--third_color)"
      : "var(--primary_color)";
  const colorBtnBtn = !arrow ? colorBtn : arrow;
  const colorBtnText = custom ? arrow : "";
  const blue = color === false ? blueBtn : "";

  return (
    <ButtonExpand className="span-btn" type={type} onClick={onClick}>
      <span
        className="circle"
        aria-hidden="true"
        style={{
          color: colorBtnBtn,
          borderColor: colorBtn,
          backgroundColor: blue,
        }}
      >
        <div>
          {!avatar && !arrow ? (
            <AvatarIcon />
          ) : avatar ? (
            <img
              src={avatar}
              alt="Profile avatar"
              onError={(event) => (event.target.style.display = "none")}
            />
          ) : (
            <RightArrow />
          )}
        </div>
      </span>
      <span className="button-text" style={{ color: colorBtnText }}>
        {name
          ? name
          : nav
          ? nav
          : customer
          ? "Customer"
          : manager
          ? "Venue manager"
          : custom}
      </span>
    </ButtonExpand>
  );
}
