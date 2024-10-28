import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navber from '@/pages/component/Navber';
import Footer from '@/pages/component/Footer';

const UserRoot = () => {
  return (
    <>
  
      <div className="  lg:ml-24 2xl:ml-[380px] px-5 flex gap lg:gap-10 lg:flex-row flex-col lg:justify-items-center  "> {/* Center content */}

          <div className="ml ">
            <Sidebar />
          </div>
       
          <div className="flex flex-col lg:mt-12 ">
              <div>
              <Navber className=""/>
              </div>

              <div className=' min-h-screenZ lg:w-[800px] lg:mt-24 mb-12 lg:ml-[290px] '>
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
