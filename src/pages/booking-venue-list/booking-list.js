import React, { useState } from "react";
import { ErrorLoad } from "../../components/error-load";
import BookingItem from "../../components/booking-list-card";

export default function BookingList(props) {
  const { upcomingBookings, previousBookings, profileResult } = props;
  const [openItem, setOpenItem] = useState({ id: null, section: null });

  if (!profileResult) {
    return <ErrorLoad />;
  }

  const toggleCollapse = (id, section) => {
    if (openItem.id === id && openItem.section === section) {
      setOpenItem({ id: null, section: null }); // Close if it's the same booking
    } else {
      setOpenItem({ id: id, section: section }); // Open the clicked booking
    }
  };

  return (
    <>
      {" "}
      {upcomingBookings !== undefined ? (
        <div className="booking-list">
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
                Next booking{" "}
              </div>

              <div className="upcoming-bookings">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItem.id === booking.id && openItem.section === 'upcoming'}
                      toggle={() => toggleCollapse(booking.id, 'upcoming')}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="previous-bookings">
            <div className="booking-title fs-1 px-5">
              Total <div>Bookings</div>
            </div>
            <div className="container">
              <div className="divider dropdown-toggle gap-2 px-1 mt-3 mb-2 d-flex w-100 flex-row-reverse">
                <div className="w-100 text-end">
                  Total{" "}
                  <b>
                    {" "}
                    {profileResult.length > 0 ? profileResult.length : "0"}
                  </b>
                </div>
                Recently booked{" "}
              </div>
              <div className="all-bookings">
                {profileResult.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItem.id === booking.id && openItem.section === 'total'}
                      toggle={() => toggleCollapse(booking.id, 'total')}
                    />
                  </div>
                ))}
              </div>{" "}
            </div>
          </section>
          <section id="total-bookings">
            <div className="booking-title fs-1 px-5 ">
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
                Recent stays{" "}
              </div>

              <div className="previous-bookings">
                {previousBookings.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItem.id === booking.id && openItem.section === 'previous'}
                      toggle={() => toggleCollapse(booking.id, 'previous')}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <ErrorLoad />
      )}
    </>
  );
}
