import { useState, useEffect } from "react";
//import { load } from '../utilities/save_load_remove_local_storage';
import { ProfileInfoApi } from "../services/api/profile";
import { sortBookings } from "../utilities/sort-bookings";

export const useProfileData = (profile, setProfileSuccess) => {
  useEffect(() => {
    //const loadedProfile = load("profile");
    async function fetchProfileInfo() {
      try {
        const result = await ProfileInfoApi(profile.name, "?_bookings=true");
        if (result) {
          setProfileSuccess({
            ...result,
            bookings: sortBookings(result.bookings),
          });
        }
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    }

    if (profile && profile.name) {
      fetchProfileInfo(profile);
    }

    //console.log()
  }, [profile, setProfileSuccess]);
};
