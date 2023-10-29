import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PrimaryButton, ButtonExpand } from "../components/button.styles";
import { PrimaryLink } from "../components/links";
import { BsPersonFill } from "react-icons/bs";
import { BrandLogo } from "../assets/brand/logo";
import { theme } from "../assets/brand/colors";
import { NavbarIcon } from "../assets/icons/icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const { upcomingIcon, previousIcon, totalIcon, createIcon, totalVenueIcon } =
  NavbarIcon();

export function CollapsibleNavbar() {
  const [themeColor, setThemeColor] = useState([theme.color.primary]);

  useEffect(() => {
    if (!localStorage) {
      setThemeColor(theme.color.primary);
    } else {
      setThemeColor(theme.color.customer);
    }
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
      style={{ backgroundColor: theme.color.dark }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ maxWidth: "1320px" }}
        >
          <Nav className="me-auto">
            <ButtonExpand className="span-btn">
              <span className="circle" aria-hidden="true">
                <div
                  style={{
                    width: "42px",
                  }}
                >
                  <BsPersonFill />
                  <img
                    src=""
                    alt="Profile avatar"
                    onError={(event) => (event.target.style.display = "none")}
                    style={{
                      width: "42px",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                  />
                </div>
              </span>
              <span className="button-text d-none">Login or register</span>
              <span className="button-text ">John Doe </span>

              <div
                className="desktop-menu pt-3 px-3 position-absolute"
                style={{ backgroundColor: theme.color.dark, width: "240px" }}
              >
                <div className="list-group-item">john@mail.com</div>
                <div className="list-group-item" style={{textDecoration: "underline", textDecorationColor: theme.color.manager}}>Venue manager</div>

                <div className="mt-4">
                  <div>Edit avatar</div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      {">"}
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </ButtonExpand>
            <div className="d-flex ms-3" style={{ fontSize: ".9em" }}>
              <div
                className="d-flex align-items-center ms-3 d-none"
                style={{ fontSize: ".9em" }}
              >
                <span className="text-light fs-6">Bookings: </span>
                <PrimaryLink
                  href="/about"
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {" "}
                  {upcomingIcon} 2 Upcoming
                </PrimaryLink>
                <span className="text-white">|</span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {previousIcon} 8 Previous
                </PrimaryLink>
                <span className="text-white">|</span>
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
                  className="d-flex gap-2 align-items-baseline pt-2"
                >
                  {totalVenueIcon} 10 Total
                </PrimaryLink>
                <span className="text-white">|</span>
                <PrimaryLink
                  href="/contactUs"
                  className="d-flex gap-2 align-items-baseline pt-2"
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
              backgroundColor={theme.color.primary}
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
