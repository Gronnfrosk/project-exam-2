import * as yup from "yup";

export const schema = yup
  .object({
    Name: yup
      .string()
      .min(3, "Your name should be at least 3 characters.")
      .max(30, "Your name cannot be longer than 30 characters.")
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
      .max(30, "Your email cannot be longer than 30 characters.")
      .required("Please enter your email."),
    PasswordRepeat: yup
      .string()
      //.password("Not a valid password")
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your email cannot be longer than 30 characters.")
      .required("Please enter your email."),
    Avatar: yup
      .string()
      //.password("Not a valid password")
      .min(8, "Your password should be at least 8 characters.")
      .max(30, "Your email cannot be longer than 30 characters.")
      .required("Please enter your email."),
  })
  .required();