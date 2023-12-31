import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import "./create-edit-venue.scss";
import { InputForm } from "../../components/form-input";
import { createVenueSchema } from "../../validations/schemas/create-venue";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createInputs,
  amenitiesInputs,
  locationInputs,
} from "./create-update-fields";
import { PrimaryButton } from "../../components/buttons/button.styles";
import { Container, Form, InputGroup } from "react-bootstrap";
import { createVenue } from "../../services/api/create-venues";
import { useNavigate } from "react-router-dom";

export default function CreateVenue() {
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(createVenueSchema),
  });

  const handleInputChange = async (e) => {
    const fieldName = e.target.name;
    await trigger(fieldName);
  };

  const handleImageUrlChange = (e) => {
    setImageUrlInput(e.target.value);
  };

  const addImageUrl = () => {
    if (imageUrlInput) {
      setImageUrls([...imageUrls, imageUrlInput]);
      setImageUrlInput("");
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const deleteImageUrl = (urlToDelete) => {
    setImageUrls(imageUrls.filter((url) => url !== urlToDelete));
  };

  async function onSubmit(data) {
    const result = await createVenue(data, imageUrls);
    if (result === true) {
      navigate("/my-list");
    }
  }

  return (
    <>
      <Helmet>
        <title>Create Venue - Holidaze</title>
        <meta name="description" content="Create a venue" />
      </Helmet>
      <Container className="create-venue-container">
        <h1>Create new venue</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="create-section px-3">
            {createInputs.map((input) => {
              const fieldName =
                input.title === "Max guests"
                  ? "maxGuests"
                  : input.title.toLowerCase();

              return (
                <div className="input-wrapper" key={input.title}>
                  <InputForm
                    key={input.title}
                    title={fieldName}
                    placeholder={input.placeholder}
                    type={input.type}
                    size={input.size}
                    validate={register}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                  {errors[fieldName] && (
                    <p className="error-message ps-3 w-100">
                      {errors[fieldName].message}
                    </p>
                  )}
                </div>
              );
            })}
            <div className="image-input-container d-flex">
              <InputGroup className="w-100 d-flex flex-column">
                <div className="input">
                  <Form.Label className="rounded-start-pill shadow-sm text-white">
                    Image
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="http://www.example.com"
                    value={imageUrlInput}
                    onChange={handleImageUrlChange}
                    autoComplete="off"
                    className="image-url-input"
                  />
                </div>
                <PrimaryButton
                  type="button"
                  className="m-auto mb-4 rounded-pill"
                  onClick={addImageUrl}
                >
                  Add Image
                </PrimaryButton>
              </InputGroup>
            </div>
            <div className="image-preview-list flex-row flex-wrap w-100 gap-3">
              {imageUrls.map((url, index) => (
                <div key={index} className="d-flex flex-column">
                  <img src={url} alt={`Preview ${index}`} />
                  <button type="button" onClick={() => deleteImageUrl(url)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="divider mx-4 my-4"></div>
          <div className="location-section px-3">
            <h4>Location:</h4>
            {locationInputs.map((input) => {
              const fieldinput = input.title.toLocaleLowerCase();

              return (
                <div className="input-wrapper" key={input.title}>
                  <InputForm
                    key={input.title}
                    title={fieldinput}
                    placeholder={input.placeholder}
                    type={input.type}
                    size={input.size}
                    validate={register}
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e)}
                  />
                  {errors[fieldinput] && (
                    <p className="error-message">
                      {errors[fieldinput].message}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="amenities-section ps-3">
            <h4>Amenities:</h4>
            {amenitiesInputs.map((input) => (
              <div className="input-wrapper" key={input.title}>
                <InputForm
                  key={input.title}
                  name={input.name}
                  title={input.title}
                  placeholder={input.placeholder}
                  type={input.type}
                  validate={register}
                  onChange={handleInputChange}
                />
                {errors[input.title.toLowerCase()] && (
                  <p className="error-message">
                    {errors[input.title.toLowerCase()].message}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="divider mx-4 my-4"></div>
          <PrimaryButton
            display={"block"}
            className="m-auto btn btn-animate mb-4"
            type="submit"
          >
            Create Venue
          </PrimaryButton>
        </Form>
      </Container>
    </>
  );
}
