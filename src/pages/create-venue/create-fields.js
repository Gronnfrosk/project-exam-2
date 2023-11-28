const name = {
  title: "Name",
  placeholder: "e.g.  Beautiful house in the country side",
  type: "text",
};

const description = {
  title: "Description",
  type: "textarea",
  size: "4",
};

const price = {
  title: "Price",
  placeholder: "(kr/d)",
  type: "number",
};

const guests = {
  title: "Max guests",
  placeholder: "0",
  type: "number",
};

const rating = {
  title: "Rating",
  placeholder: "0",
  type: "number",
};

const wifi = {
  name: "Free WiFI",
  title: "wifi",
  type: "switch",
  label: "Free WiFI",
};

const parking = {
  name: "Parking available",
  title: "parking",
  type: "switch",
  label: "Parking available",
};

const breakfast = {
  name: "Breakfast included",
  title: "breakfast",
  type: "switch",
  label: "Breakfast included",
};

const pets = {
  name: "Pets allowed",
  title: "pets",
  type: "switch",
  label: "Pets allowed",
};

const country = {
  title: "Country",
  type: "text",
};

const address = {
  title: "Address",
  type: "text",
};

const city = {
  title: "City",
  type: "text",
};

const zip = {
  title: "Zip",
  placeholder: "",
  type: "number",
};

export const createInputs = [name, description, price, guests, rating];

export const amenitiesInputs = [wifi, parking, breakfast, pets];

export const locationInputs = [country, address, city, zip];
