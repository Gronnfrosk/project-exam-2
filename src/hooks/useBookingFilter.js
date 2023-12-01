import { useState, useEffect } from "react";

export const useBookingFilter = (bookings) => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);

  useEffect(() => {
    if (bookings) {
      const today = new Date();
      const upcoming = bookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom)).filter(
        (booking) => new Date(booking.dateFrom) >= today,
        bookings
      );
      const previous = bookings.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom)).filter(
        (booking) => new Date(booking.dateFrom) < today,
      );

      setUpcomingBookings(upcoming);
      setPreviousBookings(previous);
    }
  }, [bookings]);

  return { upcomingBookings, previousBookings };
};
