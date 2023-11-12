import "./menu.scss";
import React from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { NavbarIcon } from "../assets/icons/icons";
import { InputEditAvatar } from "../components/form-input.js";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { PrimaryButton } from "../components/buttons/button.styles";
import { AvatarImg } from "../components/profile-avatar";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
//import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg" 

const { UpcomingIcon, PreviousIcon, Total, CreateIcon, EditAvatar } = NavbarIcon();;
const divider = <span className="d-flex text-white fs-2 align-items-center mt-3">|</span>

export function SideMenu(props) {
  const userStatus = props.userButton;
  const theme = useTheme();
  const [toggled, setToggled] = React.useState(false);

  const navbarProfileCustomer = [{ name: "Upcoming", amount: "2"}, {name: "Previous", amount: "8", dividerNav: divider }, {name: "Total", amount: "10"}];
  const navbarManagerProfile = [{}, { name: "Total", amount: "10", dividerNav: divider}, {}]
  const navbarProfile = ( userStatus === false ? navbarProfileCustomer : navbarManagerProfile )

  const navbarManager = [{name: "See your venues" , icon: Total}, { name: "Create venue", icon: CreateIcon}]
  const navbarCustomer = [{name: "Upcoming booking" , icon: UpcomingIcon}, { name: "Previous bookings", icon: PreviousIcon}, {name: "All bookings", icon: Total}]
  const navbarLink = ( userStatus === false ? navbarCustomer : navbarManager )

  const navLinkUserType = (navbarProfile.map((navLink) => {
    const {name, amount, dividerNav } = navLink;

    return (
      <div className="d-flex" key={name}>
        {dividerNav}
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="inventory-items text-center">
          <div> { !amount ? "" : amount }</div> { !name ? "" : name }
        </div>
      </div>
      {dividerNav}
      </div>
    )
  }))

  const navProfile = (
    <div className="text-center mt-3">
      { userStatus === false ? <div className="fs-4">Bookings </div> : <div className="fs-4">Venues </div>}
      <div className="d-flex flex-row justify-content-evenly">
        {navLinkUserType}
      </div>
    </div>
  )

  const userLinks = (navbarLink.map((navLink) => {
    const { name, icon } = navLink;

    return (
      <MenuItem key={name} icon={icon} component={<Link to="/venue-list" onClick={() => setToggled(!toggled)} />}>
        {name}
      </MenuItem>
    )
  }))

  return (
    <div>
      <Sidebar
        className="border-0"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        backgroundColor={theme.color.dark}
        width="300px"
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.button}`]: {
              backgroundColor: theme.color.dark,

              "&:hover": {
                backgroundColor: theme.color.dark,
              },
            },
          }}
        >
          <div className="proifile-info my-4">
            <AvatarImg
              Name={"John Doe"}
              UserType={"Venue manager"}
              Email={"john@mail.com"}
            />
          <div className="divider-line border-bottom border-white"></div>
            {navProfile}
          </div>
          <div className="mt-5 pt-3"> 
            {userStatus === false
              ? userLinks
              : userStatus === true
              ? userLinks
              : "Hello"}
          </div>
          <SubMenu icon={EditAvatar} label="Edit avatar" className="bg-dark">
            <MenuItem style={{ overflow: "hidden" }}>
              <InputEditAvatar style={{ marginTop: "10px" }} />
            </MenuItem>
          </SubMenu>

          <div className="menu-bottom position-absolute bottom-0 mb-4 w-100">
            <div style={{ height: "80px" }}>
              <Navbar.Brand href="/" className="p-0 m-5">
                <BrandLogo />
              </Navbar.Brand>
            </div>
            <PrimaryButton display={"block"} className="m-auto">
              Log out
            </PrimaryButton>
          </div>
        </Menu>
      </Sidebar>
      <div className="toggleBtn" onClick={() => setToggled(!toggled)}>
        <ButtonExpandNavbar userButton={userStatus} />
      </div>
    </div>
  );
}