import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaRegister } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { createInputs } from "./create-fields";
import { RegisterProfile } from "../../services/auth/register";
import { lowerize } from "../../helpers/lowercase";
//import viewRegisterModal from "../../components/modal/Register";

export default function CreateVenue() {
  const [userType, setUserType] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [passConfirm, setConfirmPass] = useState("");
  const [modal, setModal] = useState("");
  //const viewModal = viewRegisterModal(formSuccess, change);

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
    //setModal(viewModal);
  }

  //useEffect(() => {
  //  setModal(viewModal);
  //}, [formSuccess]);


  return (
    <>
      <Helmet>
        <title>Create Venues - Holidaze</title>
        <meta name="description" content="Create a venue" />
      </Helmet>
      <main>
      <div className="divider gap-2 ps-3 my-4"></div>

        <Form onSubmit={handleSubmit(onSubmit)} className="flex-column">
        <div className="mx-2 mt-3">
          {createInputs.map((inputContent) => {
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
        <div className="mt-4">
            <ButtonExpandNavbar
              custom={"Create new venue"}
              color={false}
              arrow={"black"}
              type={"submit"}
              onClick={() => setUserType(false)}
            />
        </div>
      </Form>
      </main>
    </>
  );
}
