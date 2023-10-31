import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { NavbarIcon } from "../assets/icons/icons";
import { PrimaryLink } from "../components/links";
import HamburgerMenuBtn from "../components/buttons/hamburger-menu-btn";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn.styles";
import { PrimaryButton } from "../components/buttons/button.styles";
import { InputEditAvatar } from "../components/form-input.js";

import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { theme } from "../colors";

const { upcomingIcon, previousIcon, totalIcon, createIcon, totalVenueIcon } =
  NavbarIcon();

export function CollapsibleNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
      style={{height: "64px"}}
    >
      <Container>
        <Navbar.Toggle closeButton className="border-0 p-0 m-0 z-5"><HamburgerMenuBtn /></Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ maxWidth: "1320px" }}
        >
      
      <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              className="text-center bg-dark text-light"
              
            >
              <Navbar.Toggle closeButton className="border-0 p-0 m-2 z-5 text-start"><HamburgerMenuBtn focus={"active"}/></Navbar.Toggle>
              <Offcanvas.Header className="d-flex flex-column">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  John Doe
                </Offcanvas.Title>
              <Navbar.Text>Venue manager</Navbar.Text>
              <Navbar.Text>john@mail.com</Navbar.Text>
              </Offcanvas.Header>

              <Offcanvas.Body className="d-flex flex-column">
              <Navbar.Text>Venues</Navbar.Text>
              <Navbar.Text>120</Navbar.Text>
              <Navbar.Text>Total</Navbar.Text>
                <Nav className="text-start">
                  <Nav.Link href="#action2">Venues list</Nav.Link>
                  <Nav.Link href="#action2">Create venues</Nav.Link>
                  <Nav.Link href="#action2">Edit avatar</Nav.Link>
                </Nav>          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        
          <Nav className="me-auto">
          <NavDropdown
              title= {<ButtonExpandNavbar />} 
              id={`offcanvasNavbarDropdown-expand-lg`}
            >
              <div style={{padding: "0 15px 5px 15px", fontSize: theme.fontSizes.small }}>
              <NavDropdown.ItemText style={{textAlign: "center" }}>john@mail.com</NavDropdown.ItemText>
              <NavDropdown.ItemText style={{textDecoration: "underline", textDecorationColor: theme.color.manager, textAlign: "center"}}>
                Venue manager
              </NavDropdown.ItemText>
              <NavDropdown.Divider />
              <NavDropdown.ItemText className="ps-1 pt-3">
                Edit avatar (URL link)
              </NavDropdown.ItemText>
              <InputEditAvatar />
              </div>
            </NavDropdown>
            
            <div className="d-flex ms-3" style={{ fontSize: theme.fontSizes.small }}>
              <div
                className="d-flex align-items-center ms-3 d-none"
              >
                <span className="text-light fs-6">Bookings: </span>
                <PrimaryLink
                  href="/about"
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {" "}
                  {upcomingIcon} 2 Upcoming
                </PrimaryLink>
                <span className="text-white fs-5">|</span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {previousIcon} 8 Previous
                </PrimaryLink>
                <span className="text-white fs-5">|</span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {totalIcon} 10 Total
                </PrimaryLink>
              </div>

              <div
                className="d-flex align-items-center ms-3"
                style={{ fontSize: ".9em" }}
              >
                <span className="text-light fs-6">Venues: </span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-center"
                >
                  {totalVenueIcon} 10 Total
                </PrimaryLink>
                <span className="text-white fs-5">|</span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-center"
                >
                  {" "}
                  {createIcon}Create new
                </PrimaryLink>
              </div>
            </div>
          </Nav>
          <div className="">
            <PrimaryButton
              display={"block"}
              backgroundColor= {(props) => props.theme.color.primary}
              className="me-4"
            >
              {" "}
              Log out{" "}
            </PrimaryButton>
          </div>
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
