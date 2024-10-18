import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navber from '@/pages/component/Navber';
import Footer from '@/pages/component/Footer';

const UserRoot = () => {
  return (
    <>
  
      <div className="  ml-28 flex gap gap-10 justify-items-center  "> {/* Center content */}

          <div className="ml ">
            <Sidebar />
          </div>
       
          <div className="flex flex-col mt-12 ">
              <div>
              <Navber className=""/>
              </div>

              <div className=' min-h-screen w-[800px] mt-24 mb-12 ml-[290px]'>
              <Outlet  />
              </div>

              <div>
                <Footer/>
              </div>
            
          </div>
        </div>
  
    </>
  );
};

export default UserRoot;
