import React from "react";
import { Navigate } from "react-router-dom";


export default function Logout() {

    if (localStorage.getItem("authenticated")) {
        localStorage.removeItem("userName");
        localStorage.removeItem("authenticated");
        localStorage.removeItem("authenticationToken");
    }
    return <Navigate replace to="/login" />;
}