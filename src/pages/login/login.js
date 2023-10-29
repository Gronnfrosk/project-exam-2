import "./login.scss";

export function loginPage() {
  return (
    <div className="signin-body">
      <main class="signin-main form-signin w-100 text-center">
        <form id="loginForm" class="loginForm needs-validation" novalidate>
          <div>
            <i class="fa-sharp fa-solid fa-bullseye-pointer mx-1"></i>
            <h1 class="my-3 fw-normal">Login</h1>
          </div>
          <div class="form-floating">
            <input
              type="email"
              name="email"
              class="form-control login-email"
              id="validationCustom000"
              placeholder="Email address"
              required
              pattern="^[\w\-.]+@stud\.noroff\.no$"
              title="Only @stud.noroff.no emails are allowed to login."
            />
            <div class="invalid-feedback mb-3">
              Only @stud.noroff.no emails are allowed to login.
            </div>
            <label for="validationCustom000" class="form-label">
              Email address
            </label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="password"
              autocomplete="on"
              class="form-control login-password"
              id="validationCustom001"
              placeholder="Password"
              pattern=".{8,}"
              required
              title="Requires password of at least 8 characters."
            />
            <div class="invalid-feedback mb-3">
              Requires password of at least 8 characters.
            </div>
            <label for="validationCustom001" class="form-label">
              Password
            </label>
          </div>
          <button
            id="login"
            class="w-100 btn btn-lg btn-info mt-2"
            type="submit"
            data-bs-target="#loginForm"
          >
            Login
          </button>
          <div class="Register my-3 ">
            <p class="mt-5 mb-2">If you don't have an account:</p>
            <a href="register.html" class="register-btn btn btn-outline-info">
              Register here
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
