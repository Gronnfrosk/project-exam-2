import * as yup from "yup";

export const createBookingSchema = (maxGuests) => {
  return yup
    .object({
      guests: yup
        .number()
        .typeError("* How many guests?")
        .min(1, "* How many guests?")
        .max(
          maxGuests,
          `*There can not be more than ${maxGuests} guests at this venues.`,
        )
        .required("* Please enter amount of guests."),
    })
    .required();
};
