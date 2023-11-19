import "./react-calender.scss";
import "react-calendar/dist/Calendar.css";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Calendar from "react-calendar";
import { dateFormat } from "../../constants/date-format";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaBooking } from "../../validations/schemas/booking";
import { yupResolver } from "@hookform/resolvers/yup";

//{formattedToday}
//type ValuePiece = Date | null;
//type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalender(props) {
  const [formSuccess, setFormSuccess] = useState("");
  const [date, setDate] = useState(new Date());
  const { UserStatus } = props;
  const [value, onChange] = useState(new Date());
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaBooking),
  });

  async function onSubmit(data) {
    setFormSuccess(data)
    console.log(formSuccess)
    //setModal("");
    //const profile = lowerize(data);
    //
    //const promiseAwait = new Promise((resolve, reject) => {
    //  setTimeout(() => {
    //    resolve(LoginUser(profile));
    //  }, 1000);
    //});
    //
    //const result = await promiseAwait;
    //setFormSuccess(result);
    //setModal(viewModal);
  }

  return (
    <div className="booking-form column-gap-5">
      {UserStatus === null ? 
        <ButtonExpandNavbar
          custom={"Login or register to place booking"}
          color={false}
          arrow={"black"}
        />
       : 
        <>
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
              onClickDay={(date) => console.log(date)}
              selectRange={true}
            />
          </div>
          {date ? 
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <InputForm
                  title={"CheckIn"}
                  placeholder={date ? dateFormat(date[0]): "dd/mm/yyyy"}
                  type={"text"}
                  validate={register}
                />
                <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
                  {errors.CheckIn?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <InputForm
                  title={"CheckOut"}
                  placeholder={date ? dateFormat(date[1]) : "dd/mm/yyyy"}
                  type={"text"}
                  validate={register}
                />
                <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
                  {errors.CheckOut?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <InputForm
                  title={"Guests"}
                  placeholder={"1"}
                  type={"string"}
                  validate={register}
                />
                <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
                  {errors.Guests?.message}
                </Form.Text>
              </Form.Group>    
              
              {date ? <p>
                <span>Total days selected:</span>
                {dateFormat(date[1])}
                {dateFormat(date[0])}
              </p> : <span>Total days selected: 0</span> }
              <div className="mt-5 text-center">
                <ButtonExpandNavbar
                  custom={"Place booking"}
                  color={false}
                  arrow={"black"}
                  type={"submit"}
                />
              </div>
            </Form>
           : ""}
        </>
      }
    </div>
  );
}

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
