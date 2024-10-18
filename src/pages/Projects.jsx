import React from 'react';
import { Eye, Info } from 'lucide-react'; // Example icons from Lucide

const Projects = () => {
  const projects = [
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image paths
      title: 'Manager',
      description: 'A multi-vendor e-commerce system. It is a platform that allows the user to buy and sell products online.',
      technologies: ['Tailwind', 'Next.js', 'Nest.js', 'Redux', 'MongoDB'],
      liveLink: '#',
      detailsLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image paths
      title: 'SLACMS',
      description: 'An exclusive phone reselling website. There are several categories with several products. Sellers and buyers can have their own role to sell and buy products.',
      technologies: ['Tailwind', 'MerakiUI', 'React', 'MongoDB', 'JWT'],
      liveLink: '#',
      detailsLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200', // Replace with actual image paths
      title: 'Ruby Medical Camp',
      description: 'An exclusive Poster-related service website. Several services that a person offers along with reviews are displayed.',
      technologies: ['Tailwind', 'React', 'Node.js', 'DaisyUI', 'MongoDB'],
      liveLink: '#',
      detailsLink: '#',
    },
  ];

  return (
    <section className="pt pt-6">
   <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-8">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white  text-black p-6 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="mb-4 pl-4 rounded-md" />
            <h3 className="text-xl text-[#EC4899] font-semibold">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <h4 className="font-medium">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-600 font-semibold  text-xs px-2 py-1 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex jus justify-center gap-8 pt-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-white gap-2 bg-[#EC4899] px-3 py-2 rounded-md"
              >
              Live View
              </a>
              <a
                href={project.detailsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-white gap-2 bg-[#EC4899]  px-3 py-2 rounded-md"
              >
                 Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
