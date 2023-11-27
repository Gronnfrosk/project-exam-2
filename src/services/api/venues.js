import { useState, useEffect } from "react";
//import { SpinnerLoad, ErrorLoad } from "../../components/error-load";
//import { API_URL_VENUES } from "./constants";
//import VenueCard from "../../components/venue-card";

export default function useAllVenues(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Function that gets our products
    async function getData() {
      try {
        // Reset the error state in case there is an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  console.log(data);
  console.log(isLoading);
  console.log(isError);

  return [data, isLoading, isError];
}
