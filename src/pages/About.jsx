import { Button } from '@/components/ui/button';
import React from 'react';

const About = () => {
    return (
        
        <>
        <div className=' py-6'>

  <div className='bg bg-white rounded-md shadow-md px-4'>
  <div className="container mx-auto text-left p-10">
        <p className="text text-black font-semibold text-2xl pb-4">Hello, I’m <span className=' text-[#EC4899]'>Software Engineer</span> </p>
        <h1 className="text-5xl font-bold mb-6">
          Unity Game Developer <br />
          and <span className="text-pink-400">3D Artist</span> Based in <br />
          California, Los Angeles.
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          With over 6 years of professional experience in AAA game development, I have a
          proven track record in Unity, C++ proficiency, and have led the production of a
          mobile game. My leadership in cross-functional teams has significantly contributed
          to enhancing user engagement.
        </p>
      </div>
  </div>

                      
        </div>
        </>
    );
};

export default About;