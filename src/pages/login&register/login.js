import "./login.scss";
import { useRef, useState, eseEffect } from "react"
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { InputForm } from "../../components/form-input"
import { ButtonExpandNavbar } from "../../components/buttons/expand-btn"
import { BrandLogo } from "../../assets/brand/logo"
import { schema } from "../../validations/schemas/login-regstration"
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
const [action, setAction] = useState("Register");

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});

function onSubmit(data) {
  console.log(data);
}

  return (
    <div className="container-signup">
    <div className="login-register">
      <div className="log-reg pt-4">
      <NavLink to="/" className="text-decoration-none">
          <BrandLogo />
        </NavLink>
        <div className="d-flex my-4">
          <div className={action==="Login"?"login-nav dark":"login-nav"} onClick={()=>{setAction("Register")}}> Register</div>
          <div className={action==="Register"?"login-nav dark":"login-nav"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)} className="input-login">
        <div className="mx-2 mt-3">
          <Form.Group>
            { action==="Register" ? <InputForm title={"Name"} placeholder={"e.g.  John_Doe"} type={"text"} val={{...register("Name")}}/> : "" }
            <Form.Text className="text-danger fw-bold">
              {errors.Name?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <InputForm title={"Email"} placeholder={"example@stud.noroff.no"} type={"text"} val={{...register("Email")}}/>
            <Form.Text className="text-danger fw-bold">
              {errors.Email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group> 
            <InputForm title={"Password"} placeholder={"At least 8 characters"} type={"password"}/>
            <Form.Text className="text-danger fw-bold">
              {errors.Password?.message}
            </Form.Text>
            { action==="Register" ? <InputForm title={"Password"} placeholder={"Repeat password"} type={"password"} val={{...register("Password")}}/> : "" }
            <Form.Text className="text-danger fw-bold">
              {errors.Password?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group> 
            { action==="Register" ? <InputForm title={"Avatar"} placeholder={"http://www.example.com"} type={"url"} val={{...register("Avatar")}}/> : "" }
            <Form.Text className="text-danger fw-bold">
              {errors.Avatar?.message}
            </Form.Text>
          </Form.Group>
        </div>

        <div className="d-flex flex-row align-items-center justify-content-evenly mt-4">
          { action==="Register" ? <div className="fw-bold fs-4">Register as</div> : <div className="fw-bold fs-4">Login as</div>}
          <div className="d-flex flex-column gap-3 ps-4">
            <ButtonExpandNavbar custom={"Customer"} color={false} arrow={"black"} type={"submit"}/>
            <ButtonExpandNavbar custom={"Venue manager"} color={true} arrow={"black"} type={"submit"}/>
          </div>
        </div>
      </Form>
    </div>
    </div>
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
