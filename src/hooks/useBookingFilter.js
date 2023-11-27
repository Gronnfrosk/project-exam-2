import { useState, useEffect } from "react";
import { SpinnerLoad, ErrorLoad } from "../components/error-load";

export const useBookingFilter = (bookings) => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);

  useEffect(() => {
    if (bookings) {
      const today = new Date();
      const upcoming = bookings.filter(
        (booking) => new Date(booking.dateFrom) >= today,
      );
      const previous = bookings.filter(
        (booking) => new Date(booking.dateFrom) < today,
      );

      setUpcomingBookings(upcoming);
      setPreviousBookings(previous);
    }
  }, [bookings]);

  return { upcomingBookings, previousBookings };
};
