import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { Form }from "react-bootstrap";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBooking } from "../../validations/schemas/booking";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import viewBookingModal from "../../components/modal/booking";
import { InputForm } from "../../components/form-input";
import ListGroup from "react-bootstrap/ListGroup";

const error = (
  <Form.Text className="d-block text-danger fw-bold ps-2 mb-3">
    * Please enter dates for booking.
  </Form.Text>
);

function isSameDay(a, b) {
  return a.toDateString() === b.toDateString();
}

export default function ReactCalender(props) {
  const UserStatus = props.userStatus;
  const bookings = props.venueData.bookings;
  const bookingID = props.venueData.id;
  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [modal, setModal] = useState("");

console.log(bookings)

  const disabledDates = useMemo(() => {
    return bookings.map(booking => {
      let start = new Date(booking.dateFrom);
      let end = new Date(booking.dateTo);
      let dates = [];
      for (let dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
        dates.push(new Date(dt));
      }
      return dates;
    }).flat();
  }, [bookings]);

  function tileDisabled({ date, view }) {
    if (view === 'month') {
      return disabledDates.some(disabledDate => isSameDay(disabledDate, date));
    }
  }

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
    resolver: yupResolver(schemaBooking),
  });

  function onSubmit(data) {
    setDateError("");
    setModal("");

    if (!date[1]) {
      setDateError(error);
      return;
    }

    data.checkIn = date[0].toLocaleDateString("en-GB");
    data.checkOut = date[1].toLocaleDateString("en-GB");
    data.venueId = bookingID;

    setFormSuccess(data);
  }

  useEffect(() => {
    if (formSuccess) {
      setModal(viewBookingModal(formSuccess));
    }
  }, [formSuccess]);

  return  (<div className="booking-form column-gap-5 mt-4">
  {UserStatus === null ? (
    <Link to="/login-register">
      <ButtonExpandNavbar
        custom={"Login or register to place booking"}
        color={false}
        arrow={"black"}
      />
    </Link>
  ) : (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Calendar
            className="costumer"
            view="month"
            minDate={new Date()}
            maxDate={
              new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            }
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
                {date[0]
                  ? date[0].toLocaleDateString("en-GB")
                  : " dd/mm/yyyy"}
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between px-4"
            >
              Check-out:{" "}
              <div>
                {date[1]
                  ? date[1].toLocaleDateString("en-GB")
                  : " dd/mm/yyyy"}
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
              min={"0"}
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
    </>
  )}
</div>
);
}