export const sortBookings = (bookings) => {
  const today = new Date();
  const upcomingBookings = bookings.filter(
    (booking) => new Date(booking.dateFrom) >= today,
  );
  const pastBookings = bookings.filter(
    (booking) => new Date(booking.dateFrom) < today,
  );

  upcomingBookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
  pastBookings.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom));

  return [...upcomingBookings, ...pastBookings];
};
