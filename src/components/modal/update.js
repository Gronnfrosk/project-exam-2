import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SuccessAlert = ({ message, show, onClose }) => {
  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        onClose();
      }, 5000); // Dismiss after 5 seconds
    }
    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

export default SuccessAlert;
