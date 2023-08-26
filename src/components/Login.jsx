import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { GoogleLogin } from "react-google-login";

const clientId =
  "50562650091-b2rvcd9dkm3i16h8dpae5niqejvtno62.apps.googleusercontent.com";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
  const [authenticationToken, setAuthenticationToken] = useState(localStorage.getItem("authenticationToken"));

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  function loginUser() {
    // alert(`Logging in user... ${email} ${password}`);
    const API = 'http://localhost:5050/api/users/login';
    const options = {
      method: 'POST',
      mode: 'no-cors',
      url: API,
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ email, password })
    };

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("You have entered an invalid email address!")
    }
    else {
      axios.request(options).then(function (response) {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("authenticated", true);
          localStorage.setItem("authenticationToken", response.data.token);
          setAuthenticated(true);
          console.log(localStorage.getItem("authenticated"))
          if (response.data.roleId === 0)
            navigate("/");
          if (response.data.roleId === 1)
            navigate("/")
        }
        else {
          alert("Username or password is wrong!!");
        }
      }).catch(function (error) {
        console.error(error);
        alert("Database/Axios Error");
      });
    }
  }
  return (
    <div>
      <div className="shadow-2xl bg-[#ecf9ff] rounded-lg text-center w-80 h-96 border border-solid border-blue-50">
        <div className="mb-4 pt-7 font-serif text-2xl"> Login </div>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-60 h-10 border-b border-solid border-black pl-2 bg-[#ecf9ff] focus:outline-none"
          placeholder="Enter Username"
        />
        <input
          type={passwordType}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-60 h-10 border-b border-solid border-black pl-2 bg-[#ecf9ff] focus:outline-none"
          placeholder="Enter Password"
        />
        <button
          id="login-log"
          onClick={loginUser}
          className="border-0 border-sky-600 mt-7 mb-4 
          text-center w-60 h-10 
          bg-sky-700 text-xl text-white"
        >
          Login
        </button>
        <div id="login-fp">
          <Link to="/" className="no-underline text-sky-800">
            Forgot Password?
          </Link>
        </div>
        <div id="login-sign" className="mt-1.5 font-normal">
          Create an account?
          <Link to="/register" className="text-sky-800">
            Register
          </Link>
        </div>
        <p className="mt-1.5 mb-1.5"> or </p>
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </div>
    </div>
  );
}
