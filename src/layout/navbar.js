import React, { useEffect, useState } from "react";
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
import { remove } from "../utilities/save_load_remove_local_storage";

const divider = <span style={{ fontSize: "2rem" }}>|</span>;

function ProfileInfoNav(props) {
  const { UpcomingIcon, PreviousIcon, Total, CreateIcon } = NavbarIcon();
  const userStatus = props.userButton;
  const change = props.change;
  //const [ userProfile, setUserProfile ] = useState()
  //const { avatar, bookings, email, name, venueManager, _count } = props.profileSucsess
  //const venues = _count !== undefined ? _count.cenues : "undefined"

  const navbarContentCustomer = [
    {
      name: "Upcomming",
      amount: "2",
      icon: UpcomingIcon,
      link: "/booking-list-upcoming",
      dividerNav: divider,
    },
    {
      name: "Previous",
      amount: "8",
      icon: PreviousIcon,
      link: "/booking-list-previous",
      dividerNav: divider,
    },
    {
      name: "Total",
      //amount: bookings ? `${bookings.length}` : "0",
      icon: Total,
      link: "/booking-list-total",
      dividerNav: "",
    },
  ];
  const navbarContentManager = [
    {
      name: "Total",
      //amount: venues ? `${venues.length}` : "0",
      icon: Total,
      link: "/venue-list",
      dividerNav: divider,
    },
    { name: "Create", icon: CreateIcon, link: "/create-venue", dividerNav: "" },
  ];
  const navbarLink =
    userStatus === false ? navbarContentCustomer : navbarContentManager;

  const navLinkUserType = navbarLink.map((navLink) => {
    const { name, amount, icon, link, dividerNav } = navLink;
    return (
      <div key={name} className="userInfo link">
        <NavLink
          key={name}
          to={link}
          style={({ isPending, isTransitioning }) => {
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
              },
            };
          }}
        >
          {icon}
          <div className="d-flex flex-wrap-reverse justify-content-center">
            {!amount ? "" : <span className="me-2">{amount}</span>}
            {name}
          </div>
        </NavLink>
        {dividerNav}
      </div>
    );
  });

  function handleOnClick() {
    remove("profile", "token", "venueManager");
    change();
  }
  return (
    <div className="userInfo">
      <div className="userInfo">
        {userStatus === false ? (
          <div className="title me-3">Bookings: </div>
        ) : (
          <div className="title me-2">Venues: </div>
        )}
        {navLinkUserType}
      </div>
      <div className="logout-btn d-flex justify-content-end">
        <PrimaryButton
          display={"block"}
          className="me-3"
          onClick={handleOnClick}
        >
          Log out
        </PrimaryButton>
      </div>
    </div>
  );
}

export function CollapsibleNavbar(props) {
  const { userStatus, profile, loginReg, profileSucsess } = props;
  const change = props.change;

console.log(profile)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg={"dark"}
      className="bg-body-tertiary"
    >
      <Container className={loginReg}>
        {profile ? (
          <SideMenu
            userStatus={userStatus}
            profile={profile}
            change={change}
            profileSucsess={profileSucsess}
          />
        ) : (
          <Link to="login-register">
            <ButtonExpandNavbar
              userButton={userStatus}
              nav={"Login or register"}
            />
          </Link>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="ms-3 w-100">
              {!profile === "" ? (
                <ProfileInfoNav
                  change={change}
                  profileSucsess={profileSucsess}
                  profile={profile}
                />
              ) : (
                ""
              )}
            </div>
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
