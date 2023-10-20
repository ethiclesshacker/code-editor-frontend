import React from "react";
import { Link } from "react-router-dom";


export default function SideBarItem({ path, pathText, children }) {

    return (
        <div className="text-white text-xl m-4 pd-2">
            <div className="inline-block -mb-0.5 mr-1.5">
                <span> {children} </span>
            </div>
            <Link to={path}> {pathText} </Link>    
        </div>
    )
}