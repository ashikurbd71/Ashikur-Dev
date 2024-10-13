import React from 'react';
import { Phone, Mail, MapPin, Calendar, Download, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/ovi.jpeg"
const Sidebar = () => {
  return (
    <div className=" w-[300px] h-[580px] p-6 bg-white shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Profile"
          className="rounded-lg w-44 h-44 object-cover border-4 border-white shadow-lg mb-4"
        />
        {/* Name and Job Title */}
        <h2 className="text-2xl font-semibold">Ashikur Rahman Ovi</h2>
        <span className="text-sm text-gray-500 mt-2 px-2 py-1 bg-gray-100 rounded-full">
          Software Engiineer
        </span>

        {/* Social Icons with NavLink */}
        <div className="flex mt-4 space-x-3">
          <NavLink
            to="/facebook"
            className="text-blue-500"
            activeClassName="font-bold"
          >
           <Facebook/>
          </NavLink>
          <NavLink
            to="/instagram"
            className="text-pink-500"
            activeClassName="font-bold"
          >
            <Instagram/>
          </NavLink>
          <NavLink
            to="/twitter"
            className="text-blue-400"
            activeClassName="font-bold"
          >
            <Twitter/>
          </NavLink>
          <NavLink
            to="/linkedin"
            className="text-blue-700"
            activeClassName="font-bold"
          >
            <Linkedin/>
          </NavLink>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Phone className="text-pink-500 w-5 h-5" />
          <span className="text-gray-600">+880-1581782193</span>
        </div>

        <div className="flex items-center space-x-2">
          <Mail className="text-blue-500 w-5 h-5" />
          <span className="text-gray-600">ashikurovi2003@gmail.com</span>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="text-red-500 w-5 h-5" />
          <span className="text-gray-600">Rangpur, Bangladesh</span>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar className="text-purple-500 w-5 h-5" />
          <span className="text-gray-600">Augest 17, 2003</span>
        </div>
      </div>

      {/* Download CV with NavLink */}
      <div className="mt-6">
        <NavLink
          to="/download-cv"
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md shadow hover:bg-pink-600 transition duration-200"
          activeClassName="bg-pink-600"
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
