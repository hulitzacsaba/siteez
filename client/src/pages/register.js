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
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Register</h2>
            <div className="card my-5">
              <div className="card-body p-lg-5">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordAgain"
                    placeholder="Password again"
                    onChange={(e) => {
                      setPassword2Reg(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    onClick={register}
                    className="btn btn-primary px-5 mb-5 w-100"
                  >
                    Register
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Already have an account?{" "}
                  <Link to="/profile" className="text-dark fw-bold">
                    Login here!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
