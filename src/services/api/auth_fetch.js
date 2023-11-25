import { load } from "../../utilities/save_load_remove_local_storage";

/**
 * This function contains the header for HTTP request methods.
 * @param {string} token This is the localStorage key with access token value.
 */
export function headers() {
const token = load("token");

return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * This function returns fetch for HTTP request methods
 * @function headers() This function contains the header for HTTP request methods.
 */
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
