import * as yup from "yup";

export const schemaBooking = yup
  .object({
    //CheckIn: yup
    //  .string()
    //  .required("* Please enter valid check in date"),
    //CheckOut: yup
    //  .string()
    //  .required("* Please enter valid check out date"),
    guests: yup
      .number()
      .typeError("* How many guests?")
      .min(1, " * How many guests?")
      .required("* Please enter amount of guests."),
  })
  .required();
