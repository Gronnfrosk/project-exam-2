import { API_URL_VENUES } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export async function createVenue(data, imageUrls) {
  const method = "post";

  if (!data) {
    throw new Error("Create venue requires data!");
  } 

const rating = data.rating ? parseFloat(data.rating) : 0;

  const response = await authFetch(API_URL_VENUES, {
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
          continent: "unknown",
          lat: 0,
          lng: 0  
        }
})

  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("API error:", errorBody);
  
    // Log the specific errors
    if (errorBody.errors && errorBody.errors.length > 0) {
      console.error("Detailed errors:", errorBody.errors);
    }
  
    alert("Error! Venue was not created. Check console for details.");
    return false;
  }

  if (!response.ok) {
    const errorBody = await response.json();
    console.error("API error:", errorBody);
    alert("Error! Venue was not created. Check console for details.");
    return false;
  }

  if (response.ok) {
    alert("You have created a new venue. You can see your venues in the venue list");
    return true;
  } else {
    alert("Error! Venue was not created.")
    return false;
  }
}
