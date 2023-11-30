import * as yup from "yup";

export const updateVenueSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  maxGuests: yup
    .number()
    .required("Max guests is required")
    .positive("Max guests must be a positive number"),
  price: yup
    .number()
    .required("Price is required")
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
