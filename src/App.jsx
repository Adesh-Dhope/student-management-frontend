import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { Menu, X, UserPlus, FolderOpen, CalendarDays } from "lucide-react";


function App() {
  const menuItems = [
  { name: "Registration", icon: <UserPlus size={20} />, link: "/registration" },
  { name: "Records", icon: <FolderOpen size={20} />, link: "/recorddata" },
  { name: "YearData", icon: <CalendarDays size={20} />, link: "/registration" },
  { name: "Registration", icon: <UserPlus size={20} />, link: "/recorddata" },
  { name: "Records", icon: <FolderOpen size={20} />, link: "/registration" },
  { name: "YearData", icon: <CalendarDays size={20} />, link: "/recorddata" },
];
    const [isOpen, setIsOpen] = useState(false);
  
  return (

    <>
    
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />

      {/* Page Content */}
      <div className="flex-1 overflow-auto  md:pt-0 px-6">
        <Outlet />
      </div>
    </div>
    
    </>
  );
}

export default App;
