import React from 'react';
import { Eye, Info } from 'lucide-react'; // Example icons from Lucide
import { Link } from 'react-router-dom';
import manager from "../assets/manager11.png"
import slacms from "../assets/slcehome.png"
import ruby from "../assets/ruby1.png"
const Projects = () => {
  const projects = [
    {
      image: manager, // Replace with actual image paths
      title: 'Manager',
      description: 'A Hostel Information Management System. This platform allows owners to manage hostel operations, including user management and meal planning.',
      technologies: ['Tailwind',"Javascript", 'React js', "Node js" ,'Nest.js', 'Redux', "Type ORM", 'Postgresql',"React Router","Shadcn Ui",'JWT',],
      liveLink: '#',
      detailsLink: '/managerdetails',
    },
    {
      image: slacms, // Replace with actual image paths
      title: 'SLACMS',
      description: 'A Student Life and Career Management System ,In this system, students can create their professional resumes, while both teachers and students can manage and update daily class schedules  .',
      technologies: ['Tailwind', "Javascript",'React', "React Router" ,'MongoDB', 'Mongoose',"Node js" , "Express js"],
      liveLink: '#',
      detailsLink: '/slamcsdetails',
    },
    {
      image: ruby, // Replace with actual image paths
      title: 'Ruby Medical Camp',
      description: ' This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps.Organizers can add new Camps from their dashboard. And he can manage them.Professionals can make wishes in the upcoming times.',
      technologies: ['Tailwind', "Javascript ",'React',' Mui', 'Node.js', "Express js", 'MongoDB',"Stripe ","Firebase ","Axois","JWT"],
      liveLink: '#',
      detailsLink: '/rubydetails',
    },
  ];

  return (
    <section className="pt lg:pt-6">
   <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-8">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white  text-black p-6 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="mb-4 shaw shadow-lg rounded-md" />
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
              <Link
              aria-disabled
               to={`${project.liveLink}`}
                className="flex items-center text-sm text-white gap-2 bg-[#EC4899] px-3 py-2 rounded-md"
              >
              Live View
              </Link>
              <Link
                 to={project.detailsLink}
        
                className="flex items-center text-sm text-white gap-2 bg-[#EC4899]  px-3 py-2 rounded-md"
              >
                 Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
