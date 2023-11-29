import { API_URL_VENUES } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export async function updateVenue(venueId, data, imageUrls) {
  const method = "put"; // Using PUT for update, could be PATCH depending on your API

  if (!venueId) {
    throw new Error("Update venue requires a venueId!");
  }

  if (!data) {
    throw new Error("Update venue requires data!");
  }

  const rating = data.rating ? parseFloat(data.rating) : 0;

  const response = await authFetch(`${API_URL_VENUES}/${venueId}`, {
    method,
    body: JSON.stringify({
      name: data.name,
      description: data.description,
      media: imageUrls,
      price: data.price,
      maxGuests: data.maxGuests,
      rating: rating,
      meta: {
        wifi: data.wifi,
        parking: data.parking,
        breakfast: data.breakfast,
        pets: data.pets,
      },
      location: {
        address: data.address,
        city: data.city,
        zip: data.zip,
        country: data.country,
        // Assuming latitude and longitude are not changed during update
        lat: data.lat,
        lng: data.lng,
      },
    }),
  });

  if (response.ok) {
    alert("Venue has been updated successfully.");
    return true;
  } else {
    alert("Error! Venue update failed.");
    return false;
  }
}
