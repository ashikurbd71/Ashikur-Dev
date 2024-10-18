import React from 'react';

const Education = () => {
  const educationData = [
    {
      yearRange: '2018 - 2022',
      degree: 'High School Degree',
      schoolName: 'ABC High School',
      location: 'City A, Country B',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      yearRange: '2018 - 2022',
      degree: "Bachelor's Degree",
      schoolName: 'XYZ University',
      location: 'City C, Country D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      yearRange: '2022 - 2024',
      degree: 'Master Degree',
      schoolName: 'LMN University',
      location: 'City E, Country F',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="mt mt-6 rounded-md shadow-md p-10 bg-white">
      <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-[#EC4899] pl-6">
        {educationData.map((education, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-[#EC4899] rounded-full -left-6 top-1.5"></div>
            <p className="text-sm text-gray-500">{education.yearRange}</p>
            <h3 className="text-xl font-semibold text-gray-900">{education.degree}</h3>
            <p className="text-md text-gray-700">{education.schoolName} - {education.location}</p>
            <p className="text-gray-600 mt-2">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
