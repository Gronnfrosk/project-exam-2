import "./booking-venue-list.scss";
import { Helmet } from "react-helmet-async";
import React, { useState, useEffect, useMemo } from "react";
import { load } from "../../utilities/save_load_remove_local_storage";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import VenueCard from "../../components/venue-card";
import { useNavigate } from "react-router-dom";
import BookingList from "../../pages/booking-venue-list/booking-list";
import { ProfileInfoApi } from "../../services/api/profile";
import { useBookingFilter } from "../../hooks/useBookingFilter";

export default function MyList() {
  const [profileResult, setProfileResult] = useState(null);
  const bookingFilterResult = useBookingFilter(
    profileResult ? profileResult.bookings : [],
  );
  const [error, setError] = useState(null);
  const profile = useMemo(() => load("profile"), []);
  const userType = useMemo(() => load("venueManager"), []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!profile) {
        navigate("/");
        return;
      }

      try {
        const params =
          userType === false
            ? "?_bookings=true"
            : userType === true
            ? "?_venues=true"
            : "";
        const result = await ProfileInfoApi(profile.name, params);
        setProfileResult(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [navigate, profile, userType]);

  const { upcomingBookings, previousBookings } = useMemo(
    () => ({
      upcomingBookings: bookingFilterResult.upcomingBookings,
      previousBookings: bookingFilterResult.previousBookings,
    }),
    [bookingFilterResult],
  );

  if (error) {
    return <ErrorLoad />;
  }

  return (
    <>
      <Helmet>
        <title>
          {profile.name} {userType === false ? "Bookings" : "Venues"} - Holidaze
        </title>
        <meta name="description" content="Profile inventory list" />
      </Helmet>

      <main className="list">
        {!profileResult ? (
          <SpinnerLoad />
        ) : userType === false && profileResult.bookings ? (
          <>
            <BookingList
              upcomingBookings={upcomingBookings}
              previousBookings={previousBookings}
              profileResult={profileResult.bookings}
            />
          </>
        ) : userType === true && profileResult.venues ? (
          <>
            <section className="venues-list">
              <div className="venues-title fs-1 ps-4 text-center">
                Venues <div className="text-center ps-5 ms-5">managed</div>
              </div>
              <div className="container">
                <div className="divider w-100 dropdown-toggle gap-2 ps-3 mt-3 mb-2 gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                  <div className="w-100 text-end">
                    Total{" "}
                    <b>
                      {" "}
                      {profileResult.venues.length > 0
                        ? profileResult.venues.length
                        : "0"}
                    </b>
                  </div>
                  Recently created
                </div>
                <div className="card-container d-flex flex-row flex-wrap justify-content-evenly">
                  {profileResult.venues.length > 0 ? (
                    profileResult.venues.map((venue, index) => (
                      <VenueCard key={index} data={venue} />
                    ))
                  ) : (
                    <div className="empty-list">
                      You have no venues at the moment
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        ) : (
          <ErrorLoad />
        )}
      </main>
    </>
  );
}
