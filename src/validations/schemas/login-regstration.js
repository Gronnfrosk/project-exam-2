import * as yup from "yup";

export const schemaRegister = yup
  .object({
    Name: yup
      .string()
      .min(3, "Your name should be at least 3 characters.")
      .max(30, "Your name cannot be longer than 30 characters.")
      //.pattern("Hello", "No", "^[\w]+$")
      // value must not contain punctuation symbols apart from underscore (_)
      .required("Please enter your name."),
    Email: yup
      .string()
      .email("Please enter valid email")
      //.match (/^[\w\-.]+@stud\.noroff\.no$/, "The email value must be a valid stud.noroff.no or noroff.no email address")
      .required("Please enter your email."),
    Password: yup
      .string()
      //.password("Not a valid password")
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your password cannot be longer than 30 characters.")
      .required("Please enter password."),
    Confirm: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.Password === value;
      })
      //.password("Not a valid password")
      .required("Please confirm password."),
    Avatar: yup
      .string()
      .url("Please enter a valid url")
      .required("Please enter an url for your avata."),
  })
  .required();

export const schemaLogin = yup
  .object({
    Email: yup
      .string()
      .email("Please enter valid email")
      //.match (/^[\w\-.]+@stud\.noroff\.no$/, "The email value must be a valid stud.noroff.no or noroff.no email address")
      .required("Please enter your email."),
    Password: yup
      .string()
      //.password("Not a valid password")
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your password cannot be longer than 30 characters.")
      .required("Please enter password."),
  })
  .required();
