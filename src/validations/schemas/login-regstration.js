import * as yup from "yup";

export const schemaRegister = yup
  .object({
    Name: yup
      .string()
      .min(3, "Your name should be at least 3 characters.")
      .max(30, "Your name cannot be longer than 30 characters.")
      .matches(
        /^[\w]+$/,
        "Please enter username. It must not contain punctuation symbols apart from underscore (_)",
      )
      .required("Please enter your name."),
    Email: yup
      .string()
      .email("Please enter valid email")
      .matches(
        /^[\w\-.]+@stud\.noroff\.no$/,
        "Only @stud.noroff.no email are allowed to register.",
      )
      .required("Please enter your email."),
    Password: yup
      .string()
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your password cannot be longer than 30 characters.")
      .required("Please enter password."),
    Confirm: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.Password === value;
      })
      .required("Please confirm password."),
    Avatar: yup
      .string()
      .url("Please enter a valid url")
      .matches(
        /[(http(s)?):/(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        "Please enter a valid url!",
      )
      .required("Please enter an url for your avatar."),
  })
  .required();

export const schemaLogin = yup
  .object({
    Email: yup
      .string()
      .email("Please enter valid email")
      .matches(
        /^[\w\-.]+@stud\.noroff\.no$/,
        "Only @stud.noroff.no may register and login.",
      )
      .required("Please enter your email."),
    Password: yup
      .string()
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your password cannot be longer than 30 characters.")
      .required("Please enter password."),
  })
  .required();
