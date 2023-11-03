// Må få ordnet inlogging så bruke resten av koden

export const ThemeMode = () => {
  //const setNoneUserMode = () => {
  //  document.querySelector("body").setAttribute("data-theme", "default");
  //};
//
  //const setCustomerMode = () => {
  //  document.querySelector("body").setAttribute("data-theme", "customer");
  //};

  const setManagerMode = () => {
    document.querySelector("body").setAttribute("data-theme", "manager");
  };

  //const UserStatus = (e) => {
  //  if (localStorage === "") setNoneUserMode();
  //  else if (localStorage === false) setCustomerMode();
  //  else if (localStorage === true) setManagerMode();
  //};

  setManagerMode();
};
