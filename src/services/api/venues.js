import { useEffect } from "react";
import { API_URL_VENUES } from "./constants";

export default function AllVenues() {
  useEffect(() => {
    getVenues();
  }, []);

  const getVenues = async () => {
    const api = await fetch(`${API_URL_VENUES}`);
    const data = await api.json();
    console.log(data);
  };
}
