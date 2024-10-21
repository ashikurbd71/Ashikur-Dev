import { Calendar, MapPin } from 'lucide-react'; // Importing Lucide Icons

const Experience = () => {
  return (
    <div className=" bg-white w-full rounded-md shadow-md lg:p-10 p-5  lg:mt-6 mb-6">
      <h2 className="lg:text-xl text-lg text-[#EC4899] font-bold border-b-2 border-black mb-4">EXPERIENCE</h2>

      <div className="mb-3">
        {/* Job Title */}
        <h3 className="text-lg font-semibold">Co-founder and Managing Director</h3>

        {/* Company Name */}
      <a href="https://exambazz.com/" target='blank'>  <h4 className="text-[#EC4899] font-medium">Exambazz</h4></a>

        {/* Date Period and Location */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>15 September 2024 - Present </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Bonasree, Dhaka</span>
          </div>
        </div>

        {/* Company Description */}
        <p className="text-gray-400 font-semibold mb-2">Description</p>

        {/* Accomplishments */}
        <ul className="list-disc pl-5 text-gray-900">
          <li>Our mission at ExamBazz is to revolutionize the way exams are conducted with a game-changing platform that makes assessments smarter, faster, and more efficient. Leading a dynamic team and working with cutting-edge technology, I’m incredibly excited about the journey ahead as we set out to transform education!</li>
          <li>A massive shoutout to everyone who has been a part of this journey—your support and encouragement mean the world to me. Your belief in our vision keeps us driven and ready to break new ground. Keep an eye out for exciting updates as we get closer to our launch and make waves in the EdTech sector!</li>
        </ul>
      </div>

      <div className="mb-3">
        {/* Job Title */}
        <h3 className="text-lg font-semibold">Software Engineer</h3>

        {/* Company Name */}
     
        <a href="https://systechdigital.com/"><h4 className="text-[#EC4899] font-medium">Systech Digital Limited</h4></a>

        {/* Date Period and Location */}
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>11 February 2024 - Present </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Level 4, House, 1 Road-16, Dhaka 1230</span>
          </div>
        </div>

        {/* Company Description */}
        <p className="text-gray-400 font-semibold mb-2">Job Description</p>

        {/* Accomplishments */}
        <ul className="list-disc pl-5 text-gray-900">
          <li>Ongoing development and enhancement of the company's BDRCS Mis System, management dashboard and
          contributed to the development of e-commerce and Management systems.</li>
          <li>Actively contributing to MERN stack development with Nest.js, PostgreSQL, React.js, Material UI, and
          Redux toolkit ensuring high code quality and best practices adherence.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
