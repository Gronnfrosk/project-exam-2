import React from "react";
import "./navbar.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { NavbarIcon, AvatarIcon } from "../assets/icons/icons";
import { PrimaryLink } from "../components/links";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { PrimaryButton } from "../components/buttons/button.styles";
import { InputEditAvatar } from "../components/form-input.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SideMenu } from "./menu";
import { ButtonExpand } from "../components/buttons/expand-btn.styles";
import mainTop from "../assets/images/pexels-luis-leon-2564463.jpg";

const Content = "John Doe";
const userStatus = false;
function ProfileInfoNav() {
  const { UpcomingIcon, PreviousIcon, Total, CreateIcon } =
    NavbarIcon();

  const manager = (
    <>
      <div className="title me-2">Venues: </div>
      <PrimaryLink href="/about" className="d-flex gap-2">
        {Total}
        <div className="one-title d-flex flex-wrap-reverse justify-content-center">
          10 <div className="title-name ms-2">Total</div>
        </div>
      </PrimaryLink>
      <span className="fs-4">|</span>
      <PrimaryLink href="/about" className="d-flex gap-2">
        {CreateIcon}
        <div className="one-title d-flex flex-wrap-reverse justify-content-center">
          {" "}
          Create new
        </div>
      </PrimaryLink>
    </>
  );

  const customer = (
    <>
      <div className="title me-2">Bookings: </div>
      <PrimaryLink href="/about" className="d-flex gap-2">
        {UpcomingIcon}{" "}
        <div className="one-title d-flex flex-wrap-reverse justify-content-center">
          2 <div className="title-name ms-2">Upcoming</div>
        </div>
      </PrimaryLink>
      <span className="fs-4">|</span>
      <PrimaryLink href="/previous" className="d-flex gap-2">
        {PreviousIcon}{" "}
        <div className="one-title d-flex flex-wrap-reverse justify-content-center">
          8 <div className="title-name ms-2">Previous</div>
        </div>
      </PrimaryLink>
      <span className="fs-4 ">|</span>
      <PrimaryLink href="/total" className="d-flex gap-2">
        {Total}{" "}
        <div className="one-title d-flex flex-wrap-reverse justify-content-center">
          10 <div className="title-name mx-2">Total</div>
        </div>
      </PrimaryLink>
    </>
  );

  return (
    <div className="userInfo">
      <div className="userInfo">
        {userStatus === false ? customer : manager}
        </div>
      <div className="logout-btn d-flex justify-content-end">
        <PrimaryButton display={"block"} className="me-4">
          Log out
        </PrimaryButton>
      </div>
    </div>
  );
}

function ButtonNav() {
  const noneUser = (
    <ButtonExpand className="span-btn">
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
      <span className="button-text">Login or register</span>
    </ButtonExpand>
  );

  const userDesktop = (
    <NavDropdown
      title={
        <ButtonExpandNavbar
          imageBtn={mainTop}
          userStatus={true}
          text={Content}
        />
      }
      id={`offcanvasNavbarDropdown-expand-lg`}
    >
      <div className="dropdown-container">
        <NavDropdown.ItemText style={{ textAlign: "center" }}>
          john@mail.com
        </NavDropdown.ItemText>
        <NavDropdown.ItemText className="venue-manager">
          Venue manager
        </NavDropdown.ItemText>
        <NavDropdown.Divider />
        <NavDropdown.ItemText className="ps-1 pt-3">
          Edit avatar (URL link)
        </NavDropdown.ItemText>
        <InputEditAvatar />
      </div>
    </NavDropdown>
  );

  if (userStatus === true) {
    return noneUser;
  } else if (userStatus === false) {
    return userDesktop;
  }
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
        <SideMenu />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <ButtonNav />
            <div className="ms-3 w-100">
              <ProfileInfoNav />
            </div>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className="p-0">
          <BrandLogo />
        </Navbar.Brand>
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
