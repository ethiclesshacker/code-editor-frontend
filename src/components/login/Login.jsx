import React from "react";
import './Login.css'

export default function Login() {
    return (
        <div id="login-login">
            <div id="login-main">
                <div id="login-head"> Login </div>
                <input id="login-uname" placeholder="Enter Username" />
                <input id="login-pass" placeholder="Enter Password" />
                <button id="login-log"> Login </button>
                <div id="login-fp">
                    <a href="abc"> Forgot Password? </a>
                </div>
                <div id="login-sign"> Create an account?
                    <a href="def"> Sign Up </a>
                </div>
            </div>
        </div>
    );
}