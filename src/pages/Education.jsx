import React from 'react';

const Education = () => {
  const educationData = [
    {
      "yearRange": "2017 - 2022",
      "degree": "SSC",
      "schoolName": "New Poritichurti Kindergarten and School",
      "location": "Nageswari, Kurigram, Bangladesh",
      "description": "I studied there from class 6 to class 10, and it was a formative period of my life. The school not only shaped my academic journey but also gave me many unforgettable childhood memories. From friendships that lasted beyond the classroom to lessons that shaped my values, this place holds a special place in my heart."
    },
    
    {
      "yearRange": "2022 - Present",
      "degree": "Computer Science and Technology",
      "schoolName": "Rangpur Ideal Institute of Technology",
      "location": "Rangpur, Bangladesh",
      
        "description": "I am currently in my 5th semester, studying at Rangpur Ideal Institute of Technology, pursuing a degree in Computer Science and Technology. My goal is to become a skilled software engineer with expertise in various programming languages and technologies. I am passionate about innovation and problem-solving, and I hope to use my knowledge to create solutions that can have a positive impact on society. Beyond my personal aspirations, I am committed to contributing to the growth and development of my country by applying my technical skills to address real-world challenges and support the technological advancement of Bangladesh."
      
      
    }
    
   
  ];

  return (
    <section className="mt lg:mt-6 rounded-md shadow-md lg:p-10 p-5 bg-white">
      <h2 className="lg:text-xl  text-lg text-[#EC4899] font-bold border-b-2 border-black mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-[#EC4899] pl-6">
        {educationData.map((education, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-[#EC4899] rounded-full -left-6 top-1.5"></div>
            <p className="text-sm font-semibold text-gray-500">{education.yearRange}</p>
            <h3 className="lg:text-xl text-lg font-semibold text-[#EC4899]">{education.degree}</h3>
            <p className="text-md text-gray-700"> <span className='font font-semibold'>{education.schoolName}</span> - {education.location}</p>
            <p className="text-gray-600 mt-2">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
