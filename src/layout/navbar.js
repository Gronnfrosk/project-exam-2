import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { SideMenu } from "./menu";
import { remove, load } from "../utilities/save_load_remove_local_storage";
import { useNavigate } from "react-router-dom";

export function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userStatus, setUserStatus] = useState(load("venueManager"));
  const [profile, setProfile] = useState(load("profile"));
  const [displayBtn, setdisplayBtn] = useState("");

console.log("Navbar")

  useEffect(() => {
    const loadedProfile = load("profile");

    if (location.pathname === "/login-register") {
      setdisplayBtn("d-none");
    } else {
      setdisplayBtn("");
    }
    if (loadedProfile && loadedProfile.name) {
      setProfile(loadedProfile);
    }
  }, [location]);

  function handleState(result, isLogout = false) {
    if (isLogout) {
      // Handle logout
      remove("profile", "token", "venueManager");
      setProfile(null);
      setUserStatus(null);
      navigate("/");
    } else if (result) {
      // Handle avatar update or other updates
      setProfile(result);
      setUserStatus(load("venueManager"));
    }
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
    >
      <Container className={displayBtn}>
        {profile && profile !== null ? (
          <SideMenu
            userStatus={userStatus}
            profile={profile}
            displayBtn={displayBtn}
            handleState={handleState}
          />
        ) : (
          <Link to="login-register">
            <ButtonExpandNavbar userButton={null} nav={"Login or register"} />
          </Link>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav></Nav>
        </Navbar.Collapse>
        <NavLink
          to="/"
          className="p-0 collapse navbar-collapse flex-grow-0 text-decoration-none"
        >
          <BrandLogo />
        </NavLink>
      </Container>
    </Navbar>
  );
}
