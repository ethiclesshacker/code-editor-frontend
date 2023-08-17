import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";


export default function Register(){

    // Personal Details
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [gender, setGender] = useState("male");
    const [userDOB, setUserDOB] = useState("");

    // College Details
    const [universityName, setUniversityName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [roll, setRoll] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [semester, setSemester] = useState("");

    // Password
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function createUser(event){
        event.preventDefault();
        console.log(name, email, contactNumber, userDOB ,universityName);
    }

    return (
        <div className="flex justify-center items-center bg-blue-50">
        <form onSubmit={createUser}>
            <p className="mt-16 text-3xl font-serif font-bold ml-64"> Create your account </p>
            <div className="mb-3 ml-72"> Already have an account?
                <Link to="/login"> Login </Link>
            </div>
            <div id="register-main" className="grid grid-cols-2 gap-4">
                <fieldset className="mt-1 mr-1.5 pl-2 pb-2 pr-2 border border-solid border-slate-950"> 
                    <legend className="mb-2 text-2xl"> Personal Details </legend>
                    <input value={name} onChange={event => setName(event.target.value)} placeholder="Name" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Email Id" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <div>
                    <label htmlFor="contactNumber">+91</label> <input value={contactNumber} onChange={event => setContactNumber(event.target.value.substring(0,10))} type="text" placeholder="Phone Number" className="inline-flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    </div>
                    <input value={userDOB} onChange={event => setUserDOB(event.target.value)} type="date" className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none"/>
                    <div id="register-gender"> 
                        <label for="rb" className="float-left -mr-2 text-base"> Gender </label>

                        <input type="radio" name="gender" value="male" className="float-left mt-2 w-20 h-3"/>
                        <label for="gender" className="float-left -ml-6 -mr-2 text-base">Male</label>

                        <input type="radio" value="gender" className="float-left mt-2 w-20 h-3"/>
                        <label for="gender" className="float-left -mr-2 -ml-6 text-base">Female</label>

                        <input type="radio" name="gender" value="other" className="float-left mt-2 w-20 w-20 h-3"/>
                        <label for="gender" className="float-left -ml-6 -mr-2 text-base">Other</label>
                    </div>
                </fieldset>
                <fieldset className="mt-1 mr-1.5 pl-2 pb-2 pr-2 border border-solid border-slate-950">
                    <legend className="mb-2 text-2xl"> College Details </legend>
                    <input value={universityName} onChange={event => setUniversityName(event.target.value)} className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="University Name"/>
                    <input value={collegeName} onChange={event => setCollegeName(event.target.value)} className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="College Name"/>
                    <input value={courseName} onChange={event => setCourseName(event.target.value)} className="flex justify-end mb-4 w-96 h-10 pl-2 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="Course"/>
                    <div className="grid grid-cols-2 gap-x-0">
                        <input value={roll} onChange={event => setRoll(event.target.value)} className="flex justify-end mb-4 w-36 h-10 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none " placeholder="Roll Number"/>
                        <input value={registrationNumber} onChange={event => setRegistrationNumber(event.target.value)} className="flex justify-end mb-4 -ml-8 w-56 h-10 border-b border-solid border-slate-950 text-base bg-blue-50 focus:outline-none" placeholder="Registration Number"/>
                    </div>
                    <select value={semester} onChange={event => setSemester(event.target.value)} className="flex justify-end mb-px w-96 h-10 pl-2 border-b border-solid border-slate-950 bg-blue-50">
                        <option value="" className="text-base"> Semester </option>
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
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password" className="mb-4 w-96 h-10 pl-2 ml-4 border-b border-solid border-slate-950 text-base bg-blue-50" placeholder="Password"/> 
                        <input value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} type="password" className="mb-4 w-96 h-10 pl-2 ml-2 border-b border-solid border-slate-950 text-base bg-blue-50" placeholder="Confirm Password"/>
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