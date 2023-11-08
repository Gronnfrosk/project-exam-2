import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Calendar from "react-calendar";
import { dateFormat } from "../../constants/date-format";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";

//{formattedToday}
//type ValuePiece = Date | null;
//type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalender(props) {
  const { Guests, UserStatus } = props
  //const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());

  return (
    <div className="booking-form">
      { UserStatus === null ? <ButtonExpandNavbar custom={"Login or register to place booking"} color={false} arrow={"black"} /> :
      <> 
      <div>
      <p className="text-center mb-1">
          <span className="fw-bold ">Start booking today</span>
        </p>
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
      /></div>
      {date.length > 0 ? (
        <Form>
          <InputForm title={"Check-in"} placeholder={dateFormat(date[0])}/>
          <InputForm title={"Check-out"} placeholder={dateFormat(date[1])}/>
          <InputForm title={"Guests"} placeholder={"4"}/>
          <p>
            <span>Total days selected:</span> 
            {dateFormat(date[1])}
            {dateFormat(date[0])}
          </p>
          <div className="mt-5 text-center">
          <ButtonExpandNavbar custom={"Place booking"} color={false} arrow={"black"}/>
          </div>
        </Form> 
      ) : (
        <Form>
          <InputForm title={"Check-in"} placeholder="dd/mm/yyyy"/>
          <InputForm title={"Check-out"} placeholder="dd/mm/yyyy"/>
          <InputForm title={"Guests"} placeholder={"4"}/>
          <p>
          <span>Total days selected: 0</span> 
        </p>
        <div className="mt-5 text-center">
          <ButtonExpandNavbar custom={"Place booking"} color={false} arrow={"black"} />
          </div>
        </Form>
      )}</> }      
    </div>
  );
}


          

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