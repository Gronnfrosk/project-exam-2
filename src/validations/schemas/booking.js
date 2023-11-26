import * as yup from "yup";

export const createBookingSchema = (maxGuests) => {
  return yup.object({
    guests: yup
    .number()
    .typeError("* How many guests?")
    .min(1, " * How many guests?")
    .max(maxGuests, `* Maximum allowed guests are ${maxGuests}.`)
    .required("* Please enter amount of guests."),
  })
  .required();
}