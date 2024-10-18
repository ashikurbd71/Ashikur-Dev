import { Button } from '@/components/ui/button';
import React from 'react';
import { ReactTyped } from 'react-typed';

const About = () => {
    return (
        
        <>
        <div className='py-4'>

  <div className='bg bg-white rounded-md shadow-md px-4'>
  <div className="container mx-auto text-left p-10">
        <p className="text text-black font-semibold text-2xl pb-4">Hello, I’m  <ReactTyped
  className=" text-[#EC4899] font-semibold "
  strings={[
    "Ashikur Rahman Ovi",
    "a Bangladeshi",
    "21 Years Old",
    

  ]}
  typeSpeed={60}
  backSpeed={70}
  loop
/> </p>
        <h1 className="text-5xl font-bold mb-6">
          Software Developer <br />
          and <span className="text-[#EC4899]">Entrepreneur</span> Based in <br />
          Rangpur, Bangladesh.
        </h1>
        <p className="text-md leading-relaxed max-w-2xl mx-auto">
        With over <span className=' text-[#EC4899] font-semibold'>2 years </span> of professional experience in <span className=' text-[#EC4899] font-semibold'>software development</span> , I have consistently demonstrated strong technical expertise and leadership abilities. I have successfully led and contributed to numerous projects, delivering high-quality solutions that align with business goals and user needs. My experience spans across various domains, where I’ve led cross-functional teams to foster collaboration, streamline workflows, and enhance overall user engagement.

As the <span className=' text-[#EC4899] font-semibold'>co-founder and Managing Director of Exambazz</span> , a pioneering educational platform in Bangladesh, I have been instrumental in driving the platform’s vision, strategy, and growth. At Exambazz, we aim to transform the educational landscape by providing innovative and accessible learning solutions. My leadership has not only helped shape the product but has also empowered our team to innovate continuously and deliver a seamless experience for our user
        </p>
      </div>
  </div>

                      
        </div>
        </>
    );
};

export default About;