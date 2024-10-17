import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navber from '@/pages/component/Navber';

const UserRoot = () => {
  return (
    <>
      <div className="  grid grid-cols-2  items-center  min-h-screen"> {/* Center content */}

          <div className="ml ml-32">
            <Sidebar />
          </div>
          <div className="flex flex-col -ml-[160px]    ">
            <Navber className="mt "/>
            <Outlet  />
          </div>
        </div>
  
    </>
  );
};

export default UserRoot;
