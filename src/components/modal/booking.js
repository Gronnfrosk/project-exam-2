import { ModalInfo } from "./modal";
import bookingSuccessSVG from "../../assets/images/bookingSuccess";
import ListGroup from "react-bootstrap/ListGroup";

export default function viewBookingModal(formSuccess) {
  const created = new Date().toLocaleString("en-GB");
  //const string= JSON.stringify(formSuccess)
  const modalContent = (
    <ModalInfo
      userSuccess={"/"}
      bookingSuccess={true}
      ModalTitle={"Booking was a success!"}
      showModalText={
        <div className="text-center pb-4">
          <ListGroup as="ul" className="mb-4">
            <ListGroup.Item as="li" className="list-top">
              Booking details
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Id: <div>{formSuccess.venueId}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Booking placed: <div>{created}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Guests: <div>{formSuccess.guests}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Check-in: <div>{formSuccess.checkIn}</div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Check-out: <div>{formSuccess.checkOut}</div>
            </ListGroup.Item>
          </ListGroup>
          {bookingSuccessSVG}
          <div className="mx-3 my-4">
            <p>
              Congratulation! We hope your stay will be plessant. Please do not
              hesitate to contact us if you have any questions.
            </p>
          </div>
        </div>
      }
    />
  );

  return modalContent;
}
