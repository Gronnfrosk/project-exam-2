import { API_URL_AUTH_REGISTER } from "./constants"

const registerURL = API_URL_AUTH_REGISTER;
const method = "post";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {String} method The HTTP request method "POST".
 * @param {String} action This endpoint will register a new user profile.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} registerURL This is the complete url needed for "POST" request.
 */
export async function register(profile) {
	const response = await fetch(registerURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});

	if (response.ok) {
		alert("Account successfully created. You may now proceed to login.");
		window.location.href = "signin.html";
	} else {
		alert("Error! Your account was not register. Maybe username or email are already registered at AuctionPoint");
	}
}