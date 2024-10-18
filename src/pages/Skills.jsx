import React from 'react';
import html from "../assets/html.jfif";
import css from "../assets/css.png";
import java from "../assets/java.png";
import tailwind from "../assets/tailwindcss.jfif";
import types from "../assets/type.png";
import react from "../assets/react.png";
import next from "../assets/next.png";


import node from "../assets/NODE.png";
import express from "../assets/express.png";
import nest from "../assets/nest.png";
import mongodb from "../assets/mongo.png";
import mongoose from "../assets/mongoose.png";
import postgresql from "../assets/post.jfif";
import orm from "../assets/orm.png";

const skills = [
  { name: "HTML", level: 5, icon:html },
  { name: "CSS", level: 4, icon: css,  },
  { name: "JAVASCRIPT", level: 4, icon: java,  },
  { name: "TAILWIND CSS", level: 4, icon:  tailwind, },
  { name: "TYPESCRIPT", level: 3, icon: types,  },
  { name: "REACT JS", level: 4, icon: react,  },
  { name: "NEXT JS", level: 4, icon: next, },
 
  
];


const backends = [
    { name: "NODE JS", level: 4, icon:node },
    { name: "EXPRESS JS", level: 5, icon: express,  },
    { name: "NEST JS", level: 4, icon: nest,  },
    { name: "MONGODB", level: 4, icon:  mongodb, },
    { name: "MONGOOSE", level: 4, icon: mongoose,  },
    { name: "POSTGRESQL", level: 4, icon: postgresql,  },
    { name: "TYPE ORM", level: 4, icon: orm, },
   
    
  ];

const Skills = () => {
  return (
    <div className="container mx-auto  py-5">
          <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-4">SKILLS</h2>

      <h2 className="text-2xl font-bold text-center mb-8">FRONTEND</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg- bg-white p-2 rounded-md shadow-md flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-3">
            <div className="relative text-lg font-semibold text-gray-700 bg-gray-200 rounded-full h-14 w-14 flex items-center justify-center overflow-hidden">
  <img src={skill.icon} alt="" className="h-full w-full object-cover" />
</div>

              <h3 className="text-md font-semibold text-gray-900">{skill.name}</h3>
            </div>
           
            <div className="w-full bg-gray-300 rounded-full pb-2  h-2 relative">
              <div
                className="bg-[#EC4899] h-2 rounded-full"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>


  {/* backend */}
  <h2 className="text-2xl font-bold text-center mb-8 pt-4">BACKEND</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {backends.map((skill, index) => (
          <div
            key={index}
            className="bg- bg-white p-2 rounded-md shadow-md flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-3">
            <div className="relative text-lg font-semibold text-gray-700 bg-gray-200 rounded-full h-14 w-14 flex items-center justify-center overflow-hidden">
  <img src={skill.icon} alt="" className="h-full w-full object-cover" />
</div>

              <h3 className="text-md font-semibold text-gray-900">{skill.name}</h3>
            </div>
           
            <div className="w-full bg-gray-300 rounded-full pb-2  h-2 relative">
              <div
                className="bg-[#EC4899] h-2 rounded-full"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
};

export default Skills;
