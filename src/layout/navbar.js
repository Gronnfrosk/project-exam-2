import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
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
import { load } from "../utilities/save_load_remove_local_storage";
import { ProfileInfoApi } from "../services/api/profile";
import { useNavigate } from "react-router-dom";

const { UpcomingIcon, PreviousIcon, Total, CreateIcon } = NavbarIcon();
const divider = <span style={{ fontSize: "2rem" }}>|</span>;


export function CollapsibleNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userStatus, setUserStatus] = useState(load("venueManager"));
  const [profile, setProfile] = useState(load("profile"));
  const [profileSuccess, setProfileSuccess] = useState(null);
  const [displayBtn, setdisplayBtn] = useState("");
  let params;  
  
  useEffect(() => {
    const loadedProfile = load("profile");
  
    // Hide buttons only on the '/login-register' page
    if (location.pathname === "/login-register") {
      setdisplayBtn("d-none");
    } else {
      // Reset button display state for other pages
      setdisplayBtn("");
  
      // Fetch profile info if the profile is loaded and has a name
      if (loadedProfile && loadedProfile.name) {
        fetchProfileInfo(loadedProfile);
      }
    }
  }, [location, profile]);

  async function fetchProfileInfo(profile) {
    params = userStatus === false ? "?_bookings=true" : ""
    
    try {
      const result = await ProfileInfoApi(profile.name, params);
      if (result) {
        setProfileSuccess(result);
      } else {
        console.log("ProfileInfoApi returned undefined or null");
      }
    } catch (error) {
      console.error("Error fetching profile info:", error);
    }
  }

  function handleState(result, isLogout = false) {
    console.log(result)
    
    if (isLogout) {
      // Handle logout
      remove("profile", "token", "venueManager");
      setUserStatus(null);
      setProfileSuccess(null);
      navigate('/'); // Navigate to the homepage
    } else if (result) {
      // Handle avatar update or other updates
      setProfile(result);
      setUserStatus(load("venueManager"));
      setProfileSuccess(prevState => ({
        ...prevState,
        avatar: result.avatar 
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
        {profileSuccess && profileSuccess? 
          <SideMenu
          userStatus={userStatus}
          profile={profile}
          profileSuccess={profileSuccess}
          displayBtn={displayBtn}
          handleState={handleState}
            
          />
       : 
          <Link to="login-register">
            <ButtonExpandNavbar
              userButton={null}
              nav={"Login or register"}
            />
          </Link>
        }
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <div className="ms-3 w-100">
              {profileSuccess ? 
                <ProfileInfoNav
                  handleState={handleState}
                  profileSuccess={profileSuccess}
                />
               : 
                null
              }
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


function ProfileInfoNav(props) {
  const { profileSuccess, userStatus, profile, handleState } = props;

  if (!profileSuccess) {
    return null; 
  }
  
  const venues = profileSuccess && profileSuccess._count ? profileSuccess._count.venues : 0;
  const bookings = profileSuccess ? profileSuccess.bookings : 0;
  
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
      amount: bookings ? `${bookings.length}` : "0",
      icon: Total,
      link: "/booking-list-total",
      dividerNav: "",
    },
  ];
  const navbarContentManager = [
    {
      name: "Total",
      amount: `${venues}`,
      icon: Total,
      link: "/venue-list",
      dividerNav: divider,
    },
    { name: "Create", icon: CreateIcon, link: "/create-venue", dividerNav: "" },
  ];

  let navbarLink = [];

  if (profileSuccess.venueManager === false) {
    navbarLink = navbarContentCustomer;
  } else if (profileSuccess.venueManager === true) {
    navbarLink = navbarContentManager;
  }

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

  return (
    <div className="userInfo">
      <div className="userInfo">
        {profileSuccess.venueManager === false ? (
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
          onClick={() => handleState(null, true)}
        >
          Log out
        </PrimaryButton>
      </div>
    </div>
  );
}

