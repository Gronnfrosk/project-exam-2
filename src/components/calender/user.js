import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { Form } from "react-bootstrap";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBookingSchema } from "../../validations/schemas/booking";
import { ButtonExpandNavbar } from "../buttons/expand-btn";
import viewBookingModal from "../modal/booking";
import { InputForm } from "../form-input";
import ListGroup from "react-bootstrap/ListGroup";
import { createBooking } from "../../services/api/booking";

function isSameDay(a, b) {
  return a.toDateString() === b.toDateString();
}

export default function ReactCalender(props) {
  const UserStatus = props.userStatus;
  const bookings = props.venueData.bookings;
  const maxGuests = props.venueData.maxGuests;
  const bookingID = props.venueData.id;
  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [modal, setModal] = useState("");

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
      <Link to="/login-register" className="text-center">
        <ButtonExpandNavbar
          custom={"Login or register"}
          color={false}
          arrow={"black"}
        />{" "}
      </Link>
    </div>
  );
}
