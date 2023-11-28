import React from "react";
import { ListGroup } from "react-bootstrap";
import VenueCard from "./venue-card";
import {
  useFormattedDateTime,
  useFormattedDate,
} from "../helpers/formatting/useFormatDates"; // Import hooks correctly
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

function BookingItem({ booking, isOpen, toggle }) {
  const formattedCreated = useFormattedDateTime(booking.created);
  const formattedDateFrom = useFormattedDate(booking.dateFrom);
  const formattedDateTo = useFormattedDate(booking.dateTo);

  return (
    <div>
      <VenueCard
        key={booking.id}
        data={{
          ...booking.venue,
          bookingId: booking.id,
          guests: booking.guests,
          dateFrom: formattedDateFrom,
          dateTo: formattedDateTo,
        }}
      />
      <div className="text-center pb-2">
        <ListGroup as="ul" className="mb-4 mx-3">
          <Button
            onClick={toggle}
            aria-controls="collapse-text"
            aria-expanded={isOpen}
          >
            Booking details
          </Button>

          <Collapse in={isOpen}>
            <div id="collapse-text">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                Id: <div>{booking.id}</div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                Booking placed: <div>{formattedCreated}</div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                Guests: <div>{booking.guests}</div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                Check-in: <div>{formattedDateFrom}</div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                Check-out: <div>{formattedDateTo}</div>
              </ListGroup.Item>
            </div>
          </Collapse>
        </ListGroup>
      </div>
    </div>
  );
}

export default BookingItem;

//<div>
//      <VenueCard
//        key={booking.id}
//        data={{
//          ...booking.venue,
//          bookingId: booking.id,
//          guests: booking.guests,
//          dateFrom: formattedDateFrom,
//          dateTo: formattedDateTo
//        }}
//      />
//      <div className="text-center pb-4">
//        <ListGroup as="ul" className="mb-4">
//            <ListGroup.Item as="li" className="list-top" >
//                <Button onClick={toggle} aria-controls="collapse-text" aria-expanded={isOpen}>
//                Booking details
//                </Button>
//            </ListGroup.Item>
//            <Collapse in={isOpen} id="collapse-text">
//                <ListGroup.Item as="li" className="d-flex justify-content-between">
//                    Id: <div>{booking.id}</div>
//                </ListGroup.Item>
//                <ListGroup.Item as="li" className="d-flex justify-content-between">
//                    Booking placed: <div>{formattedCreated}</div>
//                </ListGroup.Item>
//                <ListGroup.Item as="li" className="d-flex justify-content-between">
//                    Guests: <div>{booking.guests}</div>
//                </ListGroup.Item>
//            <ListGroup.Item as="li" className="d-flex justify-content-between">
//                Check-in: <div>{formattedDateFrom}</div>
//            </ListGroup.Item>
//            <ListGroup.Item as="li" className="d-flex justify-content-between">
//                Check-out: <div>{formattedDateTo}</div>
//            </ListGroup.Item>
//          </Collapse>
//        </ListGroup>
//      </div>
//    </div>
