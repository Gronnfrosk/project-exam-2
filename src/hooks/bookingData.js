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