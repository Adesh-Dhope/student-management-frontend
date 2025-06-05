// Sidebar.jsx
import React, { useState } from "react";
import { Menu, X, UserPlus, FolderOpen, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Registration", icon: <UserPlus size={20} /> , link:'/registration' },
  { name: "Records", icon: <FolderOpen size={20} />, link:'/recorddata' },
  { name: "YearData", icon: <CalendarDays size={20} />, link:'/registration' },
    { name: "Registration", icon: <UserPlus size={20} /> , link:'/recorddata'},
  { name: "Records", icon: <FolderOpen size={20} /> , link:'/registration'},
  { name: "YearData", icon: <CalendarDays size={20} /> , link:'/recorddata'},
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="flex flex-col md:flex-row h-screen">    {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Student Managemnt</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
    <div
  className={`fixed md:relative top-0 left-0 h-full sm:w-40 md:w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
>
  <div className="p-4 bg-blue-600 text-white font-bold  text-base md:text-xl">
    Student Management
  </div>

  <ul className="p-4 space-y-4 flex flex-col items-start">
    {menuItems.map((item, index) => (
      // <li
      //   key={index}
      //   className="flex flex-row items-center gap-3 px-2 py-2 rounded-lg hover:bg-blue-100 cursor-pointer w-full"
      // >
      //   {item.icon}
      //   <span className="text-gray-800 text-sm">{item.name}</span>
      // </li>
      <li key={index} className="w-full">
  <Link to={item.link} className="flex flex-row items-center gap-3 px-2 py-2 rounded-lg hover:bg-blue-100 cursor-pointer w-full">
    {item.icon}
    <span className="text-gray-800 text-sm">{item.name}</span>
  </Link>
</li>
    ))}
  </ul>
</div>


      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      </div>
 
      </>
  );
};

export default Sidebar;
