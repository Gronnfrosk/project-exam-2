import { API_URL_Profile } from "../../services/api/constants";
import { authFetch } from "./auth_fetch"

let profileParams;


//export async function getProfile(name) {
//	if (!name) {
//		throw new Error("Get requires a profile name!");
//	}
//	const profileUrl = API_AUCTION_PROFILE_URL + name;
//
//	const response = await authFetch(profileUrl);
//
//	return await response.json();
//}

/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
export async function ProfileInfoApi(name, params) {
    let method = "get";

    if (!name) {
		throw new Error("Get requires a profile name!");
	}
    if(params ==="bookings") {profileParams = "?_bookings=true";}
    
	const profileUrl =  API_URL_Profile + name + profileParams;

	const response = await authFetch(profileUrl, {
        method,});

	return await response.json();
}

export async function EditAvatarApi(name, media) {
    const method = "put";

    if (!name) {
		throw new Error("Get requires a profile name!");
	}
    
	const profileUrl =  API_URL_Profile + name + "/media";

	const response = await authFetch(profileUrl, {
        method,
        body: JSON.stringify({ avatar: media.Avatar })});

	return await response.json();
}


/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
//export async function getProfileBids(name) {
//	if (!name) {
//		throw new Error("Get requires a profile name!");
//	}
//	const profileUrl = API_AUCTION_PROFILE_URL + name + "/bids?_listings=true";
//
//	const response = await authFetch(profileUrl);
//
//	return await response.json();
//}