import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export function SpinnerLoad() {
  return (
    <div className="loading mt-5">
      <Spinner animation="border" role="status" variant="info" size="xxl">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export function ErrorLoad() {
  return (
    <div className="errorLoad mt-5">
      <Alert variant="danger">
        <Alert.Heading>Oh snap! Error loading data!</Alert.Heading>
        <p>Try refreshing the page. If that does not work try again later.</p>
      </Alert>
    </div>
  );
}
