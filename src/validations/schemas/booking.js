import * as yup from "yup";

export const schemaBooking = yup
  .object({
    CheckIn: yup
      .string()
      .required("Please enter a start date."),
    CheckOut: yup
      .string()
      .required("Please enter an end date."),
    Guests: yup
        .string()
        .required("please enter amount of guests"),
  })
  .required();
