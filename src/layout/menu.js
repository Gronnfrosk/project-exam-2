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
import { NavbarIcon, AvatarIcon } from "../assets/icons/icons";
import { InputEditAvatar } from "../components/form-input.js";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { PrimaryButton } from "../components/buttons/button.styles";
import { AvatarImg } from "../components/profile-avatar";
import { ButtonExpand } from "../components/buttons/expand-btn.styles";
import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";

const someone = false;
function userStatus() {
  if (someone === null) {
    return "Login or register";
  } else if (someone === false) {
    return "John Doe";
  } else if (someone === true) {
    return "Sara Doe";
  }
}

const { UpcomingIcon, PreviousIcon, Total, CreateIcon, EditAvatar } =
  NavbarIcon();

function profileIventory() {
  const manager = (
  <>
    <div className="">Venues</div>
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
  )

  if (someone === false) return customer;
  else return manager;
}


function ProfileInfoNav() {
  const manager = (
    <>
      <MenuItem icon={Total} component={<Link to="/totalVenues" />}>
        Venues list
      </MenuItem>
      <MenuItem icon={CreateIcon} component={<Link to="/createVenue" />}>
        Create venues
      </MenuItem>
    </>
  );

  const customer = (
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

  if (someone === false) return customer;
  else return manager;
}

export function SideMenu() {
  const theme = useTheme();
  const [toggled, setToggled] = React.useState(false);

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
              <div className="profile-mail">john@mail.com</div>
            </div>

            <div className="divider-line border-bottom border-white"></div>

            <div className="text-center mt-4">
              {profileIventory()}
            </div>
          </div>

          <div className="mt-5">{ProfileInfoNav()}</div>
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
      <main style={{ display: "flex" }}>
        <ButtonExpand
          className="span-btn navbar-toggler sb-button shadow-none"
          onClick={() => setToggled(!toggled)}
        >
          <span className="circle" aria-hidden="true">
            <div>
              <AvatarIcon />
              <img
                src={mainTop}
                alt="Profile avatar"
                onError={(event) => (event.target.style.display = "none")}
              />
            </div>
          </span>
          <span className="button-text">{userStatus()}</span>
        </ButtonExpand>
      </main>
    </div>
  );
}

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
