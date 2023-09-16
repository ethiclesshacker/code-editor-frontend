import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";


export default function Dashboard()
{
    return(
        <div id="main" className="grid grid-cols-10 grid-rows-10 h-[100%] gap-2">
            {/* <!-- Element 1: Header--> */}
            <div id="topbar" className="col-span-10 col-start-1 row-start-1 row-span-1 border border-solid border-gray-400 bg-[#282c34] rounded-lg pr-2 flex justify-between items-center"></div>
            <div id="sidebar" className="col-span-2 col-start-2 row-start-2 row-span-9 border border-solid border-gray-400"></div>
        </div>
    );
}
