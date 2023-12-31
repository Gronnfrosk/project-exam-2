import "./menu.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { schemaAvatar } from "../validations/schemas/editAvatar";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";
import { NavbarIcon } from "../assets/icons/icons";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import {
  PrimaryButton,
  EditAvatarBtn,
} from "../components/buttons/button.styles";
import { AvatarImg } from "../components/profile-avatar";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { useBookingFilter } from "../hooks/useBookingFilter";
import { EditAvatarApi } from "../services/api/profile";
import { useProfileData } from "../hooks/useProfileData";

const { UpcomingIcon, PreviousIcon, Total, CreateIcon, EditAvatar } =
  NavbarIcon();

const divider = (
  <span className="d-flex text-white fs-2 align-items-center mt-3">|</span>
);

function SideMenu(props) {
  const { userStatus, handleState, profile } = props;
  const [toggled, setToggled] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const profileFetchedData = useProfileData(profile);
  const profileSuccess = profileFetchedData || {};
  const {
    name,
    email,
    bookings = [],
    venueManager,
    _count = {},
  } = profileSuccess;
  const venues = _count.venues || 0;
  const bookingFilterResult = useBookingFilter(bookings ? bookings : []);

  const { upcomingBookings, previousBookings } = useMemo(
    () => ({
      upcomingBookings: bookingFilterResult.upcomingBookings,
      previousBookings: bookingFilterResult.previousBookings,
    }),
    [bookingFilterResult],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAvatar),
  });

  const navbarProfileCustomer = useMemo(
    () => [
      {
        name: "Upcoming",
        amount: upcomingBookings.length > 0 ? upcomingBookings.length : "0",
      },
      {
        name: "Total",
        amount: `${bookings.length}`,
        dividerNav: divider,
      },
      {
        name: "Previous",
        amount: previousBookings.length > 0 ? previousBookings.length : "0",
      },
    ],
    [bookings, upcomingBookings.length, previousBookings.length],
  );

  const navbarCustomer = [
    { name: "Upcoming booking", icon: UpcomingIcon, link: "/my-list" },
    {
      name: "Total bookings",
      icon: Total,
      link: "/my-list#previous-bookings",
    },
    {
      name: "Previous bookings",
      icon: PreviousIcon,
      link: "/my-list#total-bookings",
    },
  ];

  const navbarManagerProfile = useMemo(
    () => [{}, { name: "Total", amount: `${venues}`, dividerNav: divider }, {}],
    [venues],
  );

  const navbarManager = [
    { name: "See your venues", icon: Total, link: "/my-list" },
    { name: "Create venue", icon: CreateIcon, link: "/create-venue" },
  ];

  const toggleSidebar = useCallback(() => {
    setToggled((prevToggled) => !prevToggled);
  }, []);

  const handleLogout = useCallback(() => {
    handleState(null, true);
  }, [handleState]);

  const handleAvatarChange = useCallback(
    async (data) => {
      setUrlInput("");
      let result;
      try {
        const result = await EditAvatarApi(name, data);
        if (result) {
          handleState(result);
        } else {
          console.log("EditAvatarApi returned undefined or null");
        }
      } catch (error) {
        console.error("Error fetching profile avatar:", error);
      }
      if (result) {
        handleState(result);
      }
    },
    [name, handleState],
  );

  const navbarLink = venueManager === false ? navbarCustomer : navbarManager;

  const navLinkUserType = useMemo(() => {
    const navbarProfile = venueManager
      ? navbarManagerProfile
      : navbarProfileCustomer;
    return navbarProfile.map((navLink, index) => {
      const { name, amount, dividerNav } = navLink;
      return (
        <div className="d-flex" key={"sideNav" + index}>
          {dividerNav}
          <div className="d-flex flex-row justify-content-around mt-3">
            <div className="inventory-items text-center">
              <div>{amount}</div>
              <div>{name}</div>
            </div>
          </div>
          {dividerNav}
        </div>
      );
    });
  }, [venueManager, navbarProfileCustomer, navbarManagerProfile]);

  const navProfile = (
    <div className="text-center mt-3">
      {venueManager === false ? (
        <div className="fs-4">Bookings </div>
      ) : (
        <div className="fs-4">Venues </div>
      )}
      <div className="d-flex flex-row justify-content-evenly">
        {navLinkUserType}
      </div>
    </div>
  );

  // eslint-disable-next-line
  const userLinks = useMemo(() =>
    navbarLink.map(
      (navLink) => {
        const { name, icon, link } = navLink;

        return (
          <MenuItem
            key={name}
            icon={icon}
            component={
              <NavLink
                to={link}
                onClick={() => setToggled((prevToggled) => !prevToggled)}
              />
            }
          >
            {name}
          </MenuItem>
        );
      },
      [navbarLink, setToggled],
    ),
  );

  if (!profileSuccess) {
    return (
      <Link to="login-register">
        <ButtonExpandNavbar userButton={userStatus} nav={"Login or register"} />
      </Link>
    );
  }

  return (
    <div>
      <Sidebar
        className="border-0"
        onBackdropClick={toggleSidebar}
        toggled={toggled}
        breakPoint="all"
        backgroundColor="var(--body_backgroundColor)"
        width="300px"
        style={{ borderRight: "2px solid red" }}
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.button}`]: {
              backgroundColor: "var(--body_backgroundColor)",

              "&:hover": {
                backgroundColor: "var(--body_backgroundColor)",
                borderLeft: "6px solid var(--body_color)",
                transition: "border 0.2s ease-in-out",
              },
            },
          }}
        >
          <div className="proifile-info my-4">
            <AvatarImg
              Name={name}
              UserType={venueManager}
              Email={email}
              Avatar={profile.avatar}
            />
            <div className="divider-line border-bottom border-white"></div>
            {navProfile}
          </div>
          <div className="mt-4 pt-3">{userLinks}</div>
          <SubMenu icon={EditAvatar} label="Edit avatar" className="bg-dark">
            <MenuItem style={{ overflow: "hidden" }}>
              <Form onSubmit={handleSubmit(handleAvatarChange)}>
                <InputGroup className="mt-1">
                  <Form.Control
                    value={urlInput}
                    onInput={(e) => setUrlInput(e.target.value)}
                    id="mainInput"
                    type="text"
                    title="Avatar"
                    data-bs-theme="light"
                    placeholder="http://www.example.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="rounded-start-pill border-0 shadow-none"
                    style={{ fontSize: "var(--textSmall_fontSize)" }}
                    {...register("Avatar")}
                  />
                  <EditAvatarBtn>{">"}</EditAvatarBtn>
                </InputGroup>
              </Form>
            </MenuItem>
            <Form.Text className="text-white text-decoration-underline link-underline-danger text-center w-100 mt-3 position-absolute ">
              {errors.Avatar?.message}
            </Form.Text>
          </SubMenu>
          <div className="menu-bottom position-absolute bottom-0 mb-4 w-100">
            <div style={{ height: "80px" }}>
              <NavLink to="/" className="text-decoration-none">
                <Navbar.Brand className="p-0 m-5">
                  <BrandLogo />
                </Navbar.Brand>
              </NavLink>
            </div>
            <PrimaryButton
              display={"block"}
              className="m-auto"
              onClick={handleLogout}
            >
              Log out
            </PrimaryButton>
          </div>
        </Menu>
      </Sidebar>
      <div className="toggleBtn" onClick={toggleSidebar}>
        <ButtonExpandNavbar
          userStatus={venueManager}
          avatar={profile.avatar}
          name={name}
          nav={"Login or register"}
        />
      </div>
    </div>
  );
}

const MemoizedSideMenu = React.memo(SideMenu);

export default MemoizedSideMenu;
