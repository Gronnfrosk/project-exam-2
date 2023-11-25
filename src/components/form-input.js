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
  } = props;
  //const valllues = type==="date" ? (date) => date.toLocaleDateString('en-GB') : ""
  const nameTitle = name ? name : title;

  return (
    <InputGroup className="w-100">
      <Form.Label
        htmlFor={title}
        className="rounded-start-pill shadow-sm text-white"
      >
        {nameTitle}
      </Form.Label>
      {type !=="switch" ? < Form.Control 
        id={title}
        placeholder={placeholder}
        aria-label="Recipient's username"
        aria-describedby="basic-addon1"
        className="rounded-end-pill shadow-sm"
        type={type}
        autoComplete={autocomplete}
        onChange={onChange}
        min={min}
        value={value}
        {...validate(title)}
      /> : <Form.Check id={title}
      placeholder={placeholder}
      aria-label="Recipient's username"
      aria-describedby="basic-addon1"
      className="rounded-end-pill bg-dark shadow-sm "
      type={type}
      autoComplete={autocomplete}
      onChange={onChange}
      min={min}
      value={value}
      {...validate(title)}
    />}
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
