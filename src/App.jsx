import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <>
    
     <div className="h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 md:w-3/4 h-full p-6 overflow-auto">
        {/* <h1 className="text-2xl font-bold">Dashboard Content</h1>
        <p className="mt-4">Here is your main page content...</p> */}
        <Outlet />
      </div>
    </div>
    
    </>
  );
}

export default App;
