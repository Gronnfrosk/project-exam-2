import { useState, useEffect } from "react";
import { API_URL_VENUES } from "./constants";
import VenueCard from "../../components/venue-card";

export default function useAllVenues() {
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
        const response = await fetch(API_URL_VENUES);
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

  if (isLoading) {
    return "<SpinnerLoad />";
  }

  if (isError) {
    return "Error";
  }

 return (data.map((venue, index) => (
    <VenueCard key={index} data={venue} />
     ))
  )
 }
