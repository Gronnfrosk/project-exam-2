import * as yup from "yup";

export const schemaAvatar = yup
  .object({
    Avatar: yup
      .string()
      .url("Please enter a valid url")
      .matches(
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        "Please enter a valid url!",
      )

      .required("Please enter an url for your avatar."),
  })
  .required();
