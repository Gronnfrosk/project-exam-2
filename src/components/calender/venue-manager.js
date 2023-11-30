import React, { useState, useEffect, useMemo, useRef } from "react";
import Calendar from "react-calendar";
import "./react-calender.scss";
import ListGroup from "react-bootstrap/ListGroup";

export default function CalenderManager(props) {
  const bookings = props.venueData.bookings
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const bookingRefs = useRef({});
  const listContainerRef = useRef(null);

  const bookingDetailsByDate = useMemo(() => {
    const details = {};
    bookings.forEach((booking) => {
      let start = new Date(booking.dateFrom);
      let end = new Date(booking.dateTo);
      for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        const dateStr = dt.toISOString().split("T")[0];
        if (!details[dateStr]) {
          details[dateStr] = [];
        }
        details[dateStr].push(booking);
      }
    });
    return details;
  }, [bookings]);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toISOString().split("T")[0];
      let classNames = [];

      bookings.forEach((booking) => {
        const startDateStr = new Date(booking.dateFrom)
          .toISOString()
          .split("T")[0];
        // Reducing the end date by one day
        const endDate = new Date(booking.dateTo);
        endDate.setDate(endDate.getDate() - 1);
        const endDateStr = endDate.toISOString().split("T")[0];

        if (dateStr === startDateStr) {
          classNames.push("start-date"); // Class for start date
        }
        if (dateStr === endDateStr) {
          classNames.push("end-date"); // Class for end date
        }
      });

      if (bookingDetailsByDate[dateStr]) {
        classNames.push("booked-date"); // General class for booked dates
      }

      return classNames.join(" ");
    }
    return null;
  };

  useEffect(() => {
    bookingRefs.current = bookings.reduce((acc, booking) => {
      acc[booking.id] = React.createRef();
      return acc;
    }, {});
  }, [bookings]);

  const onClickDay = (value) => {
    const dateStr = value.toISOString().split("T")[0];
    const dayBookings = bookingDetailsByDate[dateStr];
    if (dayBookings && dayBookings.length > 0) {
      const bookingId = dayBookings[0].id;
      setSelectedBookingId(bookingId);

      const bookingElement = bookingRefs.current[bookingId].current;
      if (bookingElement && listContainerRef.current) {
        const container = listContainerRef.current;
        const scrollPosition = bookingElement.offsetTop - container.offsetTop;
        container.scrollTop = scrollPosition;
      }
    }
  };

  return (
    <div className="venue-manager d-flex column-gap-3 flex-wrap justify-content-center">
        <div className="text-center mb-2">
        <h2 className="fw-bold text-center mb-2">Bookings at this venue</h2>
      <p>Click the booked date in calendar to find more details in the list.</p></div>
      <Calendar onClickDay={onClickDay} tileClassName={tileClassName} />
      <div
        ref={listContainerRef}
        className="scrollable-container"
        style={{
            width: "360px",
            height: "275px",
             overflowY: "auto",
             marginTop: "20px",
             padding: "0 10px",
             scrollBehavior: "smooth",
        }}
      >
        <ListGroup style={{ display: "flex", flexDirection: "column-reverse" }}>
          {bookings
            ? bookings.map((booking) => {
                const checkIn = new Date(booking.dateFrom);
                const checkOut = new Date(booking.dateTo);

                const isActive = booking.id === selectedBookingId;

                return (
                  <ListGroup.Item
                    action
                    variant={isActive ? "secondary" : "light"}
                    key={booking.id}
                    ref={bookingRefs.current[booking.id]}
                    style={{
                      fontWeight:
                        booking.id === selectedBookingId ? "bold" : "normal",
                      borderRadius: "0",
                    }}
                  >
                    Booking ID: {booking.id} <br /> Guests: {booking.guests}{" "}
                    <br /> From: {checkIn.toLocaleDateString("en-GB")} <br />{" "}
                    To: {checkOut.toLocaleDateString("en-GB")}
                  </ListGroup.Item>
                );
              })
            : ""}
        </ListGroup>
      </div>
    </div>
  );
}
