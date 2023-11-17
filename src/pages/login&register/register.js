import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaRegister } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerInputs } from "./input-fields";
import { RegisterProfile } from "../../services/auth/register";
import { lowerize } from "../../helpers/lowercase";
import { ModalInfo } from "../../components/modal.js";

export function RegisterForm({change}) {
  const [userType, setUserType] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [passConfirm, setConfirmPass] = useState("");
  const [modal, setModal] = useState("");

  const viewModal = formSuccess === false ? (<ModalInfo registerSuccess={change}
      showModalText={
        "Welcome! You can now login and start booking venues for your next trip."
      }
      ModalTitle={"You have successfuly logged in"}
    />)
    : formSuccess === true ? (
    <ModalInfo registerSuccess={change}
      showModalText={
        "Welcome! You can now login as a venue manager and start renting out venues."
      }
      ModalTitle={"You have successfuly logged in"}
    />
  ) : formSuccess === null ? (
    <ModalInfo userError={true}
      showModalText={
        "Error! Something went wrong or user already registered."
      }
      ModalTitle={"Failed user registrating"}
    />
  ) : (
    ""
  )
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  async function onSubmit(data) {
    setModal("")
    const profile = lowerize(data);
    profile.venueManager = userType;
    delete profile.confirm;

    const promiseAwait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(RegisterProfile(profile));
      }, 1000);
    });

    const result = await promiseAwait;
    setFormSuccess(result)
    setModal(viewModal)
  }

  useEffect(()=>{
    setModal(viewModal)
  },[formSuccess])

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="input-login">
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
                  onChange={
                    title === "Confirm"
                      ? (e) => setConfirmPass(e.target.value)
                      : ""
                  }
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