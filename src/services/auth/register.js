import { API_URL_AUTH_REGISTER } from "../api/constants";

const registerURL = API_URL_AUTH_REGISTER;
const method = "post";

export async function RegisterProfile(profile) {
  const response = await fetch(registerURL, {
    headers: { "Content-type": "application/json" },
    method,
    body: JSON.stringify(profile),
  });

  if (response.ok) {
	const userType = profile.venueManager

    return userType
  } else {
    return null;
  }
}
