// Må få ordnet inlogging så bruke resten av koden

export const ThemeMode = () => {
  //const setNoneUserMode = () => {
  //  document.querySelector("body").setAttribute("data-theme", "noneUser");
  //  localStorage.setItem("selectedUserTheme", "noneUser");
  //
  //};
  //
  //const setCustomerMode = () => {
  //  document.querySelector("body").setAttribute("data-theme", "customer");
  //  localStorage.setItem("selectedUserTheme", "customer");
  //};

  const setManagerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "manager");
    localStorage.setItem("selectedUserTheme", "manager");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "manager") {
    setManagerMode();
  }

  //const UserStatus = (e) => {
  //  if (localStorage === "") setNoneUserMode();
  //  else if (localStorage === false) setCustomerMode();
  //  else if (localStorage === true) setManagerMode();
  //};
};
