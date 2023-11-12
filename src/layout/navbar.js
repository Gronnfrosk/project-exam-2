import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { NavbarIcon } from "../assets/icons/icons";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { PrimaryButton } from "../components/buttons/button.styles";
import { SideMenu } from "./menu";
//import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";

const divider = <span style={{fontSize: "2rem"}}>|</span>;
const userStatus = false;

function ProfileInfoNav() {
  const { UpcomingIcon, PreviousIcon, Total, CreateIcon } = NavbarIcon();
  const navbarContentCustomer = [{ name: "Upcomming", amount: "2", icon: UpcomingIcon, link: "/booking-list-upcoming",dividerNav: divider}, {name: "Previous", amount: "8", icon: PreviousIcon, link: "/booking-list-previous", dividerNav: divider }, {name: "Total", amount: "10", icon: Total, link: "/booking-list-total", dividerNav: ""}];
  const navbarContentManager = [{ name: "Total", amount: "10", icon: Total, link: "/venue-list", dividerNav: divider}, {name: "Create", icon: CreateIcon, link: "/create-venue", dividerNav: ""}]
  const navbarLink = ( userStatus === false ? navbarContentCustomer : navbarContentManager )

  const navLinkUserType = (navbarLink.map((navLink) => {
    const {name, amount, icon, link, dividerNav } = navLink;
    return (
    <div key={name} className="userInfo link">
    <NavLink key={name} to={link} style={({ isPending, isTransitioning }) => {
      return {
        display: "flex",
        gap: "0.5rem",
        fontSize: "0.9rem",
        color: isPending ? "red" : "white",
        viewTransitionName: isTransitioning ? "slide" : "",
        color: "white",
        textDecoration: "none",
        margin: "0 15px",
        alignItems: "center",
        lineHeight: "normal",

        "&:hover": {
          cursor: "pointer",
        }
      };
    }}
    >
      {icon}
      <div className="d-flex flex-wrap-reverse justify-content-center">
        { !amount ? "" : <span className="me-2">{amount}</span>}
      {name}
      </div>
    </NavLink>
    {dividerNav}
    </div>
    )
}))

  return (
    <div className="userInfo">
      <div className="userInfo">
      { userStatus === false ? <div className="title me-3">Bookings: </div> : <div className="title me-2">Venues: </div>}
        {navLinkUserType}
      </div>
      <div className="logout-btn d-flex justify-content-end">
        <PrimaryButton display={"block"} className="me-3">
          Log out
        </PrimaryButton>
      </div>
    </div>
  );
}

export function CollapsibleNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
    >
      <Container>
        {userStatus !== null ? (
          <SideMenu userButton={userStatus} />
        ) : (
          <ButtonExpandNavbar userButton={userStatus} />
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="ms-3 w-100">
              {userStatus !== null ? (
                <ProfileInfoNav userButton={userStatus} />
              ) : (
                ""
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/" className="p-0 collapse navbar-collapse flex-grow-0 text-decoration-none">
          <BrandLogo />
        </NavLink>
      </Container>
    </Navbar>
  );
}

//onError={this.style.display='none'}
//<div className="">
//          <Button backgroundColor="#ED6C02"> Click me </Button>
//          <Button backgroundColor={themeColor}> Click me </Button>
//          <BaseButton>Base button</BaseButton>
//          <PrimaryButton>Logout</PrimaryButton>
//           </div>

//<Navbar.Offcanvas
//              id={`offcanvasNavbar-expand-lg`}
//              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//              placement="start"
//              className="text-center bg-dark text-light"
//
//            >
//              <Navbar.Toggle closeButton className="border-0 p-0 m-2 z-5 text-start"><HamburgerMenuBtn focus={"active"}/></Navbar.Toggle>
//              <Offcanvas.Header className="d-flex flex-column">
//                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                  John Doe
//                </Offcanvas.Title>
//              <Navbar.Text>Venue manager</Navbar.Text>
//              <Navbar.Text>john@mail.com</Navbar.Text>
//              </Offcanvas.Header>
//
//              <Offcanvas.Body className="d-flex flex-column">
//              <Navbar.Text>Venues</Navbar.Text>
//              <Navbar.Text>120</Navbar.Text>
//              <Navbar.Text>Total</Navbar.Text>
//                <Nav className="text-start">
//                  <Nav.Link href="#action2">Venues list</Nav.Link>
//                  <Nav.Link href="#action2">Create venues</Nav.Link>
//                  <Nav.Link href="#action2">Edit avatar</Nav.Link>
//                </Nav>
//              </Offcanvas.Body>
//            </Navbar.Offcanvas>

//const ButtonNav = (
//    <NavDropdown
//      title={
//        <ButtonExpandNavbar
//        userButton={userStatus}
//        />
//      }
//      id={`offcanvasNavbarDropdown-expand-lg`}
//    >
//      <div className="dropdown-container">
//        <NavDropdown.ItemText style={{ textAlign: "center" }}>
//          john@mail.com
//        </NavDropdown.ItemText>
//        <NavDropdown.ItemText className="venue-manager">
//          Venue manager
//        </NavDropdown.ItemText>
//        <NavDropdown.Divider />
//        <NavDropdown.ItemText className="ps-1 pt-3">
//          Edit avatar (URL link)
//        </NavDropdown.ItemText>
//        <InputEditAvatar />
//      </div>
//    </NavDropdown>
//  );
