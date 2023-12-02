import "./login.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BrandLogo } from "../../assets/brand/logo";
import { RegisterForm } from "./register";
import { LoginForm } from "./login";

export default function LoginRegisterPage() {
  const [currentForm, setCurrentForm] = useState("Login");
 
  function handleState() {
    setCurrentForm("Login");
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
                className={
                  currentForm === "Login" ? "login-nav dark" : "login-nav"
                }
                onClick={() => {
                  setCurrentForm("Register");
                }}
              >
                {" "}
                Register
              </div>
              <div
                className={
                  currentForm === "Register" ? "login-nav dark" : "login-nav"
                }
                onClick={() => {
                  setCurrentForm("Login");
                }}
              >
                Login
              </div>
            </div>
          </div>
          {currentForm === "Login" ? (
            <LoginForm />
          ) : (
            <RegisterForm change={handleState}/>
          )}
        </div>
      </div>
    </>
  );
}
