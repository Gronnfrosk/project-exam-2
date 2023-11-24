import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { CollapsibleNavbar } from "./navbar";
import Footer from "./footer";
import { load } from "../utilities/save_load_remove_local_storage";
import {ProfileInfoApi} from "../services/api/profile";
  
const param = "bookings"

export default function GlobalLayout() {
  const location = useLocation();
  const [userStatus, setUserStatus] = useState(load("venueManager"));
  const [userToken, setToken] = useState(load("token"));
  const [profile, setProfile] = useState(load("profile"));
  const [loginReg, setLoginReg] = useState("");
  const [profileSucsess, setprofileSuccess] = useState(profile)
  
useEffect(() => {
    if (location.pathname === "/login-register") {setLoginReg("d-none")} else {setLoginReg("");
      setUserStatus(load("venueManager"));
      setProfile(load("profile"));
      setToken(load("token"));
  };
    //if (location.pathname !== "/login-register"){
    //  
    //}
  }, [location]);

function handleState(result) {
    if (result) return setProfile(result)
    //setUserStatus(load("venueManager"));
    //setProfile(load("profile"));
    setToken(load("token"));
  }
 
async function userInfo(profile) {
    const promiseAwait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProfileInfoApi(profile.name, param));
      }, 500);
    });

    const result = await promiseAwait;
    setprofileSuccess(result);
  }

  useEffect(() => {
  if(!profileSucsess && profile.name) {
    console.log("Hello")
    //userInfo(profile)
    setprofileSuccess(profile)
}}, [profile]);

useEffect(() => {
  setProfile(load("profile"));
  //setprofileSuccess(profile)
}, []);

  return (
    <>
      <CollapsibleNavbar
          userStatus={userStatus}
          profile={profile}
          change={handleState}
          loginReg={loginReg}
          profileSucsess={profileSucsess}
      />
      <Outlet />
      <Footer />
    </>
  );
}


//useEffect(() =>{
//    setCount(count + 1)
//    console.log("Changed userstatus")
//    setUserStatus(load("venueManager"))
//    setToken(load("token"));
//    setProfile(load("profile"));  //handleLocalStorage()
//}, [userStatus]);