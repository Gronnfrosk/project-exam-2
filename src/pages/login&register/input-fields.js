const name = {
  title: "Name",
  placeholder: "e.g.  John_Doe",
  type: "text",
};

const email = {
  title: "Email",
  placeholder: "Example@stud.noroff.no",
  type: "text",
};

const password = {
  title: "Password",
  placeholder: "At least 8 characters",
  type: "password",
  autocomplete: "on",
};

const repeat = {
  title: "Confirm",
  placeholder: "Repeat password",
  type: "password",
  autocomplete: "on",
};

const avatar = {
  title: "Avatar",
  placeholder: "http://www.example.com",
  type: "url",
};

export const LoginInputs = [email, password];

export const registerInputs = [name, email, password, repeat, avatar];
