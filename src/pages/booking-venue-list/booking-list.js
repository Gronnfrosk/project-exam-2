import "./booking-venue-list.scss";
import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import VenueCard from "../../components/venue-card";
//import ListGroup from "react-bootstrap/ListGroup";
//import Button from "react-bootstrap/Button";
//import Collapse from "react-bootstrap/Collapse";
//import { Link } from "react-router-dom";
//import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
//import { ProfileInfoApi } from "../../services/api/profile";
//import { useProfileData } from "../hooks/useProfileData";
//import { useBookingVenueData } from "../../hooks/bookingData";
import ListGroup from "react-bootstrap/ListGroup";
import { load } from "../../utilities/save_load_remove_local_storage";
import { API_URL_VENUES } from "../../services/api/constants";
import { useProfileData } from "../../hooks/useProfileData";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import VenueCard from "../../components/venue-card";
import { useBookingFilter } from "../../hooks/useBookingFilter";
import BookingItem from "./bookingVenue";

const userType = false;
//const params = "venues";

export default function BookingList() {
  const [openItemId, setOpenItemId] = useState(null);
  const venuesUrl = `${API_URL_VENUES}?__venue=true&sort=created&sortOrder=desc`;
  const [profile, setProfile] = useState(load("profile"));
  const [profileSuccess, setProfileSuccess] = useState(null);
  useProfileData(profile, setProfileSuccess);
  const { upcomingBookings, previousBookings } = useBookingFilter(
    profileSuccess ? profileSuccess.bookings : [],
  );

  if (!profileSuccess) {
    return <SpinnerLoad />;
  }

  const toggleCollapse = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };
  // For debugging
  //console.log(profileSuccess);
  //console.log(profileSuccess.bookings);

  return (
    <>
      <Helmet>
        <title>Your Bookings - Holidaze</title>
        <meta name="description" content="Booking list" />
      </Helmet>
      <main className="list">
        {profileSuccess && userType === false ? (
          <>
            <section>
              <div className="booking-title fs-1 ps-4">
                Upcoming <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                  <div className="w-100 text-end">
                    Total{" "}
                    <b>
                      {" "}
                      {upcomingBookings.length > 0
                        ? upcomingBookings.length
                        : "0"}
                    </b>
                  </div>
                  Recent{" "}
                </div>
              </div>
              <div className="upcoming-bookings">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItemId === booking.id}
                      toggle={() => toggleCollapse(booking.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
            <section id="total-bookings">
              <div className="booking-title fs-1 px-5">
                Total <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                  <div className="w-100 text-end">
                    Total{" "}
                    <b>
                      {" "}
                      {profileSuccess.bookings.length > 0
                        ? profileSuccess.bookings.length
                        : "0"}
                    </b>
                  </div>
                  Recent{" "}
                </div>
              </div>
              <div className="previous-bookings">
                {profileSuccess.bookings.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItemId === booking.id}
                      toggle={() => toggleCollapse(booking.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
            <section id="previous-bookings">
              <div className="booking-title fs-1 px-5">
                Previous <div>Bookings</div>
              </div>
              <div className="container">
                <div className="divider dropdown-toggle gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                  <div className="w-100 text-end">
                    Total{" "}
                    <b>
                      {" "}
                      {previousBookings.length > 0
                        ? previousBookings.length
                        : "0"}
                    </b>
                  </div>
                  Recent{" "}
                </div>
              </div>
              <div className="all-bookings">
                {previousBookings.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItemId === booking.id}
                      toggle={() => toggleCollapse(booking.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="venues-list "></section>
          </>
        )}
      </main>
    </>
  );
}

//<>
//<section className="venues-list ">
//  <div className="venues-title fs-1 ps-4 text-center border border-0">
//    Venues <div className="text-center ps-5 ms-5">managed</div>
//  </div>
//  <div className="container">
//    <div className="divider w-100 dropdown-toggle gap-2 ps-3 mt-3 mb-2">
//      Recent
//    </div>
//    <div className="d-flex flex-row flex-wrap align-items-end justify-content-center">
//      {isLoading ? (
//        <SpinnerLoad />
//      ) : isError ? (
//        <ErrorLoad />
//      ) : (
//        data.map((venue, index) => (
//          <VenueCard key={index} data={venue} />
//        ))
//      )}
//    </div>
//  </div>
//</section>
//</>
