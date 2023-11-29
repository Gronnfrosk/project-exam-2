import { API_URL_VENUES } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export async function updateVenue(venueId, data, imageUrls) {
  const method = "put";

  if (!venueId) {
    throw new Error("Update venue requires a venueId!");
  }

  if (!data) {
    throw new Error("Update venue requires data!");
  }

  //const rating = data.rating ? parseFloat(data.rating) : 0;

  console.log(
    JSON.stringify({
      name: data.name,
      description: data.description,
      media: imageUrls,
      price: Number(data.price),
      maxGuests: Number(data.maxGuests),
      rating: Number(data.rating),
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
      },
    }),
  );

  const response = await authFetch(`${API_URL_VENUES}/${venueId}`, {
    method,
    body: JSON.stringify({
      name: data.name,
      description: data.description,
      media: imageUrls,
      price: Number(data.price),
      maxGuests: Number(data.maxGuests),
      rating: Number(data.rating),
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
      },
    }),
  });

  if (response.ok) {
    alert("Venue has been updated successfully.");
    return true;
  } else {
    alert("Error! Venue update failed.");
    console.log(response);
    return false;
  }
}
