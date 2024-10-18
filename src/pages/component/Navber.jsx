import React from 'react';
import { User, FileText, Eye, BookOpen, Send, ShoppingCart, BriefcaseBusiness, Cpu, FolderKanban, BookOpenText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="w-[800px] z-10 bg-white ml ml-[290px] fixed  flex items-center py-4 px-10 rounded-lg shadow-md space-x-14 ">
      <NavItem to="/" icon={<User />} label="ABOUT" />
      <NavItem to="/experince" icon={ <BriefcaseBusiness />} label="EXPERIENCE" />
      <NavItem to="/skills" icon={ <Cpu/>} label="SKILLS" />
      <NavItem to="/projects" icon={<FolderKanban />} label="PROJECTS" />
      <NavItem to="/education" icon={<BookOpenText />} label="EDUCATION" />
      <NavItem to="/contact" icon={<Send />} label="CONTACT" />
     
    </div>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center space-y-1 ${isActive ? 'text-[#EC4899]' : 'text-black'}`
      }
    >
      <div className="w-8 h-8">{icon}</div>
      <span className="text-sm font-semibold">{label}</span>
    </NavLink>
  );
};

export default Navber;
