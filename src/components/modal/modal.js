import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { PrimaryButton } from "../buttons/button.styles";
import Button from "react-bootstrap/Button";

export function ModalInfo(props) {
  const {
    showModalText,
    ModalTitle,
    userError,
    userSuccess,
    bookingSuccess,
    onConfirmDelete,
  } = props;
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(userSuccess);
    setShow(false);
  };
  const loginRegisterRoute = userSuccess
    ? routeChange
    : console.log("Error! register of user failed. Please try again");

  const handleDelete = () => {
    onConfirmDelete();
  };

  const deleteBtns = (
    <div className="d-flex flex-row gap-3 w-100 justify-content-center">
      <PrimaryButton onClick={handleClose}>Cancel</PrimaryButton>
      <PrimaryButton
        display={"block"}
        onClick={handleDelete}
        style={{
          backgroundColor: "white",
          border: "2px solid var(--third_color)",
        }}
      >
        Delete
      </PrimaryButton>
    </div>
  );

  const bookingBtns = (
    <>
      <PrimaryButton display={"block"} onClick={loginRegisterRoute}>
        Back to venue list
      </PrimaryButton>
    </>
  );

  const userBtn = (
    <PrimaryButton display={"block"} onClick={loginRegisterRoute}>
      Continue
    </PrimaryButton>
  );

  const closeBtn = (
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  );

  const modalButton = onConfirmDelete
    ? deleteBtns
    : userError
    ? closeBtn
    : bookingSuccess && userSuccess
    ? bookingBtns
    : userSuccess
    ? userBtn
    : "";

  return (
    <Modal
      show={show}
      backdrop={bookingSuccess ? "true" : "static"}
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>{ModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{showModalText}</Modal.Body>
      <Modal.Footer>{modalButton}</Modal.Footer>
    </Modal>
  );
}
