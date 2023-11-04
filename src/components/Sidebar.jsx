import React from "react";
import SideBarItem from './SideBarItem'
import { FaHouse, FaCode, FaDoorOpen } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { TbReportAnalytics } from 'react-icons/tb'
import { MdLeaderboard } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { VscAccount } from 'react-icons/vsc'
export default function Sidebar() {
    return (
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
    );
}