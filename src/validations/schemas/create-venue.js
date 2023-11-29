import * as yup from "yup";

export const createVenueSchema = yup.object({
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
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  maxGuests: yup
    .number()
    .typeError("Max guests must be a number")
    .moreThan(0, "Number of guests must be more than 0")
    .integer("Number of guests must be an integer")
    .required("Max guests is required"),
  rating: yup
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot be more than 5"),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .min(4)
    .max(4)
    .typeError("Zip must be 4 a number")
    .required("Zip must be 4 numbers"),
});
