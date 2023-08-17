import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientId =
  "50562650091-b2rvcd9dkm3i16h8dpae5niqejvtno62.apps.googleusercontent.com";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          theme="filled_black"
          width='240px'
          
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          // style={{
          //   marginBottom: "100px",
          //   maxWidth: '309px',
          //   size: 'large'
          //   // borderWidth: "6px",
          //   // borderStyle: "solid",
          //   // borderColor: "red",
          // }}
          isSignedIn={true}
        />
      </div>
      <div className="shadow-2xl bg-[#ecf9ff] rounded-lg text-center w-80 h-80 border border-solid border-blue-50">
        <div className="mb-4 pt-7 font-serif text-2xl"> Login </div>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
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
          className="border-0 border-sky-600 mt-7 mb-4 text-center w-60 h-10 bg-sky-700 text-xl text-white"
        >
          {" "}
          Login{" "}
        </button>
        <div id="login-fp">
          <Link to="/" className="no-underline text-sky-800">
            {" "}
            Forgot Password?{" "}
          </Link>
        </div>
        <div id="login-sign" className="mt-1.5 font-normal">
          {" "}
          Create an account?
          <Link to="/register" className="text-sky-800">
            {" "}
            Register{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
