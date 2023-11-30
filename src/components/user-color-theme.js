import { useEffect } from "react";
import { load } from "../utilities/save_load_remove_local_storage";
import { useLocation } from "react-router-dom";

export const ThemeMode = () => {
  const location = useLocation();

  useEffect(() => {
    const loadedUserType = load("venueManager");

    if (loadedUserType === true) {
      setManagerMode();
    } else if (loadedUserType === false) {
      setCustomerMode();
    } else {
      setNoneUserMode();
    }
  }, [location]);

  const setNoneUserMode = () => {
    document.querySelector("body").setAttribute("data-theme", "noneUser");
  };

  const setCustomerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "customer");
  };

  const setManagerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "manager");
  };

  // Logging for debugging purpose
  // console.log(userType);

  return null;
};
