import React, { useState } from 'react';
import { User, Cpu, Send, BriefcaseBusiness, FolderKanban, BookOpenText, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="z-10">
      {/* Navbar for desktop view */}
      <div className="hidden md:flex w-[800px] backdrop-blur z-10 bg-white ml-[290px] fixed items-center py-4 rounded-lg shadow-md space-x-10">
        <NavItem to="/" icon={<User />} label="ABOUT" />
        <NavItem to="/experince" icon={<BriefcaseBusiness />} label="EXPERIENCE" />
        <NavItem to="/skills" icon={<Cpu />} label="SKILLS" />
        <NavItem to="/projects" icon={<FolderKanban />} label="PROJECTS" />
        <NavItem to="/education" icon={<BookOpenText />} label="EDUCATION" />
        <NavItem to="/contact" icon={<Send />} label="CONTACT" />
      </div>

      {/* Mobile Drawer toggle button */}
      <div className="md:hidden bg-transparent backdrop-blur w-full shadow-md fixed flex py-1 gap items-center justify-between top-0 right-0 z-20">
        <h1 className='fon font-bold pl-6 text-lg'>A<span className='text-[#EC4899]'>S</span>HIK<span className='text-[#EC4899]'>U</span>R D<span className='text-[#EC4899]'>e</span>v.</h1>
        <button onClick={toggleDrawer} className='pr-5'>
          {isDrawerOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Drawer for mobile view */}
      <div
        className={`fixed lg:hidden top-12 right-0 h-[350px] rounded-s-md bg-white w-16 transform transition-transform duration-300 ease-in-out z-30 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 py-6 px-2">
          <NavItem to="/" icon={<User />} />
          <NavItem to="/experince" icon={<BriefcaseBusiness />} />
          <NavItem to="/skills" icon={<Cpu />} />
          <NavItem to="/projects" icon={<FolderKanban />} />
          <NavItem to="/education" icon={<BookOpenText />} />
          <NavItem to="/contact" icon={<Send />} />
        </div>
      </div>

      {/* Background overlay when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black lg:opacity-0 opacity-20 z-20"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      title={label}
      className={({ isActive }) =>
        `flex flex-col md:flex-row items-center gap-2 cursor-pointer ${
          isActive ? 'text-[#EC4899]' : 'text-black'
        }`
      }
    >
     <div className='flex flex-col items-center pl-3 lg:pl-6'>
     <div className="w-8 h-8">{icon}</div>
      {/* Show label only in desktop view */}
      <span className="hidden md:inline text-sm">{label}</span>
     </div>
    </NavLink>
  );
};

export default Navber;
