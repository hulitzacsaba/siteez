import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [password2Reg, setPassword2Reg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const register = () => {
    if (passwordReg === password2Reg) {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
      }).then((response) => {
        console.log(response);
      });
    } else {
      alert("passwordDoesntMatch");
      console.log("passwordDoesntMatch");
    }
  };

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
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="passwordAgain"
                    placeholder="Password again"
                    onChange={(e) => {
                      setPassword2Reg(e.target.value);
                    }}
                  />
                </div>
                <div class="text-center">
                  <button
                    onClick={register}
                    class="btn btn-primary px-5 mb-5 w-100"
                  >
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
