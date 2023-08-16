import React from "react";
// import './Login.css'

export default function Login() {
    return (
        <div id="login-login">
            <div className="shadow-2xl bg-blue-50 rounded-lg text-center w-80 h-80 border border-solid border-blue-50">
                <div className="mb-4 pt-7 font-serif text-2xl"> Login </div>
                <input className="w-60 h-10 border-b border-solid border-black pl-2 bg-blue-50 focus:outline-none" placeholder="Enter Username" />
                <input type="password" className="w-60 h-10 border-b border-solid border-black pl-2 bg-blue-50 focus:outline-none" placeholder="Enter Password" />
                <button id="login-log" className="border-0 border-blue-700 mt-7 mb-4 text-center w-60 h-10 bg-blue-700 text-xl"> Login </button>
                <div id="login-fp">
                    <a href="abc" className="no-underline"> Forgot Password? </a>
                </div>
                <div id="login-sign" className="mt-1.5 font-normal"> Create an account?
                    <a href="def"> Sign Up </a>
                </div>
            </div>
        </div>
    );
}