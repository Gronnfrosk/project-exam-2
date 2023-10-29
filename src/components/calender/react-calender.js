import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import { dateFormat } from "../../constants/date-format";
import { useState } from "react";
import Calendar from "react-calendar";

//{formattedToday}
//type ValuePiece = Date | null;
//type Value = ValuePiece | [ValuePiece, ValuePiece];

export function ReactCalender() {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        className="costumer"
        view="month"
        // viser dato dagens dato
        minDate={new Date()}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        onChange={setDate}
        //value={date}
        onClickDay={(date) => console.log(date)}
        selectRange={true}
      />
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Booking from:</span> {dateFormat(date[0])}
          {date[0].toLocaleDateString()}
          &nbsp;|&nbsp;
          <span className="bold">Booking ends:</span>
          {dateFormat(date[1])}
          {date[1].toLocaleDateString()}
          &nbsp;|&nbsp;
          <span className="bold">Total days:</span>
          {dateFormat(date[1])}
          {dateFormat(date[0])}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">You can Start booking from today:</span>{" "}
          {dateFormat(date)}
        </p>
      )}

      <Calendar
        className="Venue manager"
        view="month"
        // viser dato fra 1 januar 2023
        minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        onChange={onChange}
        value={value}
        onClickDay={(date) => console.log(date)}
      />
    </div>
  );
}

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
