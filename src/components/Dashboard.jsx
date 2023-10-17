import React from 'react'
// import { useState } from "react";
// import { Link} from "react-router-dom";
import DashboardRow from './DashboardRow';
import SideBarItem from './SideBarItem';
import { FaHouse, FaCode, FaDoorOpen } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';

export default function Dashboard() {
  return (
    <div
      id="main"
      className="grid h-[100%] grid-cols-20 grid-rows-20 pb-2 pl-2 pr-2 pt-2"
    >
      <div
        id="topbar"
        className="col-span-16 col-start-5 row-span-2 row-start-1 mb-0.5 ml-2 mr-4 rounded-lg border border-solid border-gray-400 bg-inherit"
      >
        <div id="searchbar" className='flex items-center justify-items-start '>
          <input className='ml-2.5 mt-1.5 w-60 h-10 pl-2 bg-inherit border border-solid border-[#94a3b8] focus:outline-none' placeholder='Search'></input>
          <button className='ml-2.5 mt-1 pl-4 w-14 h-10 border border-solid border-[#313467] bg-[#313467] text-white text-xl font-bold'> <BsSearch /> </button>
        </div>
        
        {/* <span> <i class='fa fa-search'> <FaSearch /> </i></span>
        <input placeholder='Search'> </input> */}
        <p className="text-center text-2xl"> Code Editor </p>
      </div>

      <div
        id="sidebar"
        className="flex flex-col justify-center col-span-4 col-start-1 row-span-20 row-start-1 mb-0.5 rounded-lg border border-solid border-gray-400 bg-[#313467]"
      >
        <SideBarItem logo="home" path="/dashboard" pathText="Dashboard">
          <FaHouse />
        </SideBarItem>
        <SideBarItem logo="code" path="/code" pathText="Code" > <FaCode /> </SideBarItem>
        <SideBarItem logo="logout" path="/logout" pathText="Logout"> <FaDoorOpen /> </SideBarItem>

      </div>
      {/* <div className="col-span-8 row-span-1 col-start-3 row-start-4 pt-8 pl-10 font-semi-bold text-2xl"> Hello, Saloni! </div> */}

      <div
        id="dash"
        className="col-span-16 col-start-5 row-span-18 row-start-4 -mt-2 mb-0.5 ml-2 mr-4 h-[100%] rounded-lg border border-solid border-gray-400 bg-inherit"
      >
        <p className="font-semi-bold pb-1 pl-4 pt-2 text-2xl">
          {' '}
          Hello, {localStorage.getItem('userName')} !
        </p>
        <DashboardRow/>
      </div>
    </div>
  )
}

