import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaLogin } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputs } from "./input-fields"
import { lowerize } from "../../helpers/lowercase"
import { LoginUser } from "../../services/auth/login"; 


export function LoginForm() {
  const [userType, setUserType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  function onSubmit(data) {
    const profile = lowerize(data)
    
    //console.log(profile)
    LoginUser(profile)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="input-login">
            <div className="mx-2 mt-3">
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

            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
                <div className="fw-bold fs-4">Register as</div>
              <div className="d-flex flex-column gap-3 ps-4">
                <ButtonExpandNavbar
                  custom={"Customer"}
                  color={false}
                  arrow={"black"}
                  type={"submit"}
                />
                <ButtonExpandNavbar
                  custom={"Venue manager"}
                  color={true}
                  arrow={"black"}
                  type={"submit"}
                  
                />
              </div>
            </div>
          </Form>
  );
}