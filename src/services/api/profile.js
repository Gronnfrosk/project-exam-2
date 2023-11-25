import { API_URL_Profile } from "../../services/api/constants";
import { authFetch } from "./auth_fetch"


/**
 * This async function sends an API "GET" request with a profile name.
 * @param {String} name The name of target profile.
 * @param {String} profileUrl This is the complete url needed for "GET" request.
 */
export async function ProfileInfoApi(name, params) {
    if (!name) {
		throw new Error("Get requires a profile name!");
	}
    
	const profileUrl =  API_URL_Profile + name + params;

	const response = await authFetch(profileUrl);

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