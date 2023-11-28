import React, { useState } from "react";
import { ErrorLoad } from "../../components/error-load";
import BookingItem from "../../components/booking-list-card";

export default function BookingList(props) {
  const { upcomingBookings, previousBookings, profileResult } = props
  const [openItemId, setOpenItemId] = useState(null);

  if (!profileResult) {
    return < ErrorLoad />;
  }

  const toggleCollapse = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return <> {upcomingBookings !== undefined?
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
                  Recent{" "}
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
              </div></div>
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
                      {profileResult.length > 0
                        ? profileResult.length
                        : "0"}
                    </b>
                  </div>
                  Recent{" "}
                </div>
             
              <div className="previous-bookings">
                {profileResult.map((booking) => (
                  <div key={booking.id}>
                    <BookingItem
                      booking={booking}
                      isOpen={openItemId === booking.id}
                      toggle={() => toggleCollapse(booking.id)}
                    />
                  </div>
                ))}
              </div> </div>
            </section>
            <section id="total-bookings">
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
              </div></div>
            </section>
            </div>
            : < ErrorLoad />
            }
        </>
}
