import { API_URL_VENUES } from "./constants.js";
import { authFetch } from "./auth_fetch.js";

export default async function deleteVenue(venueId) {
  const method = "DELETE";

  try {
    const response = await authFetch(`${API_URL_VENUES}/${venueId}`, {
      method,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to delete venue");
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
