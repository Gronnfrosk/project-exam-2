import { API_URL_BOOKINGS } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export async function createBooking(data) {
  const method = "post";

  if (!data) {
  throw new Error("Get requires a booking data!");
}



const response = await authFetch(API_URL_BOOKINGS, {
      method,
      body: JSON.stringify({ dateFrom: data.checkIn,
      dateTo: data.checkOut, 
      guests: data.guests,
      venueId: data.venueId
    })});

console.log(data)
console.log(response)

return await response.json();
}