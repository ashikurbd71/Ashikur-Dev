import React from 'react';
import { User, FileText, Eye, BookOpen, Send, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="w-full bg-white mt-10 flex items-center py-4 px-10 rounded-lg shadow-md space-x-16 ">
      <NavItem to="/about" icon={<User />} label="ABOUT" />
      <NavItem to="/resume" icon={<FileText />} label="RESUME" />
      <NavItem to="/works" icon={<Eye />} label="WORKS" />
      <NavItem to="/blog" icon={<BookOpen />} label="BLOG" />
      <NavItem to="/contact" icon={<Send />} label="CONTACT" />
      <NavItem to="/products" icon={<ShoppingCart />} label="PRODUCTS" />
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
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};

export default Navber;
