import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import MemoizedSideMenu from "./menu";
import { remove, load } from "../utilities/save_load_remove_local_storage";
import { useNavigate } from "react-router-dom";

export function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userStatus, setUserStatus] = useState(load("venueManager"));
  const [profile, setProfile] = useState(load("profile"));

  console.log("Hello navbar")

  useEffect(() => {
    const loadedProfile = load("profile");

    if (loadedProfile !== profile) {
      setProfile(loadedProfile);
    }
  }, [location.pathname]);

  function handleUserStatusChange(result, isLogout = false) {
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
      <Container>
        {profile && profile !== null ? (
          <MemoizedSideMenu
            userStatus={userStatus}
            profile={profile}
            handleState={handleUserStatusChange}
          />
        ) : (
          <Link to="login-register">
            <ButtonExpandNavbar userButton={null} nav={"Login or register"} />
          </Link>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="border-start ms-3">
            <NavLink to="/my-list" className="ms-3 text-decoration-none text-white fs-6">
              {userStatus=== false ? "Bookings" : userStatus === true ? "Venues" : ""}
            </NavLink>
            </Nav>
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
