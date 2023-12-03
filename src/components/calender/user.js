import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ButtonExpandNavbar } from "../buttons/expand-btn";

function isSameDay(a, b) {
  return a.toDateString() === b.toDateString();
}

export default function ReactCalender(props) {
  const bookings = props.venueData.bookings;
  const userStatus = props.userStatus;

  const disabledDates = useMemo(() => {
    return bookings
      .map((booking) => {
        let start = new Date(booking.dateFrom);
        let end = new Date(booking.dateTo);
        let dates = [];
        for (let dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
          dates.push(new Date(dt));
        }
        return dates;
      })
      .flat();
  }, [bookings]);

  function tileDisabled({ date, view }) {
    if (view === "month") {
      return disabledDates.some((disabledDate) =>
        isSameDay(disabledDate, date),
      );
    }
  }

  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(
    () => new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    [],
  );

  return (
    <div className="user-calendar text-center flex-column justify-content-center">
      <h2 className="fw-bold  mb-2">Start booking today</h2>
      <p>Available bookings are shown in calendar below.</p>
      <Calendar
        className="user"
        view="month"
        minDate={minDate}
        maxDate={maxDate}
        tileDisabled={tileDisabled}
      />
      {userStatus === true ? (
        <p>
          You are currently logged in as Venue manager. <br /> Please log in
          with a customer account to enable the option to place bookings.
        </p>
      ) : (
        <Link to="/login-register" className="text-center">
          <ButtonExpandNavbar
            custom={"Login or register"}
            color={false}
            arrow={"black"}
          />{" "}
        </Link>
      )}
    </div>
  );
}
