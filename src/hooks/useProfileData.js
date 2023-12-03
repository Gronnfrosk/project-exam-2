import { useState, useEffect } from "react";
import { ProfileInfoApi } from "../services/api/profile";
import { sortBookings } from "../utilities/sort-bookings";

export const useProfileData = (profile) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProfileInfo() {
      try {
        const result = await ProfileInfoApi(profile.name, "?_bookings=true");
        if (result && isMounted) {
          setProfileData({
            ...result,
            bookings: sortBookings(result.bookings),
          });
        }
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    }

    if (profile && profile.name) {
      fetchProfileInfo();
    }

    return () => {
      isMounted = false;
    };
  }, [profile.name, profile]);

  return profileData;
};
