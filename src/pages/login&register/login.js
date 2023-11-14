import "./login.scss";
import { useRef, useState, eseEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input";
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn";
import { BrandLogo } from "../../assets/brand/logo";
import { schemaRegister, schemaLogin } from "../../validations/schemas/login-regstration";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../services/auth/login";

export default function Login() {
  const [action, setAction] = useState("Login");
  const formId = action === "Register" ? "registerForm" :"loginForm"
  const schema = action === "Register" ? schemaRegister : schemaLogin;

  const nameInput = {
    form: "Register",
    title: "Name",
    placeholder: "e.g.  John_Doe",
    type: "text",
  };
  const emailInput = {
    form: "Login",
    title: "Email",
    placeholder: "xample@stud.noroff.no",
    type: "text",
  };
  const passwordInput = {
    form: "Login",
    title: "Password",
    placeholder: "At least 8 characters",
    type: "password",
    autocomplete: "on",
  };
  const repeatInput = {
    form: "Register",
    title: "Confirm",
    placeholder: "Repeat password",
    type: "password",
    autocomplete: "on",
  };

  const avataInput = {
    form: "Register",
    title: "Avatar",
    placeholder: "http://www.example.com",
    type: "url",
  };

  const registerInputs = [
    nameInput,
    emailInput,
    passwordInput,
    repeatInput,
    avataInput,
  ];
  const loginInputs = [emailInput, passwordInput];
  const inputContents = action === "Register" ? registerInputs : loginInputs;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    delete data.Confirm;
      
    if (action === "Login") {
      delete data.Name; 
      delete data.Avatar
    } 

    //console.log(data.value)
    console.log(data);
    login(data)
  }

  return (
    <>
      <Helmet>
        <title>Login or register - Holidaze</title>
        <meta
          name="description"
          content="Login or register an account at Holidaze"
        />
      </Helmet>
      <div className="container-signup">
        <div className="login-register">
          <div className="log-reg pt-4">
            <NavLink to="/" className="text-decoration-none">
              <BrandLogo />
            </NavLink>
            <div className="d-flex my-4">
              <div
                className={action === "Login" ? "login-nav dark" : "login-nav"}
                onClick={() => {
                  setAction("Register");
                }}
              >
                {" "}
                Register
              </div>
              <div
                className={
                  action === "Register" ? "login-nav dark" : "login-nav"
                }
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </div>
            </div>
          </div>

          <Form id={formId} onSubmit={handleSubmit(onSubmit)} className="input-login">
            <div className="mx-2 mt-3">
              {inputContents.map((inputContent) => {
                const { form, title: name, placeholder, type, autocomplete } = inputContent;
                const validating =
                  name === "Name"
                    ? errors.Name?.message
                    : name === "Email"
                    ? errors.Email?.message
                    : name === "Password"
                    ? errors.Password?.message
                    : name === "Confirm"
                    ? errors.Confirm?.message
                    : name === "Avatar"
                    ? errors.Avatar?.message
                    : "";
  
                if (name) {
                  return (
                    <Form.Group key={name}>
                      <InputForm
                        title={name}
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
                }
              })}
            </div>

            <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
              {action === "Register" ? (
                <div className="fw-bold fs-4">Register as</div>
              ) : (
                <div className="fw-bold fs-4">Login as</div>
              )}
              <div className="d-flex flex-column gap-3 ps-4">
                <ButtonExpandNavbar
                  custom={"Customer"}
                  color={false}
                  arrow={"black"}
                  type={"submit"}
                  dataBsTarget={formId}
                  name={"venueManager"}
                  value={false}
                />
                <ButtonExpandNavbar
                  custom={"Venue manager"}
                  color={true}
                  arrow={"black"}
                  type={"submit"}
                  data-bs-target={formId}
                  name={"venueManager"}
                  value={true}
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

//<div className="signin-body">
//      <main class="signin-main form-signin w-100 text-center">
//        <form id="loginForm" class="loginForm needs-validation" novalidate>
//          <div>
//            <i class="fa-sharp fa-solid fa-bullseye-pointer mx-1"></i>
//            <h1 class="my-3 fw-normal">Login</h1>
//          </div>
//          <div class="form-floating">
//            <input
//              type="email"
//              name="email"
//              class="form-control login-email"
//              id="validationCustom000"
//              placeholder="Email address"
//              required
//              pattern="^[\w\-.]+@stud\.noroff\.no$"
//              title="Only @stud.noroff.no emails are allowed to login."
//            />
//            <div class="invalid-feedback mb-3">
//              Only @stud.noroff.no emails are allowed to login.
//            </div>
//            <label for="validationCustom000" class="form-label">
//              Email address
//            </label>
//          </div>
//          <div class="form-floating">
//            <input
//              type="password"
//              name="password"
//              autocomplete="on"
//              class="form-control login-password"
//              id="validationCustom001"
//              placeholder="Password"
//              pattern=".{8,}"
//              required
//              title="Requires password of at least 8 characters."
//            />
//            <div class="invalid-feedback mb-3">
//              Requires password of at least 8 characters.
//            </div>
//            <label for="validationCustom001" class="form-label">
//              Password
//            </label>
//          </div>
//          <button
//            id="login"
//            class="w-100 btn btn-lg btn-info mt-2"
//            type="submit"
//            data-bs-target="#loginForm"
//          >
//            Login
//          </button>
//          <div class="Register my-3 ">
//            <p class="mt-5 mb-2">If you don't have an account:</p>
//            <a href="register.html" class="register-btn btn btn-outline-info">
//              Register here
//            </a>
//          </div>
//        </form>
//      </main>
//    </div>
