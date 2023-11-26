import "./booking-venue-list.scss";
import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import VenueCard from "../../components/venue-card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import { API_URL_VENUES } from "../../services/api/constants";
import { load } from "../../utilities/save_load_remove_local_storage";
//import { ProfileInfoApi } from "../../services/api/profile";
import useAllVenues from "../../services/api/venues";
import { getBookingInfoApi } from "../../hooks/bookingData";
//import { useProfileData } from "../hooks/useProfileData";
//import { useProfileData } from "../hooks/useProfileData";
import { sortBookings } from "../../utilities/sort-bookings";

const params = "venues";

export default function BookingList() {
  const userType = load("venueManager");
  //const [profile, setProfile] = useState(load("profile"));
  //console.log(userType);
  //const name = profile.name;
  //const [data, isLoading, isError] = ProfileInfoApi(name, params);
  const [data, isLoading, isError] = useAllVenues(API_URL_VENUES);

  //const [show1, setShow1] = useState(false);
  //const [show2, setShow2] = useState(false);
//
  //const bookings = useProfileData(profile)

  async function fetchProfileInfo() {
    const params = userType === false ? "?_customer=true" : "?_venue=true"
    try {
      const result = await getBookingInfoApi(params);
      if (result) {
        return({
          ...result,
          bookings: sortBookings(result.bookings),
        });
      }
    } catch (error) {
      console.error("Error fetching profile info:", error);
    }
  }

const bookingVenueData = fetchProfileInfo()

console.log(bookingVenueData)

  return (
    <>
      <Helmet>
        <title>Your Bookings - Holidaze</title>
        <meta name="description" content="Booking list" />
      </Helmet>
      <main className="list">
        {" "}
        {userType === false ? (
          <>
            <section>
              <div className="booking-title fs-1 ps-4">
                Upcoming <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                  <div className="w-100 text-end">
                    Total <b>10</b>
                  </div>
                  Recent{" "}
                </div>
              </div>
            </section>
            <section>
              <div className="booking-title fs-1 px-5">
                Total <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 ps-3 mt-3 mb-2">
                  Recent
                </div>
              </div>
            </section>
            <section>
              <div className="booking-title fs-1 px-5">
                Previous <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 ps-3 mt-3 mb-2">
                  Recent
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="venues-list ">
              <div className="venues-title fs-1 ps-4 text-center border border-0">
                Venues <div className="text-center ps-5 ms-5">managed</div>
              </div>
              <div className="container">
                <div className="divider w-100 dropdown-toggle gap-2 ps-3 mt-3 mb-2">
                  Recent
                </div>
                <div className="d-flex flex-row flex-wrap align-items-end justify-content-center">
                  {isLoading ? (
                    <SpinnerLoad />
                  ) : isError ? (
                    <ErrorLoad />
                  ) : (
                    data.map((venue, index) => (
                      <VenueCard key={index} data={venue} />
                    ))
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
