import "./home.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import AllVenues from "../../services/api/venues";
import { PrimaryButton } from "../../components/buttons/button.styles";
import { BrandLogo } from "../../assets/brand/logo";
import { InputBase } from "../../components/form-input";
import { InputIcons } from "../../assets/icons/icons";
//

function MainPage() {
  const { SearchIcon } = InputIcons();
  //const [search, setSearch] = useState("");

  return (
    <>
      <Helmet>
        <title>Home - Holidaze</title>
        <meta name="description" content="Get info about available bookings" />
      </Helmet>
      <header>
        <div className="top-picture" alt="background of city at night">
          <div className="homeContainer">
            <BrandLogo />
            <a href="#booking" className="btn">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#2fd2f3" />
                    <stop offset="33%" stopColor="#ffed79" />
                    <stop offset="100%" stopColor="#ed6c02" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>Start Booking Adventure</span>
              <i className="arrow down"></i>
            </a>
          </div>
        </div>
        <h1 id="booking" className="text-center mt-4">
          Available bookings
        </h1>
      </header>
      <main>
        <section>
          <Form className="search">
            <InputBase
              placeholder={" Search here..."}
              type={"text"}
              label={""}
            />
            <div className="search-icon">{SearchIcon}</div>
          </Form>
        </section>
        <div className="divider dropdown-toggle gap-2 ps-3">Recent</div>
        <section className="all-venues d-flex flex-wrap gap-5 justify-content-center">
         < AllVenues />
        </section>
        <section className="d-flex my-5 justify-content-center">
          <PrimaryButton> More </PrimaryButton>
        </section>
      </main>
    </>
  );
}

export default MainPage;

//{data.map((venue, index) => (
//  <VenueCard key={index} data={venue} />
//))}


//{data.filter((venue) => {
//  return search.toLowerCase() === ""
//    ? venue
//    : venue.title.toLowerCase().includes(search);
//})
//.map((venue, index) => (
//  <VenueCard key={index} data={venue} />
//))}