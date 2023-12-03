import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaRegister } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerInputs } from "./input-fields";
import { RegisterProfile } from "../../services/auth/register";
import { lowerize } from "../../utilities/formatting/lowercase";
import viewRegisterModal from "../../components/modal/Register";

export function RegisterForm({ change }) {
  const [userType, setUserType] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [modal, setModal] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  async function onSubmit(data) {
    setModal("");
    const profile = lowerize(data);
    profile.venueManager = userType;
    delete profile.confirm;

    const promiseAwait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(RegisterProfile(profile));
      }, 1000);
    });

    const result = await promiseAwait;
    setFormSuccess(result);
  }

  useEffect(() => {
    setModal(viewRegisterModal(formSuccess));
    if (formSuccess === true || formSuccess === false) {
      change();
    }
  }, [formSuccess, change]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="input-register">
        <div className="mx-2 mt-3">
          {registerInputs.map((inputContent) => {
            const { title, placeholder, type, autocomplete } = inputContent;
            const validating =
              title === "Name"
                ? errors.Name?.message
                : title === "Email"
                ? errors.Email?.message
                : title === "Password"
                ? errors.Password?.message
                : title === "Confirm"
                ? errors.Confirm?.message
                : title === "Avatar"
                ? errors.Avatar?.message
                : "";
            return (
              <Form.Group key={title}>
                <InputForm
                  title={title}
                  placeholder={placeholder}
                  type={type}
                  autocomplete={autocomplete}
                  validate={register}
                />
                <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
                  {validating}
                </Form.Text>
              </Form.Group>
            );
          })}
        </div>

        <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
          <div className="fw-bold fs-4">Register as</div>
          <div className="d-flex flex-column gap-3 ps-4">
            <ButtonExpandNavbar
              custom={"Customer"}
              color={false}
              arrow={"black"}
              type={"submit"}
              onClick={() => setUserType(false)}
            />
            <ButtonExpandNavbar
              custom={"Venue manager"}
              color={true}
              arrow={"black"}
              type={"submit"}
              onClick={() => setUserType(true)}
            />
          </div>
        </div>
      </Form>
      {modal}
    </>
  );
}
