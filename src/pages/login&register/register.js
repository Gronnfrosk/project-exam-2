import React, {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { schemaRegister } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerInputs } from "./input-fields"
import { RegisterProfile } from "../../services/auth/register"; 
import { lowerize } from "../../helpers/lowercase"

import { API_URL_AUTH_REGISTER } from "../../services/api/constants";

const registerURL = API_URL_AUTH_REGISTER;
const method = "post";

export function RegisterForm() {
  const [userType, setUserType] = useState("");
  const [passConfirm, setConfirmPass] = useState('');
  //const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schemaRegister),
      });
    
      function onSubmit(data) {
        const profile = lowerize(data)
        profile.venueManager = userType
        delete profile.confirm;
        
        RegisterProfile(profile)
       //useEffect(() => {
       // // Function that gets our products
       // async function getData() {
       //   try {
       //     // Reset the error state in case there is an error previously
       //     setIsError(false);
       //     // Turn on the loading state each time we do an API call
       //     setIsLoading(true);
       //     const response = await fetch(registerURL, {
       //       headers: { "Content-type": "application/json" },
       //       method,
       //       body: JSON.stringify(data),
       //     });
       //     const json = await response.json();
       //     setData(json);
       //     // Clear the loading state once we've successfully got our data
       //     setIsLoading(false);
       //   } catch (error) {
       //     // Clear the loading state if we get an error and then
       //     // set our error state to true
       //     setIsLoading(false);
       //     setIsError(true);
       //   }
       // }
    ////
       // getData();
      //}, []);
    //
      //console.log(profile)
      //console.log(data, isLoading, isError)
//
      //if (isLoading) {
      //  return console.log("is loading");
      //}
    //
      //if (isError) {
      //  return console.log("is error");
      //}
      //
      //return console.log("Success")
      ////return [data, isLoading, isError];
      }

    return (
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
                        onChange={ title === "Confirm" ? (e) => setConfirmPass(e.target.value) : ""}
                      />
                      <Form.Text className="d-block text-danger fw-bold ps-5 mb-3">
                        {validating}
                      </Form.Text>
                    </Form.Group>
                  );
                }
              )}
            </div>

            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
                <div className="fw-bold fs-4">Register as</div>
              <div className="d-flex flex-column gap-3 ps-4">
                <ButtonExpandNavbar
                  custom={"Customer"}
                  color={false}
                  arrow={"black"}
                  type={"submit"}
                  onClick={(e) => setUserType(false)}
                />
                <ButtonExpandNavbar
                  custom={"Venue manager"}
                  color={true}
                  arrow={"black"}
                  type={"submit"}
                  onClick={(e) => setUserType(true)}
                />
              </div>
            </div>
          </Form>
    )
} 