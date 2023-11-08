import "./form-input.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { EditAvatar } from "./buttons/button.styles";

export function InputBase(props) {
  const { placeholder, type, label } = props;

  return (
    <Form.Group
      className="mb-3 w-100 d-flex"
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className="rounded-pill border-2 shadow-none border-black"
      />
    </Form.Group>
  );
}

export function InputForm(props) {
  const { title, placeholder } = props;
  return (
    <InputGroup className="mb-3 w-100">
      <Button variant="dark" id="button-addon2" className="rounded-start-pill">
        {title}
      </Button>
      <Form.Control
        placeholder={placeholder}
        aria-label="Recipient's username"
        aria-describedby="basic-addon1"
        className="rounded-end-pill shadow-none"
      />
    </InputGroup>
  );
}

export function InputEditAvatar() {
  return (
    <>
      <InputGroup className="mt-1">
        <Form.Control
          type="text"
          data-bs-theme="light"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="rounded-start-pill border-0 shadow-none"
        />
        <EditAvatar>{">"}</EditAvatar>
      </InputGroup>
    </>
  );
}
