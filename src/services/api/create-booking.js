import { API_URL_BOOKINGS } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

const method = "post";

export async function useCreateBid(id, newBooking) {
  if (!id) {
    throw new Error("Get requires an ID!");
  }
  const bidUrl = API_URL_BOOKINGS + id;

  const response = await authFetch(bidUrl, {
    method,
    body: JSON.stringify({ amount: newBooking }),
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(`Error! Booking was not placed.`);
  }
}
