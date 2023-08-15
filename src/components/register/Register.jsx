import React from "react";
import { Link } from "react-router-dom";
// import "./Register.css"

export default function Register(){
    return (
        <div className="flex justify-center items-center bg-blue-50">
        <form>
            <p className="mt-16 text-3xl font-serif font-bold ml-64"> Create your account </p>
            <div className="mb-3 ml-72"> Already have an account?
                <Link to="/login"> Login </Link>
            </div>
            <div id="register-main" className="grid grid-cols-2 gap-4">
                <fieldset className="mt-1 mr-1.5 pl-2 pb-2 pr-2 border border-solid border-slate-950"> 
                    <legend className="mb-2 text-2xl"> Personal Details </legend>
                    <input placeholder="Name" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <input placeholder="Email Id" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <input type="text" pattern="[0-9]{10}" placeholder="Phone Number" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <input type="date" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <div id="register-gender"> 
                        <label for="rb" className="float-left -mr-2 text-base"> Gender </label>
                        <input type="radio" name="male" value="male" className="float-left mt-2 w-20 h-3"/>
                        <label for="Male" className="float-left -ml-6 -mr-2 text-base">Male</label>
                        <input type="radio" value="female" className="float-left mt-2 w-20 h-3"/>
                        <label for="female" className="float-left -mr-2 -ml-6 text-base">Female</label>
                        <input type="radio" value="none" className="float-left mt-2 w-20 w-20 h-3"/>
                        <label for="none" className="float-left -ml-6 -mr-2 text-base">Other</label>
                    </div>
                </fieldset>
                <fieldset className="mt-1 mr-1.5 pl-2 pb-2 pr-2 border border-solid border-slate-950">
                    <legend className="mb-2 text-2xl"> College Details </legend>
                    <input className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="University Name"/>
                    <input className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="College Name"/>
                    <input className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="Course"/>
                    <div className="grid grid-cols-2 gap-x-0">
                        <input className="flex justify-end mb-4 w-36 h-10 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none " placeholder="Roll Number"/>
                        <input className="flex justify-end mb-4 -ml-8 w-56 h-10 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="Registration Number"/>
                    </div>
                    <select className="flex justify-end mb-px w-96 h-10 pl-2 border-b border-solid border-slate-950 bg-blue-50">
                        <option value="s" className="text-base"> Semester </option>
                        <option value="I" className="text-base"> I </option>
                        <option value="II" className="text-base"> II </option>
                        <option value="III" className="text-base"> III </option>
                        <option value="IV" className="text-base"> IV </option>
                        <option value="V" className="text-base"> V </option>
                        <option value="VI" className="text-base"> VI </option>
                        <option value="VII" className="text-base"> VII </option>
                        <option value="VIII" className="text-base"> VIII </option>
                    </select>
                </fieldset>
            </div>
                <div>
                    <fieldset className="grid grid-cols-2 mt-1 mr-1.5 pl-2 pb-2 pr-2 border border-solid border-slate-950">
                        <legend className="mb-2 text-2xl"> Password </legend>
                        <input type="password" className="mb-4 w-96 h-10 pl-2 ml-4 border-b border-solid border-slate-950 text-base bg-blue-50" placeholder="Password"/> 
                        <input type="password" className="mb-4 w-96 h-10 pl-2 ml-2 border-b border-solid border-slate-950 text-base bg-blue-50" placeholder="Confirm Password"/>
                    </fieldset>
                </div>
                <div>
                    <button className="ml-56 font-sans border border-solid border-blue-700 text-center w-96 h-10 bg-blue-700 text-base mt-3.5 mb-6"> SignUp </button>
                    <br/>
                </div>
        </form>
        </div>
    );
}