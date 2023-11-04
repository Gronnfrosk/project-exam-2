import React from "react";
import { ButtonExpand } from "./expand-btn.styles";
import { AvatarIcon, RightArrow } from "../../assets/icons/icons";
//import { useTheme } from "styled-components"

import mainTop from "../../assets/images/pexels-luis-leon-2564463.jpg";

export function ButtonExpandNavbar(props) {
  const { userButton, customer, manager, placeBooking } = props;
  const btnToggle = "span-btn navbar-toggler sb-button shadow-none";
  const noneToggle = "span-btn";
  //{ toggle === true ? btnToggle : noneToggle}
  return (
    <ButtonExpand className="span-btn">
      <span className="circle" aria-hidden="true">
        <div>
          {userButton === true ? <AvatarIcon /> : <RightArrow />}
          <img
            src={mainTop}
            alt="Profile avatar"
            onError={(event) => (event.target.style.display = "none")}
          />
        </div>
      </span>
      <span className="button-text">
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
          : placeBooking}
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
