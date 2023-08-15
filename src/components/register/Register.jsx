import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"

export default function Register(){
    return (
        <form id="register-signup">
                <p> Create your account </p>
                <div id="register-login"> Already have an account?
                    <Link to="/login"> Login </Link>
                </div>
            <div id="register-main">
                <fieldset> 
                    <legend> Personal Details </legend>
                    <input id="register-sname" placeholder="Name"/>
                    <input id="register-email" placeholder="Email Id"/>
                    <input type="text" pattern="[0-9]{10}" id="register-phnum" placeholder="Phone Number"/>
                    <input type="date"/>
                    <div id="register-gender"> 
                        <label for="rb" id="register-rb"> Gender </label>
                        <input type="radio" name="male" value="male" id="register-male"/>
                        <label for="Male">Male</label>
                        <input type="radio" value="female" id="register-female"/>
                        <label for="female">Female</label>
                        <input type="radio" value="none" id="register-none"/>
                        <label for="none">None</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend> College Details </legend>
                    <input id="register-uni" placeholder="University Name"/>
                    <input id="register-clg" placeholder="College Name"/>
                    <input id="register-crs" placeholder="Course"/>
                    <div id="register-rr">
                        <input id="register-roll" placeholder="Roll Number"/>
                        <input id="register-regis" placeholder="Registration Number"/>
                    </div>
                    <select id="register-sem">
                        <option value="s" id="register-sems"> Semester </option>
                        <option value="I"> I </option>
                        <option value="II"> II </option>
                        <option value="III"> III </option>
                        <option value="IV"> IV </option>
                        <option value="V"> V </option>
                        <option value="VI"> VI </option>
                        <option value="VII"> VII </option>
                        <option value="VIII"> VIII </option>
                    </select>
                </fieldset>
                </div>
                <div id="register-main1">
                    <fieldset id="register-pss">
                        <legend> Password </legend>
                        <input id="register-pass" placeholder="Password"/> 
                        <input id="register-confirmpass" placeholder="Confirm Password"/>
                    </fieldset>
                </div>
                <div id="register-main">
                    <button id="register-sign"> SignUp </button>
                    <br/>
                </div>
        </form>
    );
}