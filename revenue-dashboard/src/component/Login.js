// import logo from './logo.svg';
import "../App.css";
import React, { useEffect, useState } from "react";
import { login } from "../services/auth.service";
// import { useHistory } from "react-router-dom";

function Login() {
  // const history = useHistory();
  // const navigate = useNavigate();
  //states
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [spanText, setSpanText] = useState("");

  //functions
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(value, name);
  };

  const onLoginSubmit = async (e) => {
    let loginResponse;
    e.preventDefault();
    // console.log(userData);

    if (userData.email === "" && userData.password === "") {
      setSpanText("Enter username and password!");
      return false;
    } else if (userData.email === "") {
      setSpanText("Enter username!");
      return false;
    } else if (userData.password === "") {
      setSpanText("Enter password!");
      return false;
    }

    if (userData.email !== "" && userData.password !== "") {
      loginResponse = await login(userData.email, userData.password);
    } else {
      setSpanText("Enter username and password!");
    }

    if (loginResponse.status === true) {
      window.location.href = "/dashboard";
      // history.push('/dashboard');
    } else {
      setSpanText("Invalid credentials please try again!");
    }
  };

  //useefect
  useEffect(() => {}, []);

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            {/* <h2 className="heading-section">Dashboard</h2> */}
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-8 col-lg-4" style={{ marginTop: "10%" }}>
            <div className="login-wrap p-4 p-md-5 card ">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o"></span>
              </div>
              <h4 className="text-center mb-4">Dashboard Login</h4>
              {
                <span
                  name="loginmessage"
                  className="text-center mb-4 text-danger "
                >
                  {spanText}
                </span>
              }
              {/* <button type="button" className="btn btn-success">Base class</button> */}
              <form className="login-form">
                <div className="form-group">
                  <input
                    onChange={handleInput}
                    value={userData.email}
                    name="email"
                    type="email"
                    className="form-control rounded-left"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    onChange={handleInput}
                    value={userData.password}
                    name="password"
                    type="password"
                    className="form-control rounded-left"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    onClick={onLoginSubmit}
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3 "
                  >
                    Login
                  </button>
                </div>
                {/* <div className="form-group d-md-flex">
	            	<div className="w-50">
	            		<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="">Forgot Password</a>
								</div>
	            </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
