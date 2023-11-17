import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { PrimaryButton } from ".//buttons/button.styles";
import Button from 'react-bootstrap/Button';

export function ModalInfo(props) {
    const { showModalText, ModalTitle, userError, userSuccess, registerSuccess } = props;
    const [show, setShow] = useState(true); 
    const handleClose = () => setShow(false);
    let navigate = useNavigate(); 
    const routeChange = () =>{  
        navigate(userSuccess);
        setShow(false)
    }
    const loginRegisterRoute = userSuccess ? routeChange : registerSuccess ? () =>  registerSuccess() : console.log("Error")
    const userBtn = <PrimaryButton display={"block"} className="" onClick={loginRegisterRoute}>
        Continue
    </PrimaryButton>
    const closeBtn = <Button variant="secondary" onClick={handleClose}>Close</Button>
    const modalButton = (userError ? closeBtn : userSuccess ? userBtn : registerSuccess ? userBtn: "")

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{ModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{showModalText}</Modal.Body>
      <Modal.Footer>
        {modalButton}
      </Modal.Footer>
    </Modal>
  );
}
