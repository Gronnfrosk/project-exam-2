import "./specific-venue.scss";
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { API_URL_VENUES } from "../../services/api/constants";
import useAllVenues from "../../services/api/venues";
import { VenueCardIcons, SpecificIcons } from "../../assets/icons/icons";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { AvatarImg } from "../../components/profile-avatar";
import ReactCalender from "../../components/calender/react-calender";
import { useParams } from "react-router-dom";
import {
  EditVenueBtn,
  DeleteVenueBtn,
} from "../../components/buttons/button.styles";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
//import getBookedDates from "../../helpers/formatting/get-dates"

function SpecificVenuePage() {
  const params = useParams();
  const url = `${API_URL_VENUES}/${params.id}?_owner=true&_bookings=true`;
  const [data, isLoading, isError] = useAllVenues(url);

  // Memoize icons to avoid recalculation on each render
  const { WifiIcon, ParkIcon, BreakfastIcon, PetIcon } = useMemo(
    () => VenueCardIcons(),
    [],
  );
  const { EditIcon, DeleteIcon } = useMemo(() => SpecificIcons(), []);

  const description = useMemo(
    () => `Info about the venue - ${data?.name}`,
    [data],
  );

  if (isLoading) {
    return <SpinnerLoad />;
  }

  if (isError || !data?.name) {
    return <ErrorLoad />;
  }

  return data.name ? (
    <>
      <Helmet>
        <title>Venue - {data.name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="specific mb-5 mt-3">
        <section className="part-1">
          {data.media && data.media.length > 0 ? (
            <Carousel fade data-bs-theme="dark">
              {data.media.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} alt="Image of venue" />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Image
              src={
                "https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279003.jpg?size=626&ext=jpg&ga=GA1.1.933137767.1681841899&semt=ais"
              }
              style={{
                height: "100%",
                margin: "auto",
              }}
              alt="No image of venue"
            />
          )}
          <div className="price">
            <b>{data.price}</b> kr/d
          </div>
        </section>
        <section className="part-2 mt-4">
          <h1>{data.name}</h1>
          <div className="d-flex flex-row align-items-center justify-content-between py-1  border-top border-bottom border-black">
            <div className="rating ps-3">
              Rating
              <div className="this-rating ms-2">{data.rating}/</div>
              <div className="max-rating">5</div>
            </div>
            <div className="user-feature">
              <EditVenueBtn title="Edit venue">{EditIcon}</EditVenueBtn>
              <DeleteVenueBtn title="Delete venue">{DeleteIcon}</DeleteVenueBtn>
            </div>
            <div className="rating">
              Max guests:{" "}
              <div className="fw-bold ms-2 me-3">{data.maxGuests}</div>
            </div>
          </div>
        </section>
        <section className="part-3 d-flex flex-wrap justify-content-center gap-5 align-items-center">
          <div className="venue-location-amenities">
            <div className="venue-location">
              <div className="title">Location:</div>
              <div className="location-country-address">
                <div>{data.location.country}</div>
                {data.location.address}, <br />
                {data.location.city}, <br />
                {data.location.zip}
              </div>
            </div>
            <div className="amenities">
              <div className="title">Amenities:</div>
              <ul className="amenity-list">
                <li
                  className={
                    data.meta.wifi === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {" "}
                  {WifiIcon} Free WIFI
                </li>
                <li
                  className={
                    data.meta.parking === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {ParkIcon} Parking available
                </li>
                <li
                  className={
                    data.meta.breakfast === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : ""
                  }
                >
                  {BreakfastIcon} Breakfast included
                </li>
                <li
                  className={
                    data.meta.pets === false
                      ? "list-group-item text-decoration-line-through text-danger"
                      : "list-group-item"
                  }
                >
                  {" "}
                  {PetIcon} Pets allowed
                </li>
              </ul>
            </div>
            <div className="w-100 me-5">
              <div className="title my-2">Description:</div>
              {data.description}
            </div>
            <div className="w-100 me-5">
              General booking info: On this site you can book a venue a year
              into the future. At this venue it is posssible to checkin after
              13:00 and checkout must be before 11:00.
            </div>
          </div>
          <div className="venue-manager-profile">
            <AvatarImg
              Avatar={data.owner.avatar}
              Name={data.owner.name}
              UserType={"Venue manager"}
              Email={data.owner.email}
              specific={true}
            />
          </div>
        </section>
        <section className="part-4 mt-5">
          <h2 className="fw-bold text-center mb-2 text-center position-relative">
            Start booking today
          </h2>
          <ReactCalender userStatus={false} venueData={data} />
        </section>
      </main>
    </>
  ) : (
    <ErrorLoad />
  );
}

export default SpecificVenuePage;
