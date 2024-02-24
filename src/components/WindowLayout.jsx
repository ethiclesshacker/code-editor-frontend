import React from 'react'
// import { useState } from "react";
// import { Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

import { Outlet } from 'react-router-dom';

export default function WindowLayout() {
  return (
    <div
      id="main"
      className="grid h-[100%] grid-cols-20 grid-rows-20 pb-2 pl-2 pr-2 pt-2"
    >
      {/* TOPBAR */}
      
      {/* <div
        id="topbar"
        className="col-span-16 col-start-5 row-span-2 row-start-1 mb-0.5 ml-2 mr-4 rounded-lg border border-solid border-gray-400 bg-inherit  flex align-center"
      >
        <div id="searchbar" className='flex items-center justify-items-start '>
          <input className='ml-2.5 mt-1.5 w-60 h-10 pl-2 bg-inherit border border-solid border-inherit focus:outline-none' placeholder='Search'></input>
          <button className='ml-2.5 mt-1 pl-4 w-14 h-10 border border-solid border-[#313467] bg-[#313467] text-white text-xl font-bold'> <BsSearch /> </button>
        </div>
         <p className="text-center text-2xl"> Code Editor </p>
      </div> 
      */}

      {/* SIDEBAR */}
      <Sidebar />

      <div id="topbar" className='col-span-16 col-start-5 row-start-1 row-span-3 rounded-lg border border-solid border-gray-400 bg-[#313467] mb-0.5 ml-2 mr-2'>
        <p className='ml-4 mt-2 text-white text-xl'> Dashboard #Will show the path </p>
      </div>

      {/* <Dashboard/> */}
      <Outlet/>

    </div>
  )
}

