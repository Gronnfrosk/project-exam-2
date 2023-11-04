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

import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";

const { UpcomingIcon, PreviousIcon, Total, CreateIcon, EditAvatar } =
  NavbarIcon();

function profileIventory(user) {
  const userStatus = user;
  const divider = <span className="text-white fs-5  my-2">|</span>;
  const iventoryItem = (
    <div className="inventory-items text-center">
      <div>145</div>Total
    </div>
  );

  const contents = (
    <>
      <div className="userType">Venues</div>
      <div className="d-flex flex-row justify-content-around mt-3">
        {iventoryItem}
        {divider}
        {iventoryItem}
        {divider}
        {iventoryItem}
      </div>
    </>
  );

  const manager = (
    <>
      <div className="userType">Venues</div>
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="inventory-items text-center">
          <div></div>
        </div>
        <span className="text-white fs-5  my-2">|</span>
        <div className="inventory-items text-center">
          <div>145</div> Total
        </div>
        <span className="text-white fs-5 my-2">|</span>
        <div className="inventory-items text-center">
          <div></div>
        </div>
      </div>
    </>
  );

  const customer = (
    <>
      <div className="">Bookings</div>
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="inventory-items text-center">
          <div>5</div> Upcoming
        </div>
        <span className="text-white fs-5  my-2">|</span>
        <div className="inventory-items text-center">
          <div>140</div> Previous
        </div>
        <span className="text-white fs-5 my-2">|</span>
        <div className="inventory-items text-center">
          <div>145</div> Total
        </div>
      </div>
    </>
  );

  if (userStatus === false) return customer;
  else return manager;
}

export function SideMenu(props) {
  const userStatus = props.userButton;
  const theme = useTheme();
  const [toggled, setToggled] = React.useState(false);

  const ManagerLinks = (
    <>
      <MenuItem icon={Total} component={<Link to="/totalVenues" />}>
        Venues list
      </MenuItem>
      <MenuItem icon={CreateIcon} component={<Link to="/createVenue" />}>
        Create venues
      </MenuItem>
    </>
  );

  const CustomerLinks = (
    <>
      <MenuItem icon={UpcomingIcon} component={<Link to="/totalVenues" />}>
        Upcoming bookings
      </MenuItem>
      <MenuItem icon={PreviousIcon} component={<Link to="/createVenue" />}>
        Previous bookings
      </MenuItem>
      <MenuItem icon={Total} component={<Link to="/createVenue" />}>
        All bookings
      </MenuItem>
    </>
  );

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
            <div className="profile text-center d-flex flex-column align-items-center">
              <div className="profile-name">John Doe</div>
              <div className="profile-type">Venue manager</div>
              <AvatarImg />
              <div className="profile-mail mb-3">john@mail.com</div>
            </div>

            <div className="divider-line border-bottom border-white"></div>

            <div className="text-center mt-4">
              {profileIventory(userStatus)}
            </div>
          </div>

          <div className="mt-5">
            {" "}
            {userStatus === false
              ? CustomerLinks
              : userStatus === true
              ? ManagerLinks
              : "Hello"}{" "}
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

//<span className="button-text">{userStatus()}</span>
//<div className="d-flex flex-column mx-3 text-center mt-4">
//              <div className="inventory border-bottom border-white d-flex flex-row justify-content-around">
//                <div>Venues</div> <div>Venues</div> <div>Venues</div>
//              </div>
//              <div className="d-flex flex-row justify-content-around my-2">
//              <div className="inventory-items">
//                  120 <br /> Total
//                </div>
//                <span className="text-white fs-5 mx-3 my-2">|</span>
//                <div className="inventory-items">
//                  120 <br /> Total
//                </div>
//                <span className="text-white fs-5 mx-3 my-2">|</span>
//                <div className="inventory-items">
//                  120 <br /> Total
//                </div>
//              </div>
//            </div>

//const listManager = [
//  { Venueslist:  `${Total}`
//},
//{
//  Createvenues: `${CreateIcon }`}]
//
//const listCustomer = ["Upcoming bookings", "Previous bookings", "Previous bookings" ]
//
//const VenueManager = (
//  listManager.map((e) => {
//    <MenuItem key={e.id} icon={e.Venueslist} component={<Link to="/createVenue" />}>
//      Create venues
//    </MenuItem>})
//)
//
//const Customer = ("Hello");

//{listManager.map((e) => { return (
//  <>
//<MenuItem key={e.id} icon={e.Venueslist} component={<Link to="/createVenue" />}>
//  Create venues
//</MenuItem>
//<MenuItem icon={Total} component={<Link to="/totalVenues" />}>
//Venues list
//</MenuItem>
//  </>)
//  })
//
//}
