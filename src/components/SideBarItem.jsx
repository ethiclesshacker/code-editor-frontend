import React from "react";
import { Link } from "react-router-dom";


export default function SideBarItem({ path, pathText, children }) {

    return (
        <div className="text-white text-3xl m-6">
            <span> {children}  </span>
            <Link to={path}> {pathText} </Link>
        </div>
    )
}