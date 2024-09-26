import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const UserRoot = () => {
  return (
    <>
      <div className="flex justify-center mx-auto  xs:w-[100%] sm:w-[90%] md:w-[80%] lg:w-[1000px] xl:w-[1200px] items-center min-h-screen"> {/* Center content */}

          <div className="">
            <Sidebar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
  
    </>
  );
};

export default UserRoot;
