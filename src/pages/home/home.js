import "./home.scss";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import useAllVenues from "../../services/api/venues";
import { PrimaryButton } from "../../components/buttons/button.styles";
import { BrandLogo } from "../../assets/brand/logo";
import { InputIcons } from "../../assets/icons/icons";
import { API_URL_VENUES } from "../../services/api/constants";
import VenueCard from "../../components/venue-card";
import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const { SearchIcon } = InputIcons();

function MainPage() {
  const [search, setSearch] = useState("");
  const [count, setCounter] = useState(12);
  const [url, setUrl] = useState(
    `${API_URL_VENUES}?limit=${count}&sort=created&sortOrder=desc`,
  );
  const [data, isLoading, isError] = useAllVenues(url);

  const increase = () => {
    setCounter((count) => {
      const newCount = count + 9;
      setUrl(`${API_URL_VENUES}?limit=${newCount}&sort=created&sortOrder=desc`);
      return newCount;
    });
  };

  useEffect(() => {
    if (search !== "") {
      // When searching, use a URL that doesn't limit the results
      setUrl(`${API_URL_VENUES}?sort=created&sortOrder=desc`);
    } else {
      // When not searching, reset to the original URL with a limit
      setUrl(`${API_URL_VENUES}?limit=${count}&sort=created&sortOrder=desc`);
    }
  }, [search, count]);

  let filterName = data.filter((venue) => {
    return search.toLowerCase() === ""
      ? venue
      : venue.name.toLowerCase().includes(search);
  });

  let filterCountry = data.filter((venue) => {
    return search.toLowerCase() === ""
      ? venue
      : venue.location.country.toLowerCase().includes(search);
  });
  let filteredArray = [...filterName, ...filterCountry];
  let mergedArr = [...new Set(filteredArray)];

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
          <Form onSubmit={(event) => event.preventDefault()} className="search">
            <InputGroup className="mb-3 mx-2">
              <Form.Control
                type={"text"}
                placeholder="Search by venues or country..."
                aria-label="Search by venues or country..."
                aria-describedby="search-bar"
                className="border shadow-none border-black "
                onClick={increase}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
              <Button
                variant="dark"
                id="search-bar"
                onClick={(event) => event.preventDefault()}
              >
                {SearchIcon}
              </Button>
            </InputGroup>
          </Form>
        </section>
        <div className="divider dropdown-toggle gap-2 ps-3">Recently added</div>
        <section className="all-venues d-flex flex-wrap gap-5 justify-content-center">
          {isLoading ? (
            <SpinnerLoad />
          ) : isError ? (
            <ErrorLoad />
          ) : (
            mergedArr.map((venue, index) => (
              <VenueCard key={index} data={venue} />
            ))
          )}
        </section>
        <section className="d-flex my-5 justify-content-center">
          <PrimaryButton onClick={increase}> More </PrimaryButton>
        </section>
      </main>
    </>
  );
}

export default MainPage;
