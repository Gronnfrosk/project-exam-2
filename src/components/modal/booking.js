import { ModalInfo } from "./modal";
import bookingSuccessSVG from "../../assets/images/bookingSuccess";
import ListGroup from "react-bootstrap/ListGroup";

export default function viewBookingModal(formSuccess) {
  // Format the dates
  if (!formSuccess || typeof formSuccess !== "object") {
    console.error("Invalid form success data provided to viewBookingModal");
    return null;
  }

  const formattedCreatedDate = new Date(formSuccess.created).toLocaleString(
    "en-GB",
  );
  const formattedCheckInDate = new Date(
    formSuccess.dateFrom,
  ).toLocaleDateString("en-GB");
  const formattedCheckOutDate = new Date(formSuccess.dateTo).toLocaleDateString(
    "en-GB",
  );

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
              Id: <div>{formSuccess.id}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Booking placed: <div>{formattedCreatedDate}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Guests: <div>{formSuccess.guests}</div>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Check-in: <div>{formattedCheckInDate}</div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="d-flex justify-content-between">
              Check-out: <div>{formattedCheckOutDate}</div>
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
