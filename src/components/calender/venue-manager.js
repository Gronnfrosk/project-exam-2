import React, { useState, useEffect, useMemo, useRef } from "react";
import Calendar from "react-calendar";
import "./react-calender.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { getBookingDetail } from "../../services/api/booking";

export default function CalenderManager(props) {
  const bookings = props.venueData.bookings;
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({});
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
          classNames.push("start-date");
        }
        if (dateStr === endDateStr) {
          classNames.push("end-date");
        }
      });

      if (bookingDetailsByDate[dateStr]) {
        classNames.push("booked-date");
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

  const onBookingClick = async (bookingId) => {
    setSelectedBookingId(bookingId);

    if (!bookingDetails[bookingId]) {
      try {
        const details = await getBookingDetail(bookingId);
        setBookingDetails((prev) => ({ ...prev, [bookingId]: details }));
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    }
  };

  const sortedBookings = useMemo(() => {
    if (bookings && bookings.length > 0) {
      return [...bookings].sort(
        (a, b) => new Date(a.dateFrom) - new Date(b.dateFrom),
      );
    }
    return [];
  }, [bookings]);

  if (bookings.length === 0) {
    return (
      <h2 className="fw-bold text-center mb-2">No bookings at this venue</h2>
    );
  }

  return (
    <div className="venue-manager d-flex column-gap-3 flex-wrap justify-content-center">
      <div className="top-calendar mb-2 mx-3">
        <h2 className="fw-bold text-center mb-2">Bookings at this venue</h2>
        <p>
          To view booking details, please browse the list below. For specific
          customer details, simply click on the desired booking in the list.{" "}
          <br />
          <br /> If you're unable to locate a particular booking, use the
          calendar for assistance.
        </p>
      </div>
      <Calendar onClickDay={onClickDay} tileClassName={tileClassName} />
      <div
        ref={listContainerRef}
        className="scrollable-container"
        style={{
          width: "360px",
          maxHeight: "275px",
          overflowY: "auto",
          marginTop: "20px",
          padding: "0 10px",
          scrollBehavior: "smooth",
        }}
      >
        <ListGroup style={{ display: "flex" }}>
          {bookings
            ? sortedBookings.map((booking) => {
                const checkIn = new Date(booking.dateFrom);
                const checkOut = new Date(booking.dateTo);
                const details = bookingDetails[booking.id];
                const isActive = booking.id === selectedBookingId;

                return (
                  <ListGroup.Item
                    action
                    onClick={() => onBookingClick(booking.id)}
                    variant={isActive ? "secondary" : "light"}
                    key={booking.id}
                    ref={bookingRefs.current[booking.id]}
                    style={{
                      fontWeight:
                        booking.id === selectedBookingId ? "bold" : "normal",
                      borderRadius: "0",
                    }}
                  >
                    <b>Booking ID: {booking.id}</b>
                    <br />- From: {checkIn.toLocaleDateString("en-GB")}
                    <br />- To: {checkOut.toLocaleDateString("en-GB")}
                    <br />- Guests: {booking.guests}
                    {isActive && details && (
                      <div>
                        <p>
                          Customer: <br /> - Name: {details.customer.name}
                          <br />- Email {details.customer.email}
                          <br />
                        </p>
                      </div>
                    )}
                  </ListGroup.Item>
                );
              })
            : ""}
        </ListGroup>
      </div>
    </div>
  );
}
