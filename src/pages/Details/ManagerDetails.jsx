import { ExternalLink, Eye } from 'lucide-react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import manager1 from "../../assets/managerlogin.png";
import manager2 from "../../assets/manager1.png";
import manager3 from "../../assets/manager2.png";
import manager4 from "../../assets/manager3.png";
import manager5 from "../../assets/manager4.png";
import manager6 from "../../assets/manager6.png";
import manager7 from "../../assets/manager7.png";
import manager8 from "../../assets/manager8.png";
import manager9 from "../../assets/manager9.png";
import manager10 from "../../assets/manager10.png";
import manager11 from "../../assets/manager11.png";
import manager12 from "../../assets/managerpublic12.png";

const ManagerDetails = () => {
  return (
    <div className=" lg:mt-6  lg:p-10 p-5   bg-white rounded-md shadow-md text-black">
  <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-8">DETAILS</h2>
 <div className='mb my-16'>
 <Swiper
  // install Swiper modules
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={1} // Show only one image at a time
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}

     className={'lg:h-[380px] lg:w-full  h-full w-[300px]'}
>
  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager1}
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>
  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager2}
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>

  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager3}
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager4}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager5}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager6}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager7}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager8}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager9}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager10}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager11}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={manager12}
             alt="Full-screen Image"

         />
     </SwiperSlide>


</Swiper>

 </div>


      
      <div className=" bg-transparent  border-gray-700 rounded-lg  ">

        <p className="mb-4">
            A Hostel Information Management System. This platform allows owners to manage hostel operations, including user management and meal planning.
        </p>
        <p className="font-semibold mb-4">Specification:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Developed an innovative MIS System using React.js, Redux, Nest.js, and Postgresql.</li>
          <li>
              Our platform has three roles, one is the super admin who must be the Hostel owner and the other is the manager who will select the Hostel owner and Students .
          </li>
          <li>On our platform Super Admin i.e. hostel owner will go to the settings and add all the information of his hostel and select the manager.</li>
          <li>Manager can manage all student information here and can manage hostel meal planning and manage access of hostel students.And Also the manager can see all kinds of information of students and income expenditure on the dashboard</li>
          <li>Here students can check their meal planning updates and post pictures of their various events and various information including hostel notices.</li>

        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashikurbd71/Manager-Frontend"
            target="_blank"
            className="bg-[#EC4899] text-white flex items-center lg:px-4 px-2 py-2 rounded "
          >
             <ExternalLink className="mr-2 h-5 w-5" />
             Client Repo
          </a>
          <a
            href="https://github.com/ashikurbd71/Manager-Server"
            target="_blank"
            className="bg-[#EC4899] text-white flex items-center lg:px-4 px-2 py-2 rounded"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
         Server Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetails;
