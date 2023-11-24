import { useEffect, useState } from "react";
import { load } from "../utilities/save_load_remove_local_storage";
import { useLocation } from "react-router-dom";

export const ThemeMode = () => {
  const [userType, setUserType] = useState("");
  const location = useLocation();

  useEffect(() => {
  setUserType(load("venueManager"));
}, []);


  useEffect(() => {
    if (userType === true) {
      return setManagerMode();
    } else if (userType === false) {
      return setCustomerMode();
    } else {
      return setNoneUserMode();
    }
  }, [userType]);
  
  useEffect(() => {
    setUserType(load("venueManager"));

    if (userType === true) {
      return setManagerMode();
    } else if (userType === false) {
      return setCustomerMode();
    } else {
      return setNoneUserMode();
    }
  }, [location]);

  useEffect(() => {
    setUserType(load("venueManager"));
    if (userType === true) {
      return setManagerMode();
    } else if (userType === false) {
      return setCustomerMode();
    } else {
      return setNoneUserMode();
    }
  }, []);

  console.log(userType)

  const setNoneUserMode = () => {
    document.querySelector("body").setAttribute("data-theme", "noneUser");
  };

  const setCustomerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "customer");
  };

  const setManagerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "manager");
  };

  if (userType === true) {
    return setManagerMode();
  } else if (userType === false) {
    return setCustomerMode();
  } else {
    return setNoneUserMode();
  }
};
