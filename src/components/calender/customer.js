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

const error = (
  <Form.Text className="d-block text-danger fw-bold ps-2 mb-3">
    * Please enter dates for booking.
  </Form.Text>
);

function isSameDay(a, b) {
  return a.toDateString() === b.toDateString();
}

export default function CustomerCalender(props) {
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

  const bookingValidationSchema = useMemo(
    () => createBookingSchema(maxGuests),
    [maxGuests],
  );
  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(
    () => new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    [],
  );

  function dateCalc(dateFrom, dateEnd) {
    const dateDiffer = require("date-differ");
    const result = dateDiffer({
      from: dateFrom,
      to: dateEnd,
      days: true,
    });

    return result;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingValidationSchema),
  });

  async function onSubmit(data) {
    setDateError("");
    setModal("");

    if (!date[1]) {
      setDateError(error);
      return;
    }

    data.checkIn = new Date(date[0]);
    data.checkOut = new Date(date[1]);
    data.venueId = bookingID;

    try {
      const result = await createBooking(data);
      if (result) {
        setFormSuccess(result);
      } else {
        console.log("Booking returned undefined or null");
      }
    } catch (error) {
      console.error("Error fetching booking post", error);
    }
  }

  useEffect(() => {
    if (formSuccess) {
      setModal(viewBookingModal(formSuccess));
    }
  }, [formSuccess]);

  return (
    <div className="booking-form mt-4 text-center">
      <h2 className="fw-bold  mb-2">Start booking today</h2>
      <p>Available bookings are shown in calendar below.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Calendar
            className="costumer"
            view="month"
            minDate={minDate}
            maxDate={maxDate}
            onChange={setDate}
            selectRange={true}
            tileDisabled={tileDisabled}
          />
        </div>
        <div className="form">
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="list-top text-center">
              Selected booking period
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between px-4"
            >
              Check-in:{" "}
              <div>
                {date[0] ? date[0].toLocaleDateString("en-GB") : " dd/mm/yyyy"}
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between px-4"
            >
              Check-out:{" "}
              <div>
                {date[1] ? date[1].toLocaleDateString("en-GB") : " dd/mm/yyyy"}
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between px-4"
            >
              Duration:{" "}
              <div>
                {date.length > 1 ? dateCalc(date[0], date[1]) : "0 days"}
              </div>
            </ListGroup.Item>
          </ListGroup>
          {dateError}
          <Form.Group>
            <InputForm
              name={"Guests"}
              title={"guests"}
              placeholder={"0"}
              type={"number"}
              validate={register}
            />
            <Form.Text className="d-block text-danger fw-bold ps-2 mb-3">
              {errors.guests?.message}
            </Form.Text>
          </Form.Group>
          <div className="mt-4 text-center">
            <ButtonExpandNavbar
              custom={"Place booking"}
              color={false}
              arrow={"black"}
              type={"submit"}
            />
          </div>
        </div>
      </Form>
      {modal}
    </div>
  );
}
