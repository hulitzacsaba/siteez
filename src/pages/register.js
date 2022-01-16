import { Outlet, Link } from "react-router-dom";

export default function register() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">Register</h2>
            <div class="card my-5">
              <form class="card-body p-lg-5">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="passwordAgain"
                    placeholder="Password again"
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary px-5 mb-5 w-100">
                    Register
                  </button>
                </div>
                <div
                  id="emailHelp"
                  class="form-text text-center mb-5 text-dark"
                >
                  Already have an account?{" "}
                  <Link to="/profile" class="text-dark fw-bold">
                    Login here!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
