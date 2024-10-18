import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navber from '@/pages/component/Navber';

const UserRoot = () => {
  return (
    <>
  
      <div className="  ml-28 flex gap gap-10 justify-items-center  items-center  "> {/* Center content */}

          <div className="ml ">
            <Sidebar />
          </div>
       
          <div className="flex flex-col mt-12 ">
              <div>
              <Navber className=""/>
              </div>

              <div className=' min-h-screen w-[800px] mt-3'>
              <Outlet  />
              </div>
            
          </div>
        </div>
  
    </>
  );
};

export default UserRoot;
