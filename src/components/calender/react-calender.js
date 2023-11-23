import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaBooking } from "../../validations/schemas/booking";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
//import {useCreateBid } from "../../services/api/create-booking";
//import useAllVenues from "../../services/api/venues";
import viewBookingModal from "../../components/modal/booking";
import { differenceInCalendarDays } from "date-fns";

const error = (
  <Form.Text className="d-block text-danger fw-bold ps-2 mb-3">
    * Please enter dates for booking.
  </Form.Text>
);

const disabledDates = [new Date("2023-11-25"), new Date("2023-11-27")];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === "month") {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find((dDate) => isSameDay(dDate, date));
  }
}

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

export default function ReactCalender(props) {
  const [formSuccess, setFormSuccess] = useState("");
  const [modal, setModal] = useState("");
  const UserStatus = props.userStatus;
  const bookings = props.venueData.bookings;
  const bookingID = props.venueData.id;
  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState("");

  //const getDates = () => {
  //  if (bookings) {
  //      const start = new Date("2023-11-25");
  //      const end = new Date("2023-11-27");
  //      const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  //      const bookedDates = [];
  //      for (let i = 0; i <= days; i++) {
  //          const currentDate = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
  //          bookedDates.push(currentDate);
  //      }
  //    return bookedDates
  //  }
  //};

  const getDates = () => {
    const datess = [];
    if (bookings.length > 2) {
      bookings.map((booking) => {
        const start = new Date(booking.dateFrom);
        const end = new Date(booking.dateTo);
        const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
        const dates = [];
        for (let i = 0; i <= days; i++) {
          const currentDate = new Date(
            start.getTime() + i * 24 * 60 * 60 * 1000,
          );
          datess.push(currentDate);
          //console.log( dates)
          return datess;
        }
        //return dates
        return;
      });
    }
    //console.log(datess)
    //const start = new Date(new Date(bookings[x].dateFrom));
    //const end = new Date(bookings[x].dateTo);
    //const datesBooked = []
    //const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    //
    //for (let i = 0; i <= days; i++) {
    //    const currentDate = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
    //    datesBooked.push(currentDate);
    //}
  };

  //console.log(getDates())

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
    //console.log(data);

    setFormSuccess(data);
    //setModal(viewBookingModal(formSuccess))
  }

  useEffect(() => {
    {
      formSuccess ? setModal(viewBookingModal(formSuccess)) : setModal("");
    }
  }, [formSuccess]);

  return (
    <div className="booking-form column-gap-5 mt-4">
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
                // viser dato dagens dato
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                }
                onChange={setDate}
                //value={date}
                //onClickDay={(date) => console.log(date)}
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
        </>
      )}
      {modal}
    </div>
  );
}

//<Form.Group>
//  <InputForm
//    title={"CheckIn"}
//    placeholder={date[0] ? dateFormat(date[0]) : "dd/mm/yyyy"}
//    //value={(date) => setDate([date.selection])}
//    value={date[0] ? dateFormat(date[0]) : ""}
//    type={"text"}
//    validate={register}
//    onChange={(e) => this.setDate(e.target.value)}
//  />
//  <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
//    {errors.CheckIn?.message}
//  </Form.Text>
//</Form.Group>
//<Form.Group>
//  <InputForm
//    title={"CheckOut"}
//    placeholder={date[1] ? dateFormat(date[1]) : "dd/mm/yyyy"}
//    //value={(date) => setDate([date.selection])}
//    //value={date[1] ? dateFormat(date[1]) : "dd/mm/yyyy"}
//    type={"text"}
//    validate={register}
//  />
//  <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
//    {errors.CheckOut?.message}
//  </Form.Text>
//</Form.Group>

//{date.length > 0 ? dateFormat(date): "dd/mm/yyyy"}
//{dateFormat(date[0])}
//{dateFormat(date[1])}

//              <InputForm title={"CheckIn"} placeholder={dateFormat(date[0])} />
//              <InputForm
//                title={"CheckOut"}
//                placeholder={dateFormat(date[1])}
//              />
//              <InputForm title={"Guests"} placeholder={"4"} />

//<Calendar
//        className="Venue manager"
//        view="month"
//        // viser dato fra 1 januar 2023
//        minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
//        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
//        onChange={onChange}
//        value={value}
//        onClickDay={(date) => console.log(date)}
//      />
//import { useState } from 'react';
//import Calendar from 'react-calendar';
//
//type ValuePiece = Date | null;
//
//type Value = ValuePiece | [ValuePiece, ValuePiece];
//
//function MyApp() {
//  const [value, onChange] = useState<Value>(new Date());
//
//  return (
//    <div>
//      <Calendar onChange={onChange} value={value} />
//    </div>
//  );
//}

//<p className="fw-bold">
//          <span className="bold">You can Start booking from today:</span>{" "}
//          {dateFormat(date)}
//        </p>
