import { useState, useEffect } from "react";

export const useFormattedDateTime = (dateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      setFormattedDate(date.toLocaleString("en-GB"));
    }
  }, [dateString]);

  return formattedDate;
};

export const useFormattedDate = (dateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      setFormattedDate(date.toLocaleDateString("en-GB"));
    }
  }, [dateString]);

  return formattedDate;
};
