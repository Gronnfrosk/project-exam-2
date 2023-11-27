import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { NavbarIcon } from "../assets/icons/icons";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { PrimaryButton } from "../components/buttons/button.styles";
import { SideMenu } from "./menu";
import { remove, load } from "../utilities/save_load_remove_local_storage";
import { useNavigate } from "react-router-dom";
import { useBookingFilter } from "../hooks/useBookingFilter";
import { useProfileData } from "../hooks/useProfileData";

const { UpcomingIcon, PreviousIcon, Total, CreateIcon } = NavbarIcon();
const divider = <span style={{ fontSize: "2rem" }}>|</span>;

export function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userStatus, setUserStatus] = useState(load("venueManager"));
  const [profile, setProfile] = useState(load("profile"));
  const [profileSuccess, setProfileSuccess] = useState(null);
  const [displayBtn, setdisplayBtn] = useState("");

  useProfileData(profile, setProfileSuccess);

  useEffect(() => {
    const loadedProfile = load("profile");

    // Hide buttons only on the '/login-register' page
    if (location.pathname === "/login-register") {
      setdisplayBtn("d-none");
    } else {
      // Reset button display state for other pages
      setdisplayBtn("");
    }
    //if (profileSuccess && loadedProfile.name) {
    //  fetchProfileInfo(profile);
    //}
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
      setProfileSuccess(null);
      navigate("/"); // Navigate to the homepage
    } else if (result) {
      // Handle avatar update or other updates
      setProfile(result);
      setUserStatus(load("venueManager"));
      setProfileSuccess((prevState) => ({
        ...prevState,
        avatar: result.avatar,
      }));
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
            profileSuccess={profileSuccess}
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
