import React from "react";
import { ButtonExpand } from "./expand-btn.styles";
import { AvatarIcon, RightArrow } from "../../assets/icons/icons";
//import { useTheme } from "styled-components"

import mainTop from "../../assets/images/pexels-luis-leon-2564463.jpg";

export function ButtonExpandNavbar(props) {
  //const theme = useTheme();
  const ProfileIcon = false;
  //const [btnContent, setBtnContent] = useState("Login or register")
  //
  //const imageBtn = props.imageBtn
  //if (props.btns[0].imageBtn !== undefined) {
  //  console.log(props.btns[0].imageBtn)
  //}

  //console.log(imageBtn)
  //console.log(text)
  //setBtnContent("John Doe")
  //console.log(props)
  //console.log(props.userStatus)

  return (
    <ButtonExpand className="span-btn">
      <span className="circle" aria-hidden="true">
        <div>
          {ProfileIcon === true ? <AvatarIcon /> : <RightArrow />}
          <img
            src={mainTop}
            alt="Profile avatar"
            onError={(event) => (event.target.style.display = "none")}
          />
        </div>
      </span>
      <span className="button-text">John Doe</span>
    </ButtonExpand>
  );
}

//Login or register
