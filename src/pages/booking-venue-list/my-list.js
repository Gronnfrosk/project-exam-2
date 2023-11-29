import "./booking-venue-list.scss";
import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { load } from "../../utilities/save_load_remove_local_storage";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import VenueCard from "../../components/venue-card";
import { useNavigate } from "react-router-dom";
import BookingList from "../../pages/booking-venue-list/booking-list";
import { ProfileInfoApi } from "../../services/api/profile";
import { useBookingFilter } from "../../hooks/useBookingFilter";

export default function MyList() {
  const [profileResult, setProfileResult] = useState(null);
  const [error, setError] = useState(null);
  const userType = load("venueManager");
  const profile = load("profile");
  const navigate = useNavigate();
  const { upcomingBookings, previousBookings } = useBookingFilter(
    profileResult ? profileResult.bookings : [],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!profile) {
          navigate("/");
          return;
        }

        const params =
          userType === false
            ? "?_bookings=true&_sort=created&sortOrder=desc"
            : userType === true
            ? "?_venues=true&_sort=created&sortOrder=desc"
            : "";
        const result = await ProfileInfoApi(profile.name, params);
        setProfileResult(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [navigate]);

  if (error) {
    return <ErrorLoad />;
  }

  if (!profileResult) {
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
        {userType === false && profileResult.bookings ? (
          <>
            <BookingList
              upcomingBookings={upcomingBookings}
              previousBookings={previousBookings}
              profileResult={upcomingBookings}
            />
          </>
        ) : userType === true && profileResult.venues ? (
          <>
            <section className="venues-list">
              <div className="venues-title fs-1 ps-4 text-center">
                Venues <div className="text-center ps-5 ms-5">managed</div>
              </div>
              <div className="container">
                <div className="divider w-100 dropdown-toggle gap-2 ps-3 mt-3 mb-2">
                  Recent
                </div>
                <div className="d-flex flex-row flex-wrap align-items-end justify-content-center">

                  { profileResult.venues.length > 0 ? profileResult.venues.map((venue, index) => (
                    <VenueCard key={index} data={venue} />
                  )) : <div className="empty-list">You have no venues at the moment</div>}
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
