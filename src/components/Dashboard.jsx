import React from 'react'
// import { useState } from "react";
// import { Link} from "react-router-dom";

export default function Dashboard({ children }) {
  return (
    <div
      id="main"
      className="grid grid-cols-20 grid-rows-20 h-[100%] pt-2 pr-2 pb-2 pl-2"
    >
      {children}
      <div
        id="topbar"
        className="col-span-8 col-start-2 row-start-1 row-span-3 border border-solid border-gray-400 bg-inherit"
      >
        <p className="text-2xl text-center"> Header </p>
      </div>
      <div
        id="sidebar"
        className="col-span-1 col-start-1 row-start-1 row-span-20 h-[100%] border border-solid border-gray-400 bg-[#313467]"
      >
        <p className="text-2xl text-center"> Sidebar </p>
        <p className="text-xl text-center text-white"> Dashboard </p>
      </div>
      {/* <div className="col-span-8 row-span-1 col-start-3 row-start-4 pt-8 pl-10 font-semi-bold text-2xl"> Hello, Saloni! </div> */}
      <div
        id="dash"
        className="col-span-8 row-span-16 col-start-2 row-start-5 h-[100%] border border-solid border-gray-400 bg-inherit ml-2 mr-4 -mt-2 mb-0.5 rounded-lg"
      >
        <p className="text-2xl font-semi-bold pl-4 pt-2 pb-1">
          {' '}
          Hello, Saloni!{' '}
        </p>
      </div>
    </div>
  )
}
