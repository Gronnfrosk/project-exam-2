//import { load } from "../localstorage/save_load_remove.js";

const token = load("token");
const userToken = load("profile");

/**
 * This function stops none user to visit profile page.
 * @param {String} token This is the localStorage key with access token value.
 * @param {Object} userToken This is the localStorage key with user profile data value.
 */

export function checkUserToken() {
  if (!token && !userToken) {
    window.location.href = "../index.html";
  }
}

/**
 * This function stops logged in user to visit login and register page.
 * @param {String} token This is the localStorage key with access token value.
 * @param {Object} userToken This is the localStorage key with user profile data value.
 */
export function checkUserTokenLogin() {
  if (token && userToken) {
    window.location.href = "../index.html";
  }
}

/**
 * This function stores the JSON Web Token as JSON to localStorage.
 * @param {string} key name of key in localStorage
 * @param {*} value The value of the key.
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This function retrieves and parse the Web Token from localStorage.
 * @param {string} key name of key in localStorage
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * This function removes the JSON Web Token from localStorage.
 * @param {string} key name of key in localStorage
 */
export function remove(key) {
  localStorage.removeItem(key);
}
