import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { PrimaryInput } from "./form-input.styles";
import { EditAvatar } from "./buttons/button.styles";

export function InputBase() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        {">"}
      </Button>
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
