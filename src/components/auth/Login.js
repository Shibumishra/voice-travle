import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../components/utils/notification/Notification";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";


const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

function Login() {
  const [user, setUser] = useState(initialState);
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);


  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login");
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("/user/google_login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken, userID } = response;
      const res = await axios.post("retail/login", { accessToken, userID });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="sign_in_up_bg">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <div className="col-lg-12">
            <div className="main_logo25" id="logo">
              <a href="index.html">
                <img src="" alt />
              </a>
              <a href="index.html">
                <img className="logo-inverse" src="" alt />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="sign_form">
              <h2>Welcome Back</h2>
              <p>Log In to Your Account!</p>
              <div className="login_page" style={{ marginTop: "10px" }}>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      id="email"
                      value={email}
                      name="email"
                      onChange={handleChangeInput}
                    />
                  </div>

                  <div className="show_password">
                    <label htmlFor="password">Password</label>
                    <input
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter password"
                      id="password"
                      value={password}
                      name="password"
                      onChange={handleChangeInput}
                    />
                    <button
                      className="show_password-icon"
                      onClick={togglePassword}
                    >
                      {passwordShown ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>

                  <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/forgot_password" className="forgot_password">
                      Forgot your password?
                    </Link>
                  </div>
                </form>

                <div className="hr">Or Login With</div>

                <div className="social">
                  <GoogleLogin
                    clientId="Your google client id"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  {/* <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  /> */}
                  <FacebookLogin
                    appId="Your facebook app id"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                  />
                  {/* <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                  /> */}
                  
                </div>

                <p>
                  New Customer? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
            <div className="sign_footer">
              <img src="" alt />© 2021 <strong>Haldia Voice</strong>.
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
