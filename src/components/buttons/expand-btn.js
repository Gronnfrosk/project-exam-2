import React from "react";
import { ButtonExpand } from "./expand-btn.styles";
import { AvatarIcon, RightArrow } from "../../assets/icons/icons";
import { useTheme } from "styled-components";

import mainTop from "../../assets/images/pexels-luis-leon-2564463.jpg";

export function ButtonExpandNavbar(props) {
  const theme = useTheme();
  const { userButton, customer, manager, custom, color, arrow, type, onClick } = props;
  const blueBtn = theme.customer.primary;
  const orangeBtn = theme.manager.primary;
  const colorBtn =
    color === true
      ? orangeBtn
      : color === false
      ? blueBtn
      : theme.color.primary;
  const colorBtnBtn = !arrow ? colorBtn : arrow;
  const colorBtnText = custom ? arrow : "";
  const blue = color === false ? blueBtn : "";

  return (
    <ButtonExpand className="span-btn" type={type}  onClick={ onClick}>
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
          {userButton === true ? <AvatarIcon /> : <RightArrow />}
          <img
            src={userButton === true ? { mainTop } : ""}
            alt="Profile avatar"
            onError={(event) => (event.target.style.display = "none")}
          />
        </div>
      </span>
      <span className="button-text" style={{ color: colorBtnText }}>
        {userButton === true
          ? "John Manager"
          : userButton === false
          ? "Sara Customer"
          : userButton === null
          ? "Login or register"
          : customer
          ? "Customer"
          : manager
          ? "Venue manager"
          : custom}
      </span>
    </ButtonExpand>
  );
}

//Login or register
//const theme = useTheme();
//const ProfileIcon = props.userButton;
//const customer = props.customer;
//const
//const [btnContent, setBtnContent] = useState("Login or register")

//const imageBtn = props.imageBtn
//if (props.btns[0].imageBtn !== undefined) {
//  console.log(props.btns[0].imageBtn)
//}

//console.log(imageBtn)
//console.log(text)
//setBtnContent("John Doe")
//console.log(props)

//console.log(props.userStatus)
