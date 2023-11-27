import { sortBookings } from "../utilities/sort-bookings";
import React, { useEffect, useState } from "react";
import { getBookingInfoApi } from "../services/api/booking";
import { load } from "../utilities/save_load_remove_local_storage";

export const useBookingVenueData = () => {
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBookingData() {
      setIsLoading(true);
      const userType = load("venueManager");
      const params = userType === "false" ? "?_customer=true" : "?_venue=true";
      try {
        const result = await getBookingInfoApi(params);
        if (result) {
          console.log(result);
          setBookingData({
            ...result,
            bookings: sortBookings(result.bookings),
          });
        }
      } catch (error) {
        console.error("Error fetching booking data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBookingData();
  }, []); // Dependency array is empty, so it runs only on mount

  return { bookingData, isLoading, isError };
};
