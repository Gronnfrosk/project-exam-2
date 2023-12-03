import { useMemo } from "react";

export const useBookingFilter = (bookings) => {
  const { upcomingBookings, previousBookings } = useMemo(() => {
    if (!bookings) {
      return { upcomingBookings: [], previousBookings: [] };
    }

    const today = new Date();
    const sortedBookings = bookings.sort(
      (a, b) => new Date(a.dateFrom) - new Date(b.dateFrom),
    );
    const upcoming = sortedBookings.filter(
      (booking) => new Date(booking.dateFrom) >= today,
    );
    const previous = sortedBookings.filter(
      (booking) => new Date(booking.dateFrom) < today,
    );

    return { upcomingBookings: upcoming, previousBookings: previous };
  }, [bookings]);

  return { upcomingBookings, previousBookings };
};
