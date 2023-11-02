import React from 'react'
// import { useState } from "react";
// import { Link} from "react-router-dom";
import DashboardRow from './DashboardRow';
import SideBarItem from './SideBarItem';
import { FaHouse, FaCode, FaDoorOpen } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { TbReportAnalytics } from 'react-icons/tb'
import { MdLeaderboard } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { VscAccount } from 'react-icons/vsc'

export default function Dashboard() {
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
          <input className='ml-2.5 mt-1.5 w-60 h-10 pl-2 bg-inherit border border-solid border-[#94a3b8] focus:outline-none' placeholder='Search'></input>
          <button className='ml-2.5 mt-1 pl-4 w-14 h-10 border border-solid border-[#313467] bg-[#313467] text-white text-xl font-bold'> <BsSearch /> </button>
        </div>
         <p className="text-center text-2xl"> Code Editor </p>
      </div> 
      */}

      {/* SIDEBAR */}
      <div
        id="sidebar"
        className="col-span-4 col-start-1 row-span-20 row-start-1 mb-0.5 rounded-lg border border-solid border-gray-400 bg-[#313467]"
      >
        <div className='flex items-center justify-center w-100%'>
          <img src='ProfImg.jpg' alt='Profile Image' className='mt-4 w-20 h-20 rounded-full'></img>
        </div>
        <p className="flex items-center justify-center w-100% font-semi-bold pb-1 pt-2 text-2xl text-white mb-8">
          {' '}
          Hello, {localStorage.getItem('userName')} !
        </p>

        <SideBarItem logo="profile" path="/profile" pathText="My Profile" > <VscAccount /> </SideBarItem>
        <SideBarItem logo="home" path="/dashboard" pathText="Dashboard"> <FaHouse /> </SideBarItem>
        <SideBarItem logo="code" path="/code" pathText="Code" > <FaCode /> </SideBarItem>
        <SideBarItem logo="report" path="/report" pathText="Report"> <TbReportAnalytics /> </SideBarItem>
        <SideBarItem logo="leaderboard" path="/leaderboard" pathText="Leaderboard"> <MdLeaderboard /> </SideBarItem>
        <SideBarItem logo="settings" path="/settings" pathText="Settings"> <FiSettings /> </SideBarItem>
        <SideBarItem logo="logout" path="/logout" pathText="Logout"> <FaDoorOpen /> </SideBarItem>

      </div>

      {/* DASHBOARD */}
      <div
        id="dashboard"
        className="col-span-16 col-start-5 row-span-20 mt-2 mb-2 ml-2 mr-4 h-[100%] rounded-lg border border-solid border-gray-400 bg-inherit"
      >
        <DashboardRow />
      </div>

    </div>
  )
}

