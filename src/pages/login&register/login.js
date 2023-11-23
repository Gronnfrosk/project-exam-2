import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaLogin } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputs } from "./input-fields";
import { lowerize } from "../../helpers/lowercase";
import { LoginUser } from "../../services/auth/login";
import viewLoginModal from "../../components/modal/login";

export function LoginForm() {
  const [formSuccess, setFormSuccess] = useState("");
  const [modal, setModal] = useState("");
  const viewModal = viewLoginModal(formSuccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  async function onSubmit(data) {
    setModal("");
    const profile = lowerize(data);

    const promiseAwait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(LoginUser(profile));
      }, 500);
    });

    const result = await promiseAwait;
    setFormSuccess(result);
    setModal(viewModal);
  }

  useEffect(() => {
    setModal(viewModal);
  }, [formSuccess]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="input-login">
        <div>
          <div className="fw-bold fs-4 text-center">Welcome back!</div>
          <p>Login to gain access to booking or renting venues.</p>
        </div>

        <div className="mx-2">
          {LoginInputs.map((inputContent) => {
            const { title, placeholder, type, autocomplete } = inputContent;
            const validating =
              title === "Email"
                ? errors.Email?.message
                : title === "Password"
                ? errors.Password?.message
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

        <div className=" ms-4">
          <ButtonExpandNavbar
            custom={"Click to login"}
            color={false}
            arrow={"black"}
            type={"submit"}
          />
        </div>
      </Form>
      {modal}
    </>
  );
}
