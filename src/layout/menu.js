import "./menu.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaAvatar } from "../validations/schemas/editAvatar";
import { yupResolver } from "@hookform/resolvers/yup";
//import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { NavbarIcon } from "../assets/icons/icons";
import Navbar from "react-bootstrap/Navbar";
import { BrandLogo } from "../assets/brand/logo";
import { PrimaryButton, EditAvatarBtn} from "../components/buttons/button.styles";
import { AvatarImg } from "../components/profile-avatar";
import { ButtonExpandNavbar } from "../components/buttons/expand-btn";
import { load, remove } from "../utilities/save_load_remove_local_storage";
import { EditAvatarApi } from "../services/api/profile";

const { UpcomingIcon, PreviousIcon, Total, CreateIcon, EditAvatar } =
  NavbarIcon();
const divider = (
  <span className="d-flex text-white fs-2 align-items-center mt-3">|</span>
);

export function SideMenu(props) {
  //const navigate = useNavigate();
  const change = props.change;
  const { profile, profileSucsess} = props;
  const avatar = profile.avatar
  const [toggled, setToggled] = React.useState(false);
  const [ userProfile, setUserProfile ] = useState(profileSucsess)
  
  const { name, email, media, bookings, venueManager, _count } = profileSucsess;
  const venues = _count.venues !== undefined ? _count.venues : 0
  const booking = _count.bookings
  const [urlInput, setUrlInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAvatar),
  });

  function handleOnClick() {
    remove("profile", "token", "venueManager");
    //navigate("/"); 
    change();
    setToggled(false);
  }

  async function onSubmit(data) {
    setUrlInput("")

    const promiseAwait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(EditAvatarApi(name, data));
      }, 500);
    });

    const result = await promiseAwait;
    change(result);
    setUserProfile(result);
  }

  const navbarProfileCustomer = [
    { name: "Upcoming", amount: "2" },
    { name: "Previous", amount: "8", dividerNav: divider },
    { name: "Total", amount:  `${booking}` },
  ];
  const navbarManagerProfile = [
    {},
    { name: "Total", amount:  `${venues}`, dividerNav: divider },
    {},
  ];
  const navbarProfile =
  venueManager === false ? navbarProfileCustomer : navbarManagerProfile;

  const navbarManager = [
    { name: "See your venues", icon: Total },
    { name: "Create venue", icon: CreateIcon },
  ];
  const navbarCustomer = [
    { name: "Upcoming booking", icon: UpcomingIcon },
    { name: "Previous bookings", icon: PreviousIcon },
    { name: "All bookings", icon: Total },
  ];
  const navbarLink = venueManager === false ? navbarCustomer : navbarManager;

  const navLinkUserType = navbarProfile.map((navLink, index) => {
    const { name, amount, dividerNav } = navLink;

    return (
      <div className="d-flex" key={"sideNav" + index}>
        {dividerNav}
        <div className="d-flex flex-row justify-content-around mt-3">
          <div className="inventory-items text-center">
            <div> {!amount ? "" : amount}</div> {!name ? "" : name}
          </div>
        </div>
        {dividerNav}
      </div>
    );
  });

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

  const userLinks = navbarLink.map((navLink) => {
    const { name, icon } = navLink;

    return (
      <MenuItem
        key={name}
        icon={icon}
        component={
          <Link to="/venue-list" onClick={() => setToggled(!toggled)} />
        }
      >
        {name}
      </MenuItem>
    );
  });

  return (
    <div>
      <Sidebar
        className="border-0"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        backgroundColor="var(--body_backgroundColor)"
        width="300px"
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.button}`]: {
              backgroundColor: "var(--body_backgroundColor)",

              "&:hover": {
                backgroundColor: "var(--body_backgroundColor)",
              },
            },
          }}
        >
          <div className="proifile-info my-4">
            <AvatarImg
              Name={name}
              UserType={venueManager}
              Email={email}
              Avatar={avatar}
            />
            <div className="divider-line border-bottom border-white"></div>
            {navProfile}
          </div>
          <div className="mt-5 pt-3">
            {venueManager === false
              ? userLinks
              : venueManager === true
              ? userLinks
              : "Hello"}
          </div>
          <SubMenu icon={EditAvatar} label="Edit avatar" className="bg-dark">
            <MenuItem style={{ overflow: "hidden" }}>
              <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Navbar.Brand href="/" className="p-0 m-5">
                <BrandLogo />
              </Navbar.Brand>
            </div>
            <PrimaryButton
              display={"block"}
              className="m-auto"
              onClick={handleOnClick}
            >
              Log out
            </PrimaryButton>
          </div>
        </Menu>
      </Sidebar>
      <div className="toggleBtn" onClick={() => setToggled(!toggled)}>
        <ButtonExpandNavbar
          userStatus={venueManager}
          avatar={avatar}
          name={name}
          nav={"Login or register"}
        />
      </div>
    </div>
  );
}
