import { API_URL_AUTH_REGISTER } from "../api/constants";
import { useEffect, useState } from "react";

const registerURL = API_URL_AUTH_REGISTER;
const method = "post";

export async function RegisterProfile(profile) {
  //const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [isError, setIsError] = useState(false);

	const response = await fetch(registerURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});
  
  console.log(profile)

	if (response.ok) {
		alert("Account successfully created. You may now proceed to login.");
		//window.location.href = "signin.html";
	} else {
		alert("Error! Your account was not register. Maybe username or email are already registered at Holidaze");
	}

 // useEffect(() => {
    // Function that gets our products
    //async function getData() {
    //  try {
    //    // Reset the error state in case there is an error previously
    //    setIsError(false);
    //    // Turn on the loading state each time we do an API call
    //    setIsLoading(true);
    //    const response = await fetch(registerURL, {
    //      headers: { "Content-type": "application/json" },
    //      method,
    //      body: JSON.stringify(profile),
    //    });
    //    const json = await response.json();
    //    setData(json);
    //    // Clear the loading state once we've successfully got our data
    //    setIsLoading(false);
    //  } catch (error) {
    //    // Clear the loading state if we get an error and then
    //    // set our error state to true
    //    setIsLoading(false);
    //    setIsError(true);
    //  }
    //}

    //getData();
  //}, []);

  

  //if (isLoading) {
  //  return alert("Loading");
  //}
//
  //if (isError) {
  //  return alert("Error! Your account was not register. Maybe username or email are already registered at Holidaze");
  //}
//
  //return alert("Account successfully created. You may now proceed to login.")

	//window.location.href = "signin.html";
  //return [data, isLoading, isError];
}






/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {String} method The HTTP request method "POST".
 * @param {String} action This endpoint will register a new user profile.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} registerURL This is the complete url needed for "POST" request.
 */
//export async function Register(profile) {
//  const response = await fetch(registerURL, {
//    headers: { "Content-type": "application/json" },
//    method,
//    body: JSON.stringify(profile),
//  });
//
//  if (response.ok) {
//    alert("Account successfully created. You may now proceed to login.");
//    window.location.href = "/login-register";
//  } else {
//    alert(
//      "Error! Your account was not register. Maybe username or email are already registered at Holidaze",
//    );
//  }
//}