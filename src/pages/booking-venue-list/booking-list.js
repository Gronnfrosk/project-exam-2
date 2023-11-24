import "./booking-venue-list.scss"
import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import VenueCard from "../../components/venue-card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import { API_URL_VENUES } from "../../services/api/constants";
import { load } from "../../utilities/save_load_remove_local_storage";
import {ProfileInfoApi} from "../../services/api/profile";
import useAllVenues from "../../services/api/venues";

const params = "venues"


export default function BookingList() {
  const profile = load("profile");
  const userType = profile.venueManager;
  const name = profile.name;
  //const [data, isLoading, isError] = ProfileInfoApi(name, params);
  const [data, isLoading, isError] = useAllVenues(API_URL_VENUES);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <Helmet>
        <title>Your Bookings - Holidaze</title>
        <meta name="description" content="Booking list" />
      </Helmet>
      <main className="list"> {userType === "customer" ? <>
        <section>
          <div className="booking-title fs-1 ps-4">Upcoming <div>Bookings</div></div>
          <div className="container"><div className="divider dropdown-toggle gap-2 ps-3 mt-3 mb-2">Recent</div>
          <div className="d-flex flex-row flex-wrap align-items-end justify-content-center">
          <div>1.</div>
          <Button
        onClick={() => setShow1(!show1)}
        aria-controls="example-collapse-text"
        aria-expanded={show1}
        className="w-75 text-center ms-4 mt-2"
        variant="light"
        data-bs-target="#collapse-booking-1"
      >
      booking placed: dd/mm/yyyy
      </Button>
      <Collapse in={show1}>
        <div id="collapse-booking-1">
        <ListGroup as="ul">
                <ListGroup.Item as="li" className="list-top text-center">
                  <Link style={{textDecoration: "none", color: "white"}}>
                 Click her to see venue page</Link>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Id:{" "}
                  <div>
                    4q53643757512
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Guests:{" "}
                  <div>
                    10
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                > Check-in:{" "}
                <div> dd/mm/yyyy
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Check-out:{" "}
                  <div>
                    dd/mm/yyyy
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Duration:{" "}
                  <div>
                    0 days
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          </div>
          <div className="d-flex flex-row align-items-end">
          <div>1.</div>
          <Button
        onClick={() => setShow2(!show2)}
        aria-controls="example-collapse-text"
        aria-expanded={show2}
        className="w-75 text-center ms-4  mt-2"
        variant="light"
        data-bs-target="#collapse-booking-2"
      >
      booking placed: dd/mm/yyyy
      </Button>
      <Collapse in={show2}>
        <div id="collapse-booking-2">
        <ListGroup as="ul">
                <ListGroup.Item as="li" className="list-top ">
                 Booking details
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Id:{" "}
                  <div>
                    4q53643757512
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Guests:{" "}
                  <div>
                    10
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                > Check-in:{" "}
                <div> dd/mm/yyyy
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Check-out:{" "}
                  <div>
                    dd/mm/yyyy
                  </div>
                </ListGroup.Item>
                
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between px-4"
                >
                  Duration:{" "}
                  <div>
                    0 days
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
          </div>
          </div>  
        </section>
        <section><div className="booking-title fs-1 px-5">Total <div>Bookings</div></div><div className="container"><div className="divider dropdown-toggle gap-2 ps-3 mt-3 mb-2">Recent</div></div></section>
        <section><div className="booking-title fs-1 px-5">Previous <div>Bookings</div></div><div className="container"><div className="divider dropdown-toggle gap-2 ps-3 mt-3 mb-2">Recent</div></div></section></>
      : <>
        <section className="venues-list">
          <div className="venues-title fs-1 ps-4 text-center">Venues <div className="text-center ps-5 ms-5">managed</div></div>
          <div className="container"><div className="divider w-100 dropdown-toggle gap-2 ps-3 mt-3 mb-2">Recent</div>
          <div className="d-flex flex-row flex-wrap align-items-end justify-content-center">
          {isLoading ? (
            <SpinnerLoad />
          ) : isError ? (
            <ErrorLoad />
          ) : (
            data.map((venue, index) => (
              <VenueCard key={index} data={venue} />
            ))
          )}
          </div>
          </div>
        </section>
        </> 
        }
      </main>
    </>
  );
}




