export const sortBookings = (bookings) => {
     // Get the current date to compare with booking dates
    const today = new Date();

    // Filter upcoming bookings: those where 'dateFrom' is in the future
    const upcomingBookings = bookings.filter(booking => new Date(booking.dateFrom) >= today);
    // Filter past bookings: those where 'dateFrom' is in the past
    const pastBookings = bookings.filter(booking => new Date(booking.dateFrom) < today);
  
    // Sort upcoming bookings by 'dateFrom' in ascending order
    upcomingBookings.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
    // Sort past bookings by 'dateFrom' in ascending order
    pastBookings.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom));
  
    // Concatenate upcoming and past bookings arrays and return them
    return [...upcomingBookings, ...pastBookings];
  };