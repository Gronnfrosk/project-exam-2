const token = load("token");
const userToken = load("profile");

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function remove(key1, key2, key3) {
  localStorage.removeItem(key1);
  localStorage.removeItem(key2);
  localStorage.removeItem(key3);
}

export function checkUserToken() {
  if (!token && !userToken) {
    window.location.href = "../index.html";
  }
}

export function checkUserTokenLogin() {
  if (token && userToken) {
    window.location.href = "../index.html";
  }
}
