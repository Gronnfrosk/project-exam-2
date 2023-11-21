import { API_URL_AUTH_LOGIN } from "../api/constants";
import { save } from "../../utilities/save_load_remove_local_storage";

const loginURL = API_URL_AUTH_LOGIN;
const method = "post";

export async function LoginUser(profile) {
  const response = await fetch(loginURL, {
    headers: { "Content-type": "application/json" },
    method,
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    const { accessToken, venueManager, ...user } = await response.json();

    save("token", accessToken);
    save("venueManager", venueManager);
    save("profile", user);

    return venueManager;
  } else {
    return null;
  }
}
