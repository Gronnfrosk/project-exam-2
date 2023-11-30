import { API_URL_VENUES } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export async function updateVenue(venueId, data, imageUrls) {
  const method = "PUT"; // HTTP methods are typically uppercase

  console.log(venueId);

  if (!venueId) {
    throw new Error("Update venue requires a venueId!");
  }

  if (!data) {
    throw new Error("Update venue requires data!");
  }

  const payload = {
    name: data.name,
    description: data.description,
    media: imageUrls,
    price: Number(data.price),
    maxGuests: Number(data.maxGuests),
    rating: Number(data.rating),
    meta: data.meta,
    location: data.location,
  };

  Object.keys(payload).forEach(
    (key) => payload[key] == null && delete payload[key],
  );

  const response = await authFetch(`${API_URL_VENUES}/${venueId}`, {
    method,
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return true;
  } else {
    alert("Error! An error occurred while updating the venue.");
    console.error("Response status:", response.status);
    return false;
  }
}
