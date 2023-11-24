import React, { useEffect, useState } from "react";

export default function GetBookedDates(booking) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateArray, setDateArray] = useState([]);

  const GetBookingToFrom = () => {
    if (booking) {
      booking.map(
        (dates) => (
          setStartDate(dates.dateFrom), setEndDate(dates.dateTo), getDates()
        ),
      );
    }
  };

  const getDates = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
      const dates = [];
      for (let i = 0; i <= days; i++) {
        const currentDate = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
        dates.push(currentDate);
      }
      setDateArray(dates);
    }
  };

  GetBookingToFrom();

  return dateArray;
}
