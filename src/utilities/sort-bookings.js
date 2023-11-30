export const sortBookings = (bookings) => {
  const today = new Date();

  // Filter upcoming bookings: those where 'dateFrom' is in the future
  const upcomingBookings = bookings.filter(
    (booking) => new Date(booking.dateFrom) >= today,
  );
  // Filter past bookings: those where 'dateFrom' is in the past
  const pastBookings = bookings.filter(
    (booking) => new Date(booking.dateFrom) < today,
  );

  upcomingBookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
  pastBookings.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom));

  return [...upcomingBookings, ...pastBookings];
};
