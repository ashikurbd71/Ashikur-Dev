import React from 'react';
import { Phone, Mail, MapPin, Calendar, Download, Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/ovi.jfif"
import { ReactTyped } from 'react-typed';
import { saveAs } from 'file-saver';
const Sidebar = () => {


  const handleDownload = () => {
    // Replace this URL with the path to your CV file
    const cvUrl = '/public/AshikurRahmanOviResume.pdf';
    
    // Use the file-saver library or a direct anchor to download the file
    saveAs(cvUrl, 'AshikurRahmanOvi_CV.pdf');
  };


  return (
    <div className=" lg:w-[300px] h-[580px] mt lg:fixed lg:mt-12 mt-16 mb-10 m p-6 bg-white shadow-lg rounded-lg">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Profile"
          className="rounded-lg w-44 h-44 object-cover border-4 border-white shadow-lg mb-4"
        />
        {/* Name and Job Title */}
        <h2 className="text-xl font-semibold">Ashikur Rahman Ovi</h2>
        <ReactTyped
  className="text-center text-md text-[#EC4899] font-semibold mt-2 px-2 py-2 bg-gray-100 rounded-full w-[230px] mx-auto"
  strings={[
    "Software Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Entrepreneur",
  ]}
  typeSpeed={60}
  backSpeed={70}
  loop
/>




      

        {/* Social Icons with NavLink */}
        <div className="flex justify-items-center mt-4 space-x-3">
          <a
             href='https://www.facebook.com/mdovi.7398'
            className="text-blue-500"
            activeClassName="font-bold"
            target='blank'
          >
           <Facebook/>
          </a>
          <a
             href="https://www.instagram.com/ashikurrahmanovi.1/"
            
            className="text-pink-500"
            activeClassName="font-bold"
                target='blank'
          >
            <Instagram/>
          </a>
          <a
           href='https://github.com/ashikurbd71?tab=repositories'
            className="text-blue-400"
            activeClassName="font-bold"
                target='blank'
          >
               <Github />

          </a>
          <a
               href='https://www.linkedin.com/in/ashikur-ovi/'
            className="text-blue-700"
            activeClassName="font-bold"
                target='blank'
          >
            <Linkedin/>
          </a>
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
      <button
      onClick={handleDownload}
      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md shadow hover:bg-pink-600 transition duration-200"
    >
      <Download className="w-5 h-5" />
      <span>Download CV</span>
    </button>
      </div>

       
    </div>
  );
};

export default Sidebar;
