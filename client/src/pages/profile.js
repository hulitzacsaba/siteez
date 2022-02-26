import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

export default function Prof() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login</h2>
            <div className="card my-5">
              <div className="card-body p-lg-5">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    onClick={login}
                    className="btn btn-primary px-5 mb-5 w-100"
                  >
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Not Registered? Interested in some extra features?{" "}
                  <Link to="/register" className="text-dark fw-bold">
                    Create an account!
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
