import * as yup from "yup";

export const updateVenueSchema = yup.object().shape({
  name: yup
  .string()
  .min(10, "Your name should be at least 15 characters.")
  .max(50, "Your name cannot be longer than 50 characters.")
  .required("Name is required"),
  description: yup
  .string()
  .min(20, "Your description should be at least 20 characters.")
  .max(500, "Your description cannot be longer than 500 characters.")
  .required("Description is required"),
  maxGuests: yup
  .number()
  .typeError("Max guests must be a number")
  .moreThan(0, "Number of guests must be more than 0")
  .integer("Number of guests must be an integer")
  .required("Max guests is required"),
  price: yup
    .number()
    .required("Price is required")
    .max(100000000, "Price must be less")
    .positive("Price must be a positive number"),
  rating: yup
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot be more than 5"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.number().required("Zip code is required"),
  country: yup.string().required("Country is required"),
});
