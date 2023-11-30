import "./form-input.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//import { EditAvatar } from "./buttons/button.styles";

export function InputBase(props) {
  const { placeholder, type, label, validation } = props;

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
  const {
    title,
    placeholder,
    type,
    autocomplete,
    validate,
    onChange,
    min,
    value,
    name,
    size,
  } = props;
  const nameTitle = name ? name : title;

  function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <InputGroup className="input-field w-100">
      <Form.Label
        htmlFor={title}
        className="rounded-start-pill shadow-sm text-white"
      >
        {capitalizeFirstLetter(nameTitle)}
      </Form.Label>

      {type === "textarea" ? (
        <Form.Control
          id={title}
          as={type}
          placeholder={placeholder}
          aria-label={title}
          aria-describedby="basic-addon1"
          className="rounded-end-pill shadow-sm scrollable-container"
          type={type}
          autoComplete={autocomplete}
          onChange={onChange}
          min={min}
          rows={size ? "4" : "1"}
          value={value}
          {...validate(title)}
        />
      ) : type !== "switch" ? (
        <Form.Control
          id={title}
          placeholder={placeholder}
          aria-label={title}
          aria-describedby="basic-addon1"
          className="rounded-end-pill shadow-sm"
          type={type}
          autoComplete={autocomplete}
          onChange={onChange}
          min={min}
          value={value}
          {...validate(title)}
        />
      ) : (
        <Form.Check
          id={title}
          placeholder={placeholder}
          aria-label={title}
          aria-describedby="basic-addon1"
          className="rounded-end-pill bg-dark shadow-sm "
          type={type}
          autoComplete={autocomplete}
          onChange={onChange}
          value={value}
          {...validate(title)}
        />
      )}
    </InputGroup>
  );
}

//export function InputEditAvatar(props) {
//  const register = props
//
//  return (
//    <>
//      <InputGroup className="mt-1">
//        <Form.Control
//          type="url"
//          data-bs-theme="light"
//          placeholder="http://www.example.com"
//          aria-label="Recipient's username"
//          aria-describedby="basic-addon2"
//          className="rounded-start-pill border-0 shadow-none"
//          style={{ fontSize: "var(--textMedium_fontSize)" }}
//          validate={register}
//        />
//        <EditAvatar>{">"}</EditAvatar>
//      </InputGroup>
//    </>
//  );
//}
